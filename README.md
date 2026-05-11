# emtchy.github.io

Personal website for Emily Gombocz — Software Engineering and Management
student at TU Graz. Built with Astro and Tailwind, originally based on the
[Astrofy](https://github.com/manuelernestog/astrofy) template and reshaped
piece by piece into something of my own.

Lives at [emtchy.github.io](https://emtchy.github.io).

## Local development

```bash
pnpm install
pnpm dev
```

Then open http://localhost:4321/.

## Build & preview

```bash
pnpm build
pnpm preview
```

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com) (only the theming layer)
- [Inter](https://rsms.me/inter/) for typography

## Layout

```
src/
├── components/        # TopNav, Footer, ProjectSection, TimeLine
├── layouts/           # BaseLayout (shared shell + motion script)
├── pages/             # index, cv, projects, 404, rss.xml
└── styles/global.css  # tokens, reveal animations, type defaults
static/                # favicon, profile image, project screenshots
```

## Credits

Originally forked from [Astrofy](https://manuelernestog.github.io) by
Manuel Ernesto. Apple-inspired redesign and content are mine.
