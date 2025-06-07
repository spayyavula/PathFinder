# EduMaster - Khan Academy Style Learning Platform

EduMaster is a comprehensive online learning platform designed for students to master Physics, Chemistry, and Mathematics. Built with modern web technologies, it provides an engaging and interactive learning experience similar to Khan Academy.

## 🌟 Features

### Core Learning Features
- **Interactive Video Lessons**: Comprehensive video content with step-by-step explanations
- **Practice Tests**: Extensive question banks with instant feedback
- **Progress Tracking**: Detailed analytics and learning progress visualization
- **Adaptive Learning**: Personalized learning paths based on student performance
- **Achievement System**: Badges and rewards to motivate continued learning

### Subject Coverage
- **Physics**: Classical Mechanics, Thermodynamics, Electromagnetism, Quantum Physics, Relativity
- **Chemistry**: Atomic Structure, Chemical Bonding, Organic Chemistry, Inorganic Chemistry, Physical Chemistry
- **Mathematics**: Algebra, Geometry, Trigonometry, Calculus, Linear Algebra, Statistics

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Customizable interface themes
- **Search & Filter**: Advanced content discovery and filtering
- **Bookmarking**: Save favorite lessons and topics
- **Study Groups**: Collaborative learning features

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: Supabase (Database, Authentication, Real-time)
- **Authentication**: Multi-provider OAuth (Google, Microsoft, Facebook)

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+
- Supabase account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edumaster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Supabase Setup

### Database Schema

The application uses the following main tables:

```sql
-- Users table for student profiles
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  grade text,
  school text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Progress tracking
CREATE TABLE lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  lesson_id text NOT NULL,
  progress_percentage integer DEFAULT 0,
  completed boolean DEFAULT false,
  time_spent integer DEFAULT 0, -- in seconds
  last_accessed timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Test results
CREATE TABLE test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  test_id text NOT NULL,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  time_taken integer, -- in seconds
  answers jsonb,
  created_at timestamptz DEFAULT now()
);

-- User goals
CREATE TABLE goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  target_date date,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Achievements
CREATE TABLE achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  achievement_type text NOT NULL,
  title text NOT NULL,
  description text,
  icon text,
  earned_at timestamptz DEFAULT now()
);

-- Bookmarked content
CREATE TABLE bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  content_type text NOT NULL, -- 'lesson', 'topic', 'test'
  content_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

### Authentication Setup

1. **Enable Authentication Providers**
   
   In your Supabase dashboard:
   - Go to Authentication > Providers
   - Enable Email/Password authentication
   - Configure OAuth providers (Google, Microsoft, Facebook)

2. **OAuth Configuration**
   
   For each OAuth provider, you'll need to:
   - Create an app in the provider's developer console
   - Set the redirect URL to: `https://your-project.supabase.co/auth/v1/callback`
   - Add the client ID and secret to Supabase

3. **Row Level Security (RLS)**
   
   Enable RLS on all tables and create appropriate policies:
   ```sql
   -- Example policy for users table
   CREATE POLICY "Users can read own data" ON users
     FOR SELECT USING (auth.uid() = id);
   
   CREATE POLICY "Users can update own data" ON users
     FOR UPDATE USING (auth.uid() = id);
   ```

## 📱 Application Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
├── contexts/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Subjects.tsx
│   ├── SubjectDetail.tsx
│   ├── LessonDetail.tsx
│   ├── Learn.tsx
│   ├── Practice.tsx
│   ├── Progress.tsx
│   ├── Profile.tsx
│   └── auth/
│       ├── Login.tsx
│       ├── SignUp.tsx
│       └── ForgotPassword.tsx
├── data/
│   ├── subjects.ts
│   ├── lessons.ts
│   └── questions.ts
├── lib/
│   └── supabase.ts
└── types/
    └── index.ts
```

## 🎯 Key Features Implementation

### 1. Video Lessons
- Interactive video player with custom controls
- Progress tracking and resume functionality
- Transcript and note-taking capabilities
- Related content suggestions

### 2. Practice System
- Adaptive question difficulty
- Instant feedback and explanations
- Performance analytics
- Spaced repetition algorithms

### 3. Progress Tracking
- Real-time progress updates
- Visual progress indicators
- Learning streaks and milestones
- Detailed performance analytics

### 4. Achievement System
- Automatic achievement detection
- Badge collection and display
- Social sharing capabilities
- Motivation through gamification

## 🔒 Security Features

- **Authentication**: Secure multi-provider OAuth
- **Authorization**: Row-level security policies
- **Data Protection**: Encrypted data transmission
- **Privacy**: GDPR-compliant data handling

## 📊 Analytics & Monitoring

- **User Analytics**: Learning patterns and engagement metrics
- **Performance Monitoring**: Application performance tracking
- **Error Tracking**: Comprehensive error logging
- **A/B Testing**: Feature experimentation framework

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables for Production
```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_supabase_anon_key
VITE_APP_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Wiki](link-to-wiki)
- **Issues**: [GitHub Issues](link-to-issues)
- **Community**: [Discord Server](link-to-discord)
- **Email**: support@edumaster.com

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core learning platform
- ✅ Video lessons and practice tests
- ✅ Progress tracking
- ✅ User authentication

### Phase 2 (Next)
- 🔄 AI-powered personalized learning paths
- 🔄 Live tutoring sessions
- 🔄 Collaborative study groups
- 🔄 Mobile app development

### Phase 3 (Future)
- 📋 Advanced analytics dashboard
- 📋 Teacher/parent portal
- 📋 Certification programs
- 📋 API for third-party integrations

## 🙏 Acknowledgments

- Inspired by Khan Academy's educational approach
- Built with modern React and TypeScript best practices
- Powered by Supabase for backend infrastructure
- UI components styled with Tailwind CSS
- Icons provided by Lucide React

---

**EduMaster** - Empowering students to master science and mathematics through interactive, engaging, and personalized learning experiences.