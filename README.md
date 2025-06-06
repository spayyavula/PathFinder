# PathFinder - Career Counseling App for High School Students

PathFinder is a comprehensive career guidance platform designed to help high school students explore career paths, set goals, and make informed decisions about their future.

## Features

- **Career Explorer**: Browse and search through various career options with detailed information
- **Skills Assessment**: Take assessments to discover careers that match your interests and abilities
- **Educational Pathways**: Learn about the steps needed to pursue different careers
- **Resource Library**: Access curated educational and career planning resources
- **Goal Setting**: Set and track career-related goals
- **User Profiles**: Personalized dashboard to track progress and save favorite careers

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Supabase for backend and authentication
- Lucide React for icons

## Prerequisites

- Node.js 18+
- npm 9+
- Supabase account

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Authentication Setup

The app supports multiple authentication methods:
- Email/Password
- Google OAuth
- Microsoft OAuth
- Facebook OAuth

To configure OAuth providers:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Providers
3. Enable and configure each provider with appropriate credentials

## Database Schema

The application uses the following main tables:

- `users`: User profiles and preferences
- `saved_careers`: User's saved career choices
- `goals`: User's career-related goals
- `assessment_results`: Results from career assessments
- `embeddings`: Vector embeddings for career data

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT