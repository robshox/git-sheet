# Switch Dimension Secret Santa

A modern web application for organizing Secret Santa gift exchanges. Built with Next.js, React, and Tailwind CSS.

## Features

- **Participant Management**: Add and remove participants with their names and email addresses
- **Random Assignment**: Automatically assign Secret Santas using a randomized algorithm
- **Private Viewing**: Each participant can view only their own assignment to keep the exchange secret
- **Modern UI**: Beautiful, responsive interface with dark mode support
- **Real-time Updates**: Instant updates as you add or remove participants

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Optimized font loading via Next.js

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Add Participants**: Enter names and email addresses for all participants
2. **Assign Secret Santas**: Click "Assign Secret Santas" when you have at least 2 participants
3. **View Assignments**: Switch to "View Assignments" mode and select your name to see who you're buying for
4. **Keep It Secret**: Each person should only view their own assignment

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── page.tsx          # Main Secret Santa component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS

## License

This project is private.
