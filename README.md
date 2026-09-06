# Kalyan Kumar Avula — Portfolio

A personal portfolio built with Next.js (App Router), JavaScript, and Tailwind CSS.

## Design direction
Black / gray / orange, modern and animated: a sticky navbar, a two-column hero
with a photo and floating accent blobs, an infinite tech marquee, scroll-reveal
animations on every section, and hover-lift/glow on cards.

Palette: black `#0A0A0A`, card surface `#161616`, gray text `#A3A3A3` / `#8A8A8A`,
orange accent `#FF6A00`. Type: Outfit (display), Inter (body), JetBrains Mono
(small labels/data).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

All real content lives in `/data`, not in the components:

- `data/personalData.js` — name, role, summary, status, photo, email/phone, social links
- `data/skillsData.js` — stack, grouped by category
- `data/experienceData.js` — work history
- `data/projectsData.js` — project cards
- `data/educationData.js` — education history
- `data/achievementsData.js` — highlight notes

### Your photo
`personalData.profileImage` is currently a random placeholder
(`https://i.pravatar.cc/500?img=68`) so the hero has something to show. Swap it
for your own photo whenever you're ready — either point it at another URL, or
drop a file in `/public` (e.g. `/public/profile.jpg`) and set
`profileImage: "/profile.jpg"`.

### Things left blank on purpose
Your resume mentioned LinkedIn, GitHub, and a portfolio link, and a resume
download, but didn't include the actual URLs, so these are left as empty
strings in `data/personalData.js`:

```js
resumeUrl: "",
linkedin: "",
github: "",
portfolio: "",
```

Add real URLs there and wire up the corresponding links in `Navbar.jsx` /
`Contact.jsx` (currently only email and phone are shown, since those were the
only contact details provided).

Project `liveDemoUrl` values are still placeholders (`"URL_TO_LIVE_DEMO"`).
The "Live demo" link on a project card only renders once you replace that
placeholder with a real URL.

### Contact form
The contact form on the Contact section is UI-only — it does not send email
yet. See the comment in `components/Contact.jsx` for where to wire up a
provider (e.g. Resend, Formspree, or your own API route).

## Structure

```
app/
  layout.jsx        root layout, fonts, metadata
  page.jsx           assembles all sections
  globals.css
components/
  Navbar.jsx         sticky top nav, scroll-aware background, mobile menu
  Hero.jsx           two-column hero with photo + animated blobs
  TechMarquee.jsx     infinite scrolling tech ticker
  About.jsx
  Stack.jsx
  Experience.jsx
  Projects.jsx
  Education.jsx
  Contact.jsx
  Footer.jsx
  Reveal.jsx          scroll-reveal wrapper (IntersectionObserver)
  SectionHeading.jsx
data/
  personalData.js
  skillsData.js
  experienceData.js
  projectsData.js
  educationData.js
  achievementsData.js
```
