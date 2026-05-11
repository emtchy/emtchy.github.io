# Website Redesign Suggestions

A plan for evolving the current Astrofy-based site into something that feels closer to apple.com — calm, confident, image-led, and scroll-driven — while keeping it lightweight (still pure Astro, no React needed).

---

## 1. What's there today

- **Stack:** Astro 4 + Tailwind + DaisyUI (`lofi` theme), deployed via GitHub Pages.
- **Layout:** Fixed left sidebar with profile photo + Home / CV / Contact.
- **Pages:**
  - `index.astro` — name, one-line bio, LinkedIn button, two real projects (Obsidian Plugin, S<st logo).
  - `cv.astro` — Profile → Education → Experience → Coursework → Achievements → Projects → Skills. Dense, very text-heavy.
  - `projects.astro` — still contains the template's placeholder "Demo Project 1–5" and is hidden in the sidebar.
- **Components:** `HorizontalCard`, `TimeLineElement`, base layout, sidebar, footer.
- **Assets:** A single placeholder `post_img.webp` used as the image for both real projects.

### What's holding it back from feeling "Apple-like"

| Issue | Why it matters for an Apple-ish feel |
|---|---|
| Sidebar-first navigation | Apple uses a slim, centered top nav. Sidebars feel "dashboard," not "product." |
| `lofi` DaisyUI theme | Brings off-the-shelf component styling (badges, buttons, dividers) that reads as templated. |
| Same placeholder image on every card | Apple pages live or die by hero imagery / iconography. |
| CV is a wall of timeline rows | Apple-style would summarize the same content as a few clean stats/cards and link to a downloadable PDF. |
| No motion | No fade-in, parallax, or scroll-snap — Apple's signature is content reacting to scroll. |
| Mixed fonts (DaisyUI default) | A single typeface (SF-style) with very tight tracking does most of the visual work. |

---

## 2. Information architecture

Drop the sidebar; switch to a single long scroll on `/` with a thin sticky top nav. CV becomes its own page but trimmed; deep CV lives in a downloadable PDF.

```
/  (long scroll, one page tells the story)
 ├─ Hero          — name, one-line tagline, scroll cue
 ├─ About         — 2–3 short paragraphs, no headers
 ├─ Projects      — 3 product-style sections (one per project), full-bleed
 ├─ CV snapshot   — 4 stat cards + timeline highlights + "Download full CV" button
 └─ Contact       — single CTA, email + LinkedIn

/cv  (kept, but shorter — link from CV snapshot)
/projects/[slug]  (optional: one page per project, see §4)
```

Top nav: `Emily Gombocz` (left) · `Work · CV · Contact` (right). Frosted/blurred background when scrolled (`backdrop-blur` + translucent white).

---

## 3. The third project — what to add

You currently show:
1. Obsidian to-do plugin
2. S<st logo design

Pick **one** of these for the third slot — choose based on what you actually want recruiters to see first:

- **The OS-in-C++ coursework project** — already mentioned in CV. Reframe it as "Building a tiny OS from scratch" with a short writeup. Strong signal for systems-leaning roles.
- **The OpenStreetMap / Spring Boot OOP2 project** — visual (maps), full-stack, easy to screenshot.
- **The Django senior-software-development team project** — full-stack, real teamwork story.
- **This website itself** — meta but legitimate; you already have the "Personal Website" card commented out in `index.astro:46`. Re-enable it once the redesign ships.

> My pick: **the OpenStreetMap project**, because it's the most screenshot-friendly and lets you show actual UI in the hero image — which is what makes a project section feel Apple-ish.

---

## 4. Visual / interaction direction

### Typography
- One typeface, used everywhere. Good free options:
  - **Inter** (closest free SF Pro analogue) — works for body + display.
  - **Geist** (Vercel, free) — slightly more characterful.
- Display sizes huge: hero headline ~96–128px, section headers ~48–64px. Body 17–18px. Tight tracking on headlines (`tracking-tight` or `-0.02em`).
- Almost no bold body text. Hierarchy comes from size, not weight.

### Color
- Background: near-white (`#fbfbfd`, Apple's literal value) and deep near-black (`#1d1d1f`) for text.
- One subtle accent only — pick a single color and use it sparingly (link hover, contact CTA). Avoid DaisyUI's `badge-secondary` etc.
- Alternate sections between white and a soft gray (`#f5f5f7`) to create rhythm without lines/dividers.

### Layout
- Sections are full-bleed (100vw), content centered in a ~960–1100px max-width column.
- Generous vertical padding (`py-32` or more on desktop). Empty space is the design.
- No dividers, no card borders. Separation comes from background color shifts and spacing.

### Motion (this is the Apple part)
- Fade + translate-up on scroll for every section. Use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) — ~30 lines of vanilla JS, no library.
- Subtle parallax on project hero images (translate Y at ~0.3× scroll speed).
- Sticky project titles that pin while the description scrolls past, then release. CSS `position: sticky` does this for free.
- Cursor-follow highlight on the contact CTA (optional, easy with `mousemove` + CSS variables).
- Respect `prefers-reduced-motion` and disable all of the above.

### Imagery
- Replace `post_img.webp` per project. Each project needs at least one real screenshot or mockup at ~2400×1500.
- For the Obsidian plugin: a screen recording → GIF or muted autoplay `<video>` of the plugin in action.
- For the logo: the logo on a solid background, very large.
- For the third project: a UI screenshot or a "device frame" style mockup.

### Components to replace
- `HorizontalCard.astro` → new `ProjectSection.astro` that takes a full-bleed image, large title, two-column text, optional `<video>` tag. The current card with `hover:scale-[102%]` and rounded corners isn't bad on its own, but it doesn't scale into a hero treatment.
- `TimeLineElement` → keep for `/cv`, but on the home page CV snapshot, replace with 3–4 stat cards ("3rd-year SWE student", "Dean's List ×2", "Studied in Memphis, TN", "5 scholarships") and one short paragraph.

---

## 5. CV: less detailed, more scannable

For `/cv`, keep the structure but cut roughly in half:

- **Profile** → 2 sentences max.
- **Education** → keep 3 most recent rows (Bachelor's, Exchange, High School). Drop primary school + auditor entries from the visible list — link to the full PDF for completeness.
- **Experience** → keep all 4 rows but trim each description to one sentence.
- **Coursework** → collapse into a single comma-separated paragraph or 4 tags, not 4 timeline rows.
- **Achievements** → keep as-is, it's already tight.
- **Skills** → switch from 5 bulleted columns to a single block of pill-style tags grouped by category. Fewer rows, faster to read.
- **Add a "Download CV (PDF)" button** at the top. Export the page once and host the PDF in `/static/`.

---

## 6. Concrete file changes

| File | Action |
|---|---|
| `src/pages/index.astro` | Rewrite as 5-section scroll: Hero, About, Projects (×3), CV snapshot, Contact. |
| `src/pages/projects.astro` | Delete (placeholder content) **or** repurpose as an archive grid of older / smaller projects. |
| `src/pages/cv.astro` | Trim per §5 above; add PDF download button. |
| `src/components/SideBar*.astro` | Remove from `BaseLayout`. Replace with new `TopNav.astro`. |
| `src/components/HorizontalCard.astro` | Keep for the CV "other projects" list; not used on home anymore. |
| `src/components/ProjectSection.astro` | **New.** Full-bleed project module (image + title + 2-col body + optional CTA). |
| `src/components/StatCard.astro` | **New.** 4-up stat cards for the CV snapshot. |
| `src/components/Reveal.astro` | **New.** Wraps `<slot />` with an Intersection Observer fade-up. Used everywhere. |
| `src/styles/global.css` | Add Inter (or Geist) via `@font-face` or `<link>`. Set CSS variables for color tokens. |
| `tailwind.config.cjs` | Drop or override DaisyUI `lofi` theme; extend `fontFamily.sans` to start with Inter; extend colors with the `#fbfbfd` / `#1d1d1f` / `#f5f5f7` tokens. |
| `astro.config.mjs` | No change needed. |
| `static/` | Add real project images / videos; add `emily-gombocz-cv.pdf`. |

---

## 7. Suggested build order

1. **Foundation (1 evening).** Swap font, replace color tokens, kill sidebar, add `TopNav`. Site will instantly feel different even before any content moves.
2. **Project sections (1–2 evenings).** Build `ProjectSection.astro`, gather/create images for the three projects, rewrite `index.astro`.
3. **Motion (1 evening).** Build `Reveal.astro`, apply to every section. Add sticky project titles and parallax on hero images.
4. **CV slim-down (1 evening).** Trim `cv.astro`, generate PDF, add stat cards + snapshot on home.
5. **Polish.** Footer, 404 styling, favicon refresh, OG image with the new typography.

Each step is independent and shippable on its own, so you can stop at any point and the site still works.

---

## 8. What to skip

- React / Svelte / interactive frameworks. Pure Astro + a few `<script>` tags is plenty for this scope.
- A CMS or content collections. Three projects don't need one — inline them in `index.astro`.
- Dark mode toggle. Apple-style sites usually pick one mode and commit; ship light first, dark later if you want.
- A blog. The Astrofy template has scaffolding for one; you've already removed most of it. Keep it gone unless you actually want to write.

---

## 9. Open questions for you

- Which third project do you want to feature? (See §3 for options.)
- Want to keep `/cv` as a separate page, or fold it entirely into the home scroll?
- Domain / hosting staying on GitHub Pages with the current CNAME, or moving?
- Any visual references besides apple.com you want to pull from (Linear, Vercel, Stripe, Rauno, etc.)?
