# Mohammad Arif — Developer Portfolio

A modern, single-page developer portfolio built with **Angular 21**, **Tailwind CSS v4**, and **SSR**. Showcases professional experience, projects, skills, and contact information for **Mohammad Arif**, Technical Team Lead & Full-Stack Software Developer.

## About

**Mohammad Arif** is a software engineer with 6+ years of experience delivering enterprise and government solutions across India and the US. Currently serving as **Technical Team Lead** at QSS Technosoft, specializing in Angular, .NET Core, React, and cloud-native architecture.

**Location:** Noida, Uttar Pradesh, India

## Features

- Single-page layout with smooth scroll navigation and active section highlighting
- Dark / light theme toggle with persistence
- Responsive design (mobile-first)
- Glassmorphism UI with gradient accents
- Typing animation in the hero section
- Categorized skills with animated progress bars
- Project cards with technology filtering
- Timeline-based experience section
- Contact form with validation and toast notifications
- SEO-friendly meta tags and JSON-LD structured data
- Lazy-loaded images with skeleton placeholders
- SSR with prerendering support

## Sections


| Section    | Description                               |
| ---------- | ----------------------------------------- |
| Hero       | Introduction, profile photo, CTAs         |
| About      | Summary, highlights, core technologies    |
| Skills     | Frontend, Backend, Database, Cloud, Tools |
| Projects   | 8+ portfolio projects with filters        |
| Experience | QSS Technosoft, NIC, Bitla Softwares      |
| Education  | B.Tech CSE, certifications, trainings     |
| Resume     | PDF download and professional stats       |
| Contact    | Form, email, phone, social links          |


## Tech Stack


| Layer     | Technologies                                |
| --------- | ------------------------------------------- |
| Framework | Angular 21 (standalone components, signals) |
| Styling   | Tailwind CSS v4                             |
| Language  | TypeScript 5.9                              |
| SSR       | Angular SSR + Express                       |
| Testing   | Vitest                                      |
| Tooling   | Angular CLI, PostCSS, Prettier              |


## Project Structure

```
src/app/
├── core/           # Services (theme, scroll spy, SEO, contact, toast)
├── shared/         # Reusable components, directives, utilities
├── features/       # Hero, About, Skills, Projects, Experience, etc.
├── pages/          # Home page composition
├── models/         # TypeScript interfaces
└── data/           # Resume-driven content (profile, projects, skills)
```

Content is driven from typed data files under `src/app/data/` — update `profile.data.ts`, `projects.data.ts`, and related files to change portfolio content without touching components.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 11+

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200). The app reloads on file changes.

### Production build

```bash
npm run build
```

Output is written to `dist/arif_portfolio/`.

### Run SSR server (after build)

```bash
npm run serve:ssr:arif_portfolio
```

Open [http://localhost:4000](http://localhost:4000).

### Tests

```bash
npm test              # watch mode
npm run test:ci       # single run (CI)
npm run verify        # build + tests
```

## Scripts


| Command                            | Description                 |
| ---------------------------------- | --------------------------- |
| `npm start`                        | Dev server on port 4200     |
| `npm run build`                    | Production build            |
| `npm run test`                     | Unit tests (Vitest)         |
| `npm run test:ci`                  | Unit tests, non-interactive |
| `npm run verify`                   | Build + test CI             |
| `npm run build:gh-pages`           | Static build for GitHub Pages |
| `npm run serve:ssr:arif_portfolio` | Serve SSR build locally     |


## Assets


| Asset          | Path                                            |
| -------------- | ----------------------------------------------- |
| Profile photo  | `public/assets/images/profile.jpeg`             |
| Resume PDF     | `public/assets/resume/Mohammad-Arif-Resume.pdf` |
| Project images | `public/assets/images/projects/`                |


## Contact


|              |                                                                                         |
| ------------ | --------------------------------------------------------------------------------------- |
| **Email**    | [arifm507@gmail.com](mailto:arifm507@gmail.com)                                         |
| **Phone**    | +91 7275771008                                                                          |
| **LinkedIn** | [linkedin.com/in/mohd-arif-705985135](https://www.linkedin.com/in/mohd-arif-705985135/) |
| **GitHub**   | [github.com/arifm507](https://github.com/arifm507)                                      |

## Deploy to GitHub Pages

**Live URL:** [https://arifm507.github.io/arif_portfolio/](https://arifm507.github.io/arif_portfolio/)

```bash
git push origin master   # triggers automatic deploy via GitHub Actions
```

Full setup guide: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

## Documentation

- [Implementation plan](docs/PORTFOLIO_PLAN.md)
- [Verification report](docs/VERIFICATION.md)
- [GitHub Pages deployment](docs/DEPLOYMENT.md)

## License

Private project — © Mohammad Arif. All rights reserved.