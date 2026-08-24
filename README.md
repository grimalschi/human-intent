# human-intent.md

The site for the **HUMAN-INTENT.md** pattern — one file, written only by a human, that acts as law for AI agents: the project's architecture, development rules, and product decisions.

Live at **[human-intent.md](https://human-intent.md)**, available in 20 languages.

## How it's built

A static site generated with [Eleventy](https://www.11ty.dev/). One template ([src/_includes/base.njk](src/_includes/base.njk)), one stylesheet, and one JSON file per language in [src/_data/locales/](src/_data/locales/). English is served at `/`, every other language at `/<code>/` (e.g. `/ru/`, `/ja/`). The root page auto-redirects first-time visitors to their browser language; an explicit choice in the language switcher is remembered.

## Development

```bash
npm install
npm run serve   # local dev server
npm run build   # output to _site/
```

## Translations

To fix or improve a translation, edit the corresponding file in `src/_data/locales/` and open a pull request. To add a language, copy `en.json`, translate the values, and set `code`, `name` (native name), and `dir` (`ltr` or `rtl`).

## Deployment

Every push to `main` builds and deploys to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The custom domain is set by `src/CNAME`.

## License

MIT
