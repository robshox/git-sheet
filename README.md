# 🎅 Switch Dimension Secret Santa

A modern, user-friendly web application for organizing Secret Santa gift exchanges. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Participant Management**: Easily add and remove participants with name and email
- **Automatic Assignment**: Randomly assigns Secret Santa pairs with a single click
- **Private Viewing**: Each participant can view only their own assignment
- **Modern UI**: Beautiful, responsive design with dark mode support
- **Real-time Updates**: Instant feedback as you manage participants and assignments

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 20.x or later
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

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Usage

1. **Add Participants**: Enter names and email addresses of everyone participating in the Secret Santa exchange
2. **Assign Secret Santas**: Click the "Assign Secret Santas" button to randomly pair up participants
3. **View Assignments**: Switch to the "View Assignments" tab and have each participant select their name to see who they're buying a gift for
4. **Keep it Secret**: Each person should only look at their own assignment!

## Project Structure

```
/workspace/
├── app/
│   ├── favicon.ico
│   ├── globals.css        # Global styles and Tailwind configuration
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Main Secret Santa application
├── public/               # Static assets
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Deployment

### Deploy on Vercel

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- **Netlify**: Follow the [Next.js on Netlify guide](https://docs.netlify.com/frameworks/next-js/)
- **AWS**: Use AWS Amplify or deploy to EC2/ECS
- **Docker**: Build a Docker container using the included Next.js Dockerfile

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
