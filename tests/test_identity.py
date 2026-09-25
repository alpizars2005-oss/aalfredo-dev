"""Keep the chosen public display name without rewriting external identity links."""
from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class IdentityParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hero = False
        self.hero_text = []
        self.description = ""

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "h1" and values.get("id") == "heroTitle":
            self.hero = True
        if tag == "meta" and values.get("name") == "description":
            self.description = values.get("content", "")

    def handle_endtag(self, tag):
        if tag == "h1":
            self.hero = False

    def handle_data(self, data):
        if self.hero and data.strip():
            self.hero_text.append(data.strip())


class PublicIdentityTests(unittest.TestCase):
    def test_public_name_and_professional_links(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        script = (ROOT / "script.js").read_text(encoding="utf-8")
        parser = IdentityParser()
        parser.feed(html)
        self.assertEqual(parser.hero_text, ["Angel", "Alfredo"])
        self.assertIn("<strong>ANGEL ALFREDO</strong>", html)
        self.assertNotIn("Alpizar", parser.description)
        self.assertNotIn("Angel Alfredo Alpizar", script)
        self.assertIn("https://github.com/alpizars2005-oss", html)
        self.assertIn("https://www.linkedin.com/in/angel-alfredo-alpizar-sanchez-6559a4278", html)
        self.assertIn("assets/PDFs/cv-espanol.pdf", html)
        self.assertIn("assets/PDFs/cv-english.pdf", script)


if __name__ == "__main__":
    unittest.main()
