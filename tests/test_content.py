"""Public claims and credential-link regressions; no network or personal data."""
from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class CredentialParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_credentials = False
        self.cards = []
        self.card = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'section':
            self.in_credentials = attrs.get('id') == 'certifications'
        if self.in_credentials and tag == 'article':
            self.card = {'text': [], 'links': []}
            self.cards.append(self.card)
        if self.card is not None and tag == 'a':
            self.card['links'].append(attrs['href'])

    def handle_endtag(self, tag):
        if tag == 'article':
            self.card = None
        if tag == 'section':
            self.in_credentials = False

    def handle_data(self, data):
        if self.card is not None:
            self.card['text'].append(data)


class PublicContentTests(unittest.TestCase):
    def setUp(self):
        self.html = (ROOT / 'index.html').read_text(encoding='utf-8')
        parser = CredentialParser()
        parser.feed(self.html)
        self.cards = [(' '.join(c['text']), c['links']) for c in parser.cards]

    def test_professional_certificate_and_badge_have_distinct_dates(self):
        matches = [text for text, _ in self.cards if 'Google IT Automation with Python' in text]
        self.assertEqual(len(matches), 1)
        self.assertIn('completado · Oct 2026', matches[0])
        self.assertIn('Insignia emitida · Nov 2026', matches[0])
        self.assertNotIn('En progreso', matches[0])

    def test_verified_badges_remain_attached_to_the_right_credentials(self):
        expected = {
            'Google IT Automation with Python': '5662042f-bdf4-49f3-ace8-5a40f70996b6',
            'Endpoint Security': '2c31d7cf-a971-4dbd-8bad-3a225edd953e',
            'Networking Devices and Initial Configuration': 'b485318d-6453-4bc6-9124-afbc16f5c1b9',
            'Networking Basics': '8c2bd554-dfd9-4965-ad30-05d0ba71692a',
            'Introduction to Cybersecurity': '529cd478-1e62-4931-b21f-fbd6d73a9971',
            'I validated and operated data - Outstanding': 'fe311b4d-fc9b-419d-a34f-d94a17ba67bd',
        }
        self.assertEqual(len(self.cards), 26)
        for title, badge_id in expected.items():
            with self.subTest(title=title):
                matches = [links for text, links in self.cards if title in text]
                self.assertEqual(matches, [[f'https://www.credly.com/badges/{badge_id}']])

    def test_learning_and_simulation_boundaries_remain_explicit(self):
        google = next(text for text, _ in self.cards if 'Google Cybersecurity' in text)
        self.assertIn('En progreso', google)
        english = next(text for text, _ in self.cards if 'EVOLVE DIGITAL' in text)
        self.assertIn('B1+', english)
        self.assertIn('90 horas', english)
        self.assertNotIn('C1', english)
        self.assertIn('Submissions are simulated', self.html)
        self.assertIn('not an AWS deployment', self.html)
        self.assertIn('PizzaLab Homelab', self.html)
        self.assertNotIn('AfeLab Homelab', self.html)


if __name__ == '__main__':
    unittest.main()
