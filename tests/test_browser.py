"""Browser regressions; external requests are denied and no user data is used.

Normal mode tests the site from a temporary loopback HTTP server. For a sandbox
that disallows navigation, PORTFOLIO_TEST_INLINE=1 renders the same files in memory
with a controlled storage adapter. Inline mode is not an HTTP/deployment test.
"""
from __future__ import annotations

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
from threading import Thread
import unittest

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
INLINE = os.getenv("PORTFOLIO_TEST_INLINE") == "1"


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, _format: str, *args: object) -> None:
        pass


class PortfolioBrowserTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.playwright = sync_playwright().start()
        launch = {"headless": True}
        executable = os.getenv("PLAYWRIGHT_CHROMIUM_EXECUTABLE")
        if executable:
            launch["executable_path"] = executable
        cls.browser = cls.playwright.chromium.launch(**launch)
        cls.server = ThreadingHTTPServer(
            ("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT))
        )
        cls.thread = Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.url = f"http://127.0.0.1:{cls.server.server_port}/"
        print(f"Browser: {cls.browser.version}; mode: {'inline' if INLINE else 'HTTP'}")

    @classmethod
    def tearDownClass(cls) -> None:
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=3)
        cls.browser.close()
        cls.playwright.stop()

    def page(self, *, width: int = 1280, javascript: bool = True,
             storage: str = "normal", saved: str | None = None,
             locale: str = "es-MX", reduced_motion: str = "no-preference",
             no_observer: bool = False):
        context = self.browser.new_context(
            viewport={"width": width, "height": 900},
            java_script_enabled=javascript, locale=locale,
            reduced_motion=reduced_motion,
        )
        self.addCleanup(context.close)
        context.route("**/*", lambda route: (
            route.continue_() if route.request.url.startswith(self.url) else route.abort()
        ))
        setup = ""
        if INLINE:
            setup += """const values = new Map();
Object.defineProperty(window, 'localStorage', {configurable:true, value:{
getItem(key){return values.get(key) ?? null},
setItem(key,value){values.set(key,String(value))}
}});"""
        if saved is not None:
            setup += "window.localStorage.setItem('aalfredo-language'," + json.dumps(saved) + ");"
        if storage == "get-denied":
            setup += """Object.defineProperty(window,'localStorage',{configurable:true,
get(){throw new DOMException('Storage disabled','SecurityError')}});"""
        elif storage == "set-denied":
            if INLINE:
                setup += "window.localStorage.setItem=()=>{throw new DOMException('Full','QuotaExceededError')};"
            else:
                setup += "Storage.prototype.setItem=()=>{throw new DOMException('Full','QuotaExceededError')};"
        if no_observer:
            setup += "delete window.IntersectionObserver;"
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        if INLINE:
            html = (ROOT / "index.html").read_text(encoding="utf-8")
            html = html.replace('<link rel="stylesheet" href="styles.css">',
                                '<style>' + (ROOT / "styles.css").read_text(encoding="utf-8") + '</style>')
            html = html.replace('<script src="script.js"></script>',
                                '<script>' + setup + '</script><script>' +
                                (ROOT / "script.js").read_text(encoding="utf-8") + '</script>')
            page.set_content(html)
        else:
            context.add_init_script(setup)
            page.goto(self.url)
        page.wait_for_timeout(500)
        return page, errors

    def assert_content_readable(self, page) -> None:
        self.assertEqual(page.locator('.hero-main').evaluate('(e)=>getComputedStyle(e).opacity'), '1')
        self.assertEqual(page.locator('.project-row').count(), 6)
        self.assertEqual(page.locator('#certifications article').count(), 13)

    def test_without_javascript_content_and_mobile_links_remain_available(self):
        page, errors = self.page(width=390, javascript=False)
        self.assert_content_readable(page)
        self.assertNotEqual(page.locator('#navLinks').evaluate('(e)=>getComputedStyle(e).display'), 'none')
        self.assertEqual(page.locator('#downloadCvBtn').get_attribute('href'), 'assets/PDFs/cv-espanol.pdf')
        self.assertEqual(errors, [])

    def test_blocked_storage_does_not_hide_content_or_break_translation(self):
        page, errors = self.page(width=390, storage='get-denied')
        self.assert_content_readable(page)
        page.locator('#changeLanguageBtn').click()
        self.assertEqual(page.locator('html').get_attribute('lang'), 'en')
        self.assertEqual(page.locator('#downloadCvBtn').get_attribute('href'), 'assets/PDFs/cv-english.pdf')
        self.assertEqual(errors, [])

    def test_full_storage_does_not_break_language_switch(self):
        page, errors = self.page(storage='set-denied')
        self.assert_content_readable(page)
        page.locator('#changeLanguageBtn').click()
        self.assertEqual(page.locator('html').get_attribute('lang'), 'en')
        self.assertEqual(errors, [])

    def test_saved_language_has_priority(self):
        page, errors = self.page(saved='en')
        self.assertEqual(page.locator('html').get_attribute('lang'), 'en')
        self.assertEqual(errors, [])

    def test_invalid_saved_language_uses_browser_language(self):
        page, errors = self.page(saved='not-a-language')
        self.assertEqual(page.locator('html').get_attribute('lang'), 'es')
        self.assertEqual(errors, [])

    def test_language_switch_preserves_cv_paths_and_saved_preference(self):
        page, errors = self.page(locale='en-US')
        self.assertEqual(page.locator('html').get_attribute('lang'), 'en')
        page.locator('#changeLanguageBtn').click()
        self.assertEqual(page.locator('html').get_attribute('lang'), 'es')
        self.assertEqual(page.locator('#downloadCvBtn').get_attribute('href'), 'assets/PDFs/cv-espanol.pdf')
        self.assertEqual(page.evaluate("localStorage.getItem('aalfredo-language')"), 'es')
        self.assertEqual(errors, [])

    def test_menu_escape_restores_focus(self):
        page, errors = self.page(width=390)
        button = page.locator('#menuToggle')
        button.click()
        self.assertEqual(button.get_attribute('aria-expanded'), 'true')
        page.locator('#navLinks a').first.focus()
        page.keyboard.press('Escape')
        self.assertEqual(button.get_attribute('aria-expanded'), 'false')
        self.assertEqual(page.evaluate('document.activeElement.id'), 'menuToggle')
        self.assertEqual(errors, [])

    def test_reduced_motion_keeps_content_available(self):
        page, errors = self.page(reduced_motion='reduce')
        self.assert_content_readable(page)
        self.assertEqual(errors, [])

    def test_missing_observer_does_not_break_content_or_controls(self):
        page, errors = self.page(no_observer=True)
        self.assert_content_readable(page)
        page.locator('#changeLanguageBtn').click()
        self.assertEqual(page.locator('html').get_attribute('lang'), 'en')
        self.assertEqual(errors, [])

    def test_responsive_layout_has_no_horizontal_overflow(self):
        for width in (320, 390, 720, 980, 981, 1280, 1440):
            with self.subTest(width=width):
                page, errors = self.page(width=width)
                self.assertFalse(page.evaluate('document.documentElement.scrollWidth > innerWidth'))
                self.assertEqual(errors, [])

    def test_project_evidence_links_and_credits_are_preserved(self):
        page, errors = self.page()
        self.assertEqual(page.locator('.project-evidence').count(), 6)
        self.assertEqual(page.locator('.project-evidence a').count(), 5)
        self.assertIn('Darksen', page.locator('#projects').inner_text())
        self.assertEqual(page.locator('a[href^="https://github.com/UltimateMacro/"]').count(), 2)
        self.assertEqual(errors, [])


if __name__ == '__main__':
    unittest.main(verbosity=2)
