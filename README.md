# Nahuel Bordon — Front-End Engineer Portfolio

A professional front-end portfolio focused on how I approach interface development: component design, structure, responsibilities, maintainability, accessibility, and the decisions behind the implementation.

The goal of this project is not only to present my experience and selected work, but also to provide a small representation of how I think and build frontend applications.

> A glimpse into how I think, structure, and design solutions.

## Live Demo

**Portfolio:**
https://portfolio-nfb.vercel.app/

**Frontend Lab:**
https://frontend-lab-nfb.vercel.app/

The Frontend Lab is also integrated into the portfolio under:

https://portfolio-nfb.vercel.app/lab/

---

## About the Project

This portfolio was built as a dedicated Svelte application rather than using a pre-built portfolio template.

The implementation focuses on:

- Clear component responsibilities
- Reusable UI patterns
- Structured application architecture
- Responsive and accessible interfaces
- Scoped styling and design tokens
- Type-safe development
- Maintainable CSS and utility usage
- Automated testing
- Separation between the portfolio application and the interactive component lab

The project also demonstrates how two independent frontend applications can coexist as part of the same user experience.

The main portfolio is built with **Svelte**, while the interactive component lab is implemented independently with **React**.

---

## Tech Stack

### Core

- **Svelte 5**
- **TypeScript**
- **Vite 8**
- **Tailwind CSS 3**
- **PostCSS**
- **Autoprefixer**

### Testing

- **Vitest**
- **Testing Library**
- **Testing Library for Svelte**
- **JSDOM**

### Code Quality

- **ESLint**
- **Prettier**
- **prettier-plugin-svelte**
- **svelte-check**
- **TypeScript**

### Additional Tools

- **highlight.js** for source-code presentation
- CSS custom properties for design tokens
- Responsive CSS
- `ResizeObserver`
- `postMessage` communication for the embedded Frontend Lab

Vite provides the development server and production build pipeline, while Svelte handles the UI layer and Tailwind provides utility-based styling. Vite 8 currently requires Node.js 20.19+ or 22.12+.
https://vite.dev/guide/

---

## Architecture

The portfolio is organized as a Svelte application composed of layout components and independent sections.

The main application orchestrates elements such as:

```text
src/
├── App.svelte
├── lib/
│   ├── layout/
│   └── sections/
└── ...
```

The main application is intentionally kept simple at the root level, while individual sections own their presentation and behavior.

The application entry point brings together:

```text
Header
Hero
Background
Principles
Selected Work
Frontend Lab
Contact
Footer
```

This keeps the top-level application focused on composition rather than implementation details.

---

## Design Approach

The UI follows a component-oriented approach where responsibilities are kept close to the feature or section that owns them.

Styling combines:

- Tailwind utility classes
- Component-level styles
- CSS custom properties
- Shared design tokens
- Responsive media queries

Tailwind is configured with project-specific color and typography tokens rather than relying exclusively on its default visual system.

The project also disables Tailwind's preflight and preserves an explicit base styling layer, allowing the interface to maintain more controlled visual behavior.

---

## Frontend Lab Integration

The portfolio contains an interactive **Frontend Lab** built with React.

The Lab is intentionally maintained as a separate repository and deployment:

```text
portfolio
   └── /lab
          ↓
      Frontend Lab
      React + Vite
```

This allows the React application to be:

1. Developed independently
2. Built independently
3. Deployed independently
4. Accessed directly as a standalone application
5. Embedded inside the Svelte portfolio

The portfolio embeds the Lab through an iframe and communicates with it using `postMessage`.

The Lab uses `ResizeObserver` to report its content height back to the parent application, allowing the iframe to automatically adapt to the rendered content instead of relying on a fixed height.

This creates a clean separation of responsibilities:

```text
Portfolio
├── Owns the portfolio experience
├── Owns the navigation and presentation
└── Hosts the Frontend Lab

Frontend Lab
├── Owns React components
├── Owns component examples
├── Owns component tests
└── Owns the interactive playground
```

The two applications are deployed independently on Vercel and connected through Vercel routing.

---

## Local Development

### Requirements

- Node.js 20.19+ or 22.12+
- npm
- Git

Clone the repository:

```bash
git clone https://github.com/NahuelFedericoB/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The portfolio runs on:

```text
http://127.0.0.1:5173
```

The Vite configuration uses a strict development port.

---

## Running the Frontend Lab Locally

The portfolio is configured to proxy `/lab` to the local React application during development.

To run the complete local experience, both applications should be running.

### Terminal 1 — Portfolio

```bash
cd portfolio
npm install
npm run dev
```

Runs on:

```text
http://127.0.0.1:5173
```

### Terminal 2 — Frontend Lab

```bash
cd frontend-lab
npm install
npm run dev
```

Runs on:

```text
http://127.0.0.1:5174
```

The portfolio's local `/lab` route will then resolve to the local React application.

```text
http://127.0.0.1:5173/lab/
        ↓
http://127.0.0.1:5174/
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production output is generated in:

```text
dist/
```

The portfolio no longer requires the React Lab repository to exist locally in order to build the portfolio itself.

---

## Code Quality

Run type checking:

```bash
npm run check
```

Run ESLint:

```bash
npm run lint
```

Automatically fix linting issues where possible:

```bash
npm run lint:fix
```

Check formatting:

```bash
npm run format:check
```

Format the project:

```bash
npm run format
```

---

## Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run test:coverage
```

The project uses Vitest together with Testing Library and JSDOM for component-level testing.

---

## Deployment

The portfolio is deployed using **Vercel**.

The repository is connected directly to Vercel, allowing deployments to be triggered from Git pushes.

Production build:

```bash
npm run build
```

Output:

```text
dist/
```

### Deployment Architecture

The project uses two independent Vercel deployments:

```text
GitHub
│
├── portfolio
│     └── Vercel
│
└── frontend-lab
      └── Vercel
```

The portfolio exposes the React application through:

```text
/ lab
```

while the React application remains independently accessible through its own deployment.

This separation keeps the two codebases independently maintainable while still presenting them as a single frontend experience.

---

## Project Purpose

This repository is intentionally designed as more than a visual portfolio.

It serves as a practical example of how I approach frontend engineering:

- Breaking interfaces into meaningful responsibilities
- Choosing the right abstraction level
- Designing reusable components
- Keeping concerns separated
- Using TypeScript for stronger contracts
- Thinking about accessibility and responsive behavior
- Testing interactive behavior
- Maintaining code quality through linting and formatting
- Working with more than one frontend framework
- Designing applications that can be independently developed and deployed

The objective is to show both the final interface and some of the engineering decisions behind it.

---

## Author

**Nahuel Bordon**
Front-End Engineer

GitHub:
https://github.com/NahuelFedericoB

Portfolio:
https://portfolio-nfb.vercel.app/

## Copyright

© 2026 Nahuel Bordon. All rights reserved.

This website, its source code, design, documentation, and original content are the intellectual property of Nahuel Bordon.

The repository is publicly available for viewing and evaluation purposes. No license is granted to copy, modify, redistribute, publish, or commercially use this project or substantial portions of its source code without prior written permission from the author.

Third-party libraries and dependencies remain subject to their respective licenses.

