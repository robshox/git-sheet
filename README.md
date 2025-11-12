# Switch Dimension Secret Santa

Organize your Secret Santa gift exchange in seconds. Add participants, generate fair assignments, and let each person privately view who they’re gifting to.

This is a lightweight, single‑page app built with Next.js and Tailwind CSS. All data lives in memory (no database) so nothing is stored after a refresh.

## Features

- Add and remove participants (name + email)
- One‑click random assignment (no one gets themselves)
- Private reveal: each person selects their name to see only their assignment
- Responsive UI with automatic dark mode

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint 9

## Getting Started

Prerequisites:
- Node.js 18.18+ (or 20+ recommended)
- npm (or your preferred package manager)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Available Scripts

- `npm run dev`: Start the Next.js dev server
- `npm run build`: Create a production build
- `npm start`: Start the production server
- `npm run lint`: Run ESLint

## Project Structure

- `app/page.tsx`: Main Secret Santa UI (participants, assignments, reveal)
- `app/layout.tsx`: App metadata and global layout
- `app/globals.css`: Tailwind and theme tokens
- `public/`: Static assets
- `next.config.ts`: Next.js configuration
- `tsconfig.json`, `eslint.config.mjs`: TypeScript and ESLint configuration

## How Assignments Work

Participants are shuffled, then each person is assigned the next person in the list (circularly). This guarantees no self‑assignment and keeps the implementation simple. If you need advanced constraints (e.g., avoid pairing certain people), you can replace the assignment logic with a derangement algorithm that enforces your rules.

## Limitations

- No persistence: reloading the page clears participants and assignments
- Emails are collected for display only (no email sending configured)

## Deployment

The app works great on Vercel:

1. Push your repository to GitHub
2. Import the repo in Vercel
3. Deploy with the default Next.js settings

For other platforms, build with `npm run build` and serve with `npm start`.

