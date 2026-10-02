# Nahuel Bordon — Portfolio

Stage 1: a local, responsive portfolio foundation in **Svelte 5 + Vite + TypeScript**. The design uses white, sky blue and sun yellow, following the approved mockup. All visitor-facing copy is in English.

## Run locally

Use Node.js 22.12+ (validated with Node.js 24).

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite.

```sh
npm run check
npm run build
npm run preview -- --host 127.0.0.1
```

## Formatting, linting and tests

The project uses the supplied ESLint flat configuration and Prettier rules, including Svelte support. Generated build output, coverage, lockfiles and environment files are excluded.

```sh
npm run format          # Format project files
npm run format:check    # Verify formatting without writing
npm run lint            # Run ESLint
npm run lint:fix        # Apply available ESLint fixes
npm run check           # Check Svelte and TypeScript
npm test                # Run tests once
npm run test:watch      # Watch tests
npm run test:coverage   # Run tests with V8 coverage
```

Vitest uses jsdom, Svelte Testing Library and jest-dom matchers. Its setup file is `src/tests/setupTests.js`. The Vite config keeps `svelte()` because this is a plain Svelte + Vite project, not SvelteKit. Coverage targets the existing `src/lib` tree; no minimum coverage thresholds have been invented.

There are no test cases yet. `npm test` reports this with a nonzero exit code by default. Configuration loading can be checked explicitly with `npm test -- --passWithNoTests`; that is not a passing test suite.

## Structure

```text
src/
  App.svelte                    # Page composition
  app.css                       # Tailwind layers, shared tokens and base accessibility
  main.ts                       # Svelte entry point
  lib/
    content/portfolio.ts        # Profile, navigation and planned case studies
    layout/                     # Header, mobile navigation and footer
    sections/                   # Hero, work, background, demo spaces, principles, contact
public/
  favicon.svg                   # Simple sun mark
```

Navigation uses native section anchors and browser history. There is no routing dependency. The mobile menu supports keyboard operation, Escape to close, and closing on link selection. A skip link, visible focus styles, semantic landmarks and reduced-motion preference are included.

## Content requiring review

The name and technical focus come from the supplied reference conversation. Review all profile copy before publication. Biography, employers, dates, experience duration, project claims and outcomes have intentionally not been invented. The experience section is labelled as pending, the proposed engineering-principles copy is labelled as a draft, and the three case studies and demo areas are labelled as planned. The contact section uses the email address and LinkedIn URL supplied by the owner, stored in `src/lib/content/portfolio.ts`.

## Deliberately deferred

- React installation and transcription of the existing Svelte components.
- Component playground, Data Grid and architecture explorer functionality.
- Choice of React integration mechanism or shared-package architecture.
- Public deployment, hosting configuration, analytics and forms.

These areas require a separately reviewed proposal and explicit approval. The current Svelte layout components are for the portfolio shell only; they do not replace or recreate the existing component library.

## Component styles and Tailwind

Tailwind CSS 3.4 is integrated through PostCSS and `vitePreprocess()`, preserving the supplied JavaScript configuration format. `tailwind.config.js` retains the supplied color scales and utility plugin, with an ESM import compatible with this project.

Every Svelte component owns its styles in a scoped `<style lang="postcss">` block. Tailwind utilities are applied with `@apply`; precise dimensions, borders and responsive breakpoints remain local CSS where useful. `src/app.css` contains only font imports, shared design tokens, the existing reset, focus/reduced-motion rules and Tailwind layers. No component selectors remain global.

The shared page-width class is named `content-width` to avoid conflicting with Tailwind's built-in `container`. Preflight is disabled so introducing Tailwind does not replace the approved design's existing reset.

The supplied configuration references original theme variables such as `--blue_500`, `--primary_500` and `--gray_0`. Their source values were not supplied, so those scales and the custom focus/gradient utilities are retained but are not used by the portfolio yet. The active `portfolio-*` color utilities use the existing approved palette; no replacement values were invented for the original theme.

Before/after browser checks compared the dimensions, positions, typography, colors and spacing of 211 elements at desktop and 390px mobile width: no differences were observed. The mobile menu and Escape behavior also passed verification after the refactor.

## Design

| Token    | Color     |
| -------- | --------- |
| White    | `#FFFFFF` |
| Sky      | `#74ACDF` |
| Sky soft | `#F0F8FD` |
| Sun      | `#F6B900` |
| Ink      | `#142B40` |
| Link     | `#21669A` |

DM Sans and IBM Plex Mono are requested from Google Fonts, with system fallbacks. The site does not require fonts to load to function. The hero code window is a static, selectable TypeScript presentation of the profile, not an interactive editor.

## Stage-one verification

- `npm run check`: zero errors and warnings.
- `npm run build`: successful production build.
- Browser review: all section links resolve; mobile navigation opens and closes; Escape closes the menu and restores focus.
- No page-level horizontal overflow at 1280, 390 or 320 CSS pixels.
- No browser errors or warnings observed during the navigation checks.

This is a base-layout review, not an accessibility certification or a review of future React components.
