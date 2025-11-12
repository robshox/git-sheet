# Switch Dimension Secret Santa

A modern, interactive Secret Santa gift exchange organizer built with Next.js. Manage participants, assign Secret Santas, and view assignments in a beautiful, user-friendly interface.

## Features

- **Participant Management**: Add and remove participants with names and email addresses
- **Random Assignment**: Automatically assign Secret Santas using a circular algorithm
- **Private Viewing**: Each participant can select their name to see only their assigned recipient
- **Modern UI**: Beautiful gradient design with dark mode support
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Font**: Geist (optimized with `next/font`)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd git-sheet
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Add Participants**: Enter participant names and email addresses, then click "Add Participant"
2. **Manage Participants**: View all participants and remove any if needed
3. **Assign Secret Santas**: Click "Assign Secret Santas" when you have at least 2 participants
4. **View Assignments**: Switch to "View Assignments" mode and select your name to see who you're assigned to gift

## Project Structure

```
├── app/
│   ├── page.tsx          # Main Secret Santa component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Development

- Edit `app/page.tsx` to modify the main application
- The page auto-updates as you edit files
- Run `npm run lint` to check for linting errors

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling utilities

## Deploy

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/git-sheet)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
