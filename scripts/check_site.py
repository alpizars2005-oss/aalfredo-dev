from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
SCRIPT = ROOT / "script.js"
STORYTELLING_STYLES = ROOT / "storytelling.css"

REQUIRED_IDS = {
    "languageScreen",
    "portfolio",
    "navLinks",
    "profile",
    "projects",
    "stack",
    "certifications",
    "contact",
    "downloadCvBtn",
    "currentYear",
}

REQUIRED_STORYTELLING_TOKENS = {
    'storytellingStylesheet.href = "storytelling.css"',
    'id="storyMetrics"',
    'id="copyDiscordBtn"',
    'id="discordCopyStatus"',
    'const username = "pizzaroles24"',
    "SYSTEM VISUALIZATION · NOT A SCREENSHOT",
}


class PortfolioParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.anchor_targets: set[str] = set()
        self.local_refs: set[str] = set()
        self.translation_errors: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        if element_id:
            self.ids.add(element_id)

        has_es = "data-es" in values
        has_en = "data-en" in values
        if has_es != has_en:
            label = element_id or tag
            self.translation_errors.append(f"{label}: data-es/data-en must appear together")

        href = values.get("href")
        if tag == "a" and href and href.startswith("#") and len(href) > 1:
            self.anchor_targets.add(href[1:])

        ref = values.get("src") if tag == "script" else href if tag in {"a", "link"} else None
        if not ref or ref.startswith(("#", "mailto:", "tel:")):
            return
        parsed = urlparse(ref)
        if parsed.scheme in {"http", "https"}:
            return
        self.local_refs.add(ref.split("?", 1)[0].lstrip("./"))


def main() -> None:
    parser = PortfolioParser()
    parser.feed(INDEX.read_text(encoding="utf-8"))

    errors: list[str] = []
    missing_ids = REQUIRED_IDS - parser.ids
    dangling_anchors = parser.anchor_targets - parser.ids - {"top"}
    missing_files = sorted(ref for ref in parser.local_refs if not (ROOT / ref).is_file())

    if missing_ids:
        errors.append(f"Missing required ids: {sorted(missing_ids)}")
    if dangling_anchors:
        errors.append(f"Navigation points to missing ids: {sorted(dangling_anchors)}")
    if missing_files:
        errors.append(f"Missing local assets: {missing_files}")
    errors.extend(parser.translation_errors)

    if not STORYTELLING_STYLES.is_file():
        errors.append("Missing storytelling.css")

    script_text = SCRIPT.read_text(encoding="utf-8")
    missing_storytelling_tokens = sorted(
        token for token in REQUIRED_STORYTELLING_TOKENS if token not in script_text
    )
    if missing_storytelling_tokens:
        errors.append(
            "Storytelling module contract missing tokens: "
            f"{missing_storytelling_tokens}"
        )

    if errors:
        raise SystemExit("\n".join(errors))

    print(
        f"Portfolio contract OK: {len(parser.ids)} ids, "
        f"{len(parser.anchor_targets)} local anchors, {len(parser.local_refs)} local files, "
        f"{len(REQUIRED_STORYTELLING_TOKENS)} storytelling hooks."
    )


if __name__ == "__main__":
    main()
