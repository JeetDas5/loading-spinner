# Loading Spinner

React component (Vite + Tailwind) that renders a centered loading spinner with an optional message.

This repository contains a minimal demo project and a reusable `LoadingSpinner` component located at `src/component/LoadingSpinner.jsx`.

## Features

- Tiny, dependency-free spinner (uses Tailwind CSS for styling).
- Simple API: `className` to customize container styles, `message` to show a short status message.

## Quick start

Install dependencies and start the dev server:

```powershell
pnpm install
pnpm dev
```

Open the app at the address Vite prints (usually http://localhost:5173).

## Usage

Import and use the component in your React app:

```jsx
import LoadingSpinner from './src/component/LoadingSpinner';

function Page() {
	return (
		<div>
			<LoadingSpinner message="Loading data..." />
		</div>
	);
}

export default Page;
```

Props
- `className` (string, optional) — additional classes applied to the outer container.
- `message` (string, optional) — text shown under the spinner.

File of interest
- `src/component/LoadingSpinner.jsx` — the spinner component.

## Dev notes

- This project uses Vite + React + Tailwind. Tailwind classes control the spinner animation and layout.
- To produce a production build run:

```powershell
pnpm build
```

## Contributing

Feel free to open issues or PRs. Keep changes small and focused. Add examples or variants (size, color) as separate PRs.

Made with ❤️ by [Jeet Das](https://github.com/JeetDas5)
