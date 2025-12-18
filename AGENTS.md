# Repository Guidelines

## Purpose
This repository is intended to host a React-based H5 scaffold. The current requirement note in `descriptions/需求20251218-001` indicates the UI must adapt to iPhone X (iPhone 10) and newer models (safe areas / notch handling).

## Collaboration Workflow (Important)
- Discuss all requirements first, then confirm before implementation.
- For every new feature, internationalize all user-facing copy: you provide Chinese; I translate to English. If any translation is ambiguous, I will ask you to confirm the intended meaning.

## Project Structure & Module Organization
- `src/`: React + TypeScript app code.
- `src/ui/`: layout + pages (`HomePage`, `ListPage`, `DetailPage`) and UI components.
- `src/store/`: Zustand stores (e.g., `itemsStore`).
- `src/lib/`: shared utilities (e.g., `http` wrapper).
- `src/styles/`: global CSS + responsive helpers (`rem.ts`, `units.ts`).
- `public/`: static assets served as-is.
- `descriptions/`: local notes/requirements (ignored by `.gitignore`; don’t treat as versioned docs).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start Vite dev server.
- `npm run build`: typecheck + create production build.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint (flat config: `eslint.config.js`).
- `npm run typecheck`: TypeScript project build without emitting.

## Coding Style & Naming Conventions
- Prefer TypeScript; keep files small and focused.
- Indentation: 2 spaces; one component per file.
- Naming: React components in `PascalCase`, hooks in `useSomething`, utilities in `camelCase`.
- Linting: ESLint. Formatting: keep consistent and let tooling do the work.

## Testing Guidelines
- Use a browser-like unit test stack (e.g., Vitest + React Testing Library) and test behavior over implementation details.
- Name tests `*.test.ts(x)` or `*.spec.ts(x)` and keep fixtures in `__fixtures__/` when needed.

## H5 Responsiveness & Safe Area
- Responsive base: `src/styles/rem.ts` sets root `rem` based on viewport width; `src/styles/units.ts` provides `vw()` for CSS calc strings.
- Safe area: `index.html` uses `viewport-fit=cover`; padding is applied via `src/ui/components/SafeArea.tsx` using `env(safe-area-inset-*)`.

## Commit & Pull Request Guidelines
- Git history is minimal (only an initial commit), so no established convention exists yet. Use Conventional Commits going forward (e.g., `feat: add responsive viewport setup`, `fix: handle safe-area insets`).
- PRs should include: a clear description, linked requirement/issue, and screenshots for UI changes. Verify notch/safe-area behavior on at least one iPhone X+ viewport before requesting review.

## Security & Configuration Tips
- Don’t commit secrets: keep `.env*` files untracked and provide `.env.example` when configuration is required.
- Avoid hardcoding API endpoints; route them through environment variables.
