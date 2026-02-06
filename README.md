# William Saether Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- MDX via `@next/mdx`
- Motion animations (`motion`)
- Vercel Analytics + Speed Insights

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Create a production build
- `npm run start` - Run the production build
- `npm run lint` - Run Next.js linting

## Project Structure

```text
app/                # Routes and layout
components/         # UI sections and shared components
markdown/           # MDX content (education timeline)
public/             # Static assets (images, icons)
```

## Key Sections

- Hero / intro
- Projects
- Skills
- Experience
- Education (desktop component + mobile MDX)

## Content Updates

- Main homepage layout: `app/page.tsx`
- Site metadata: `app/layout.tsx`
- Education MDX content: `markdown/education.mdx`
- Reusable sections: `components/*.tsx`

## Deployment

Optimized for Vercel, but can be deployed to any platform that supports Next.js.
