# Loading Spinner

Small, dependency-free loading spinner demo. This repo contains a tiny CSS spinner and a minimal demo page you can open directly in the browser.

This project is intentionally minimal — no build step required. Just open `index.html` in a browser to see the spinner.

## Files

- `index.html` — demo page showing the centered loading spinner and an optional message.
- `styles.css` — spinner styles and layout.
- `README.md` — this file.

## Demo

Open the `index.html` file in your browser (double-click or right-click → Open with...). The spinner is centered on the page and shows a short message under it.

## Usage (plain HTML)

You can copy the markup and the CSS into your project. Example markup:

```html
<div class="spinner-container">
  <div class="spinner" aria-hidden="true"></div>
  <div class="spinner-message">Loading…</div>
</div>
```

The necessary styles live in `styles.css`. The spinner uses a simple CSS animation and works without any JavaScript.

## Customization

- Size: change the spinner dimensions in `styles.css` (width/height and border thickness).
- Color: update the border color values to match your theme.
- Message: change the text in the demo or add `aria-live` attributes if you update the message dynamically.

Accessibility notes

- The visual spinner is decorative; if your page has dynamic content loading, include accessible status updates for screen readers (for example, an `aria-live="polite"` region that announces progress).

## Contributing

Small improvements are welcome: make PRs for size/color variants, add examples, or include a React/Vue component wrapper.

## License & Credits

Made with ❤️ by [Jeet Das](https://github.com/JeetDas5).

