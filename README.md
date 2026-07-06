# WDD 430 Portfolio

This is my Week 01 portfolio application for WDD 430: Web Full-Stack Development. It is built with Next.js App Router, TypeScript, and Tailwind CSS.

## Project Overview

The site introduces my full-stack development work and includes a small portfolio home page, an About page, reusable server components, and a simple API route.

## Pages and Routes

- `/` - Portfolio home page with featured projects
- `/about` - About page with a custom `SkillCard` component
- `/api/hello` - Simple API route returning JSON

## Components

- `Header.tsx` - Shared navigation for Home and About
- `Footer.tsx` - Shared footer with dynamic year
- `ProjectCard.tsx` - Reusable project display card with typed props
- `ProjectList.tsx` - Renders a list of project cards
- `SkillCard.tsx` - Custom About page component showing current technical focus

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

Deployment platform: Vercel

Deployment URL: Add the Vercel URL here after deployment.

## Course Notes

This assignment practices Next.js file-based routing, Server Components, typed props, component composition, Tailwind CSS styling, and route handlers.
