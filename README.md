# ha-shopping-list

> ⚠️ **WORK IN PROGRESS — JUST A SHOPPING LIST**

A custom Home Assistant card for the built-in
[Shopping List](https://www.home-assistant.io/integrations/shopping_list/) integration.

## Status

Early scaffolding. Not ready for use yet.

## Development

```bash
npm install
npm run dev    # builds, watches, and serves the dev harness
```

Then open <http://localhost:5173/dev/> in your browser.

Or run the pieces individually:

```bash
npm run watch  # rebuild on change → dist/ha-shopping-list-card.js
npm run serve  # static dev server (project root) on :5173
```

The dev harness (`dev/index.html`) loads the built card with a mock `hass`
object so you can iterate on the card without running Home Assistant.

### Pre-commit checks

`npm install` automatically installs a Git pre-commit hook (via
[`simple-git-hooks`](https://github.com/toplenboren/simple-git-hooks)) that
runs:

```bash
npm run typecheck     # tsc --noEmit
npm run format:check  # prettier --check
```

If either fails, the commit is aborted. Auto-fix formatting with `npm run
format`. To bypass in an emergency: `git commit --no-verify`.

## License

MIT
