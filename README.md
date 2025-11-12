# 🎅 Switch Dimension Secret Santa

A modern web application for organizing Secret Santa gift exchanges. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Participant Management**: Add and remove participants with names and email addresses
- **Random Assignment**: Automatically assign Secret Santas using a circular algorithm
- **Private Viewing**: Each participant can privately view their assigned recipient
- **Modern UI**: Beautiful, responsive design with dark mode support
- **Client-Side Only**: All data stays in your browser - no server required

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
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Add Participants**: Enter names and email addresses for all participants
2. **Assign Secret Santas**: Click "Assign Secret Santas" when you have at least 2 participants
3. **View Assignments**: Switch to "View Assignments" and select your name to see who you're buying for
4. **Keep It Secret**: Each person should only view their own assignment

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: React 19

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── page.tsx          # Main Secret Santa component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## License

This project is private and not licensed for public use.
