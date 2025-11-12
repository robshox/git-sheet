# 🎅 Switch Dimension Secret Santa

A modern, intuitive web application for organizing Secret Santa gift exchanges. Built with Next.js, React, and Tailwind CSS.

## Features

- **Easy Participant Management**: Add and remove participants with names and emails
- **Random Assignment**: Automatically assign Secret Santas with a single click
- **Private Viewing**: Each participant can securely view only their own assignment
- **Modern UI**: Beautiful, responsive design with dark mode support
- **Real-time Updates**: Live updates as you manage participants and assignments

## Getting Started

### Prerequisites

- Node.js 20 or later
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

### Managing Participants

1. Navigate to the "Manage Participants" tab
2. Enter participant names and email addresses
3. Click "Add Participant" or press Enter
4. Remove participants as needed using the Remove button

### Assigning Secret Santas

1. Add at least 2 participants
2. Click the "🎲 Assign Secret Santas" button
3. The app will randomly assign each participant a person to give a gift to

### Viewing Assignments

1. Switch to the "View Assignments" tab
2. Each participant selects their name from the dropdown
3. The app displays who they are Secret Santa for
4. Keep it secret! Each person should only view their own assignment

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Linting**: ESLint with Next.js configuration

## Scripts

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
└── package.json          # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Deployment

### Deploy on Vercel

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Next.js applications, such as:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
