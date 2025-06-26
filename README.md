# PathForwards - Career Discovery Platform for High School Students

PathForwards is a comprehensive career guidance platform designed specifically for high school students. Through personality assessments, skill evaluations, and extensive career exploration tools, we help students make informed decisions about their future career paths.

## 🌟 Features

### Core Career Guidance Features
- **Personality Assessment**: Comprehensive evaluation of personality traits, interests, and aptitudes
- **Career Explorer**: Detailed database of 500+ careers with salary information, job outlook, and requirements
- **Educational Pathways**: Step-by-step guidance on educational requirements for different careers
- **Progress Tracking**: Monitor assessment completion and career exploration journey
- **Resource Library**: Curated collection of career planning resources and tools

### Assessment Capabilities
- **Interest Inventory**: Discover what truly motivates and excites you
- **Personality Analysis**: Understand your work style and preferences
- **Skills Assessment**: Identify your natural talents and developed abilities
- **Values Clarification**: Align career choices with personal values
- **Career Matching**: AI-powered recommendations based on assessment results

### Career Exploration
- **Industry Insights**: Comprehensive information about different industries
- **Job Market Trends**: Current and projected employment outlook
- **Salary Information**: Realistic salary expectations by region and experience
- **Educational Requirements**: Detailed pathways from high school to career
- **Day-in-the-Life**: Real stories from professionals in various fields

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Interface**: Clean, modern design focused on user experience
- **Progress Saving**: Resume assessments and exploration where you left off
- **Personalized Dashboard**: Track your journey and saved careers
- **Goal Setting**: Set and monitor career-related goals

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
   cd pathforwards
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

-- Assessment results
CREATE TABLE assessment_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  category text NOT NULL,
  score float NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Saved careers
CREATE TABLE saved_careers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  career_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- User goals
CREATE TABLE goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  completed boolean DEFAULT false,
  deadline date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
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
│   ├── Assessment.tsx
│   ├── CareerExplorer.tsx
│   ├── Pathways.tsx
│   ├── Resources.tsx
│   ├── Progress.tsx
│   ├── Profile.tsx
│   └── auth/
│       ├── Login.tsx
│       ├── SignUp.tsx
│       └── ForgotPassword.tsx
├── data/
│   ├── careers.ts
│   ├── assessmentQuestions.ts
│   ├── pathways.ts
│   └── resources.ts
├── lib/
│   └── supabase.ts
└── types/
    └── index.ts
```

## 🎯 Key Features Implementation

### 1. Career Assessment
- Multi-dimensional personality evaluation
- Interest and aptitude testing
- Skills assessment with real-world scenarios
- Values clarification exercises
- Comprehensive scoring and analysis

### 2. Career Matching Algorithm
- Weighted scoring based on assessment results
- Machine learning-enhanced recommendations
- Industry trend integration
- Continuous improvement based on user feedback

### 3. Educational Pathways
- Step-by-step educational planning
- Alternative pathway exploration
- Timeline and milestone tracking
- Resource recommendations for each step

### 4. Progress Tracking
- Assessment completion tracking
- Career exploration history
- Goal setting and monitoring
- Achievement system with badges

## 🔒 Security Features

- **Authentication**: Secure multi-provider OAuth
- **Authorization**: Row-level security policies
- **Data Protection**: Encrypted data transmission
- **Privacy**: GDPR-compliant data handling

## 📊 Analytics & Insights

- **User Journey Analytics**: Track how students navigate career exploration
- **Assessment Analytics**: Understand common personality patterns and career preferences
- **Career Trends**: Monitor which careers are most popular among students
- **Success Metrics**: Track student satisfaction and career decision confidence

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
- **Email**: support@pathforwards.com

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core assessment platform
- ✅ Career exploration database
- ✅ Educational pathways
- ✅ User authentication and profiles

### Phase 2 (Next)
- 🔄 AI-powered career counseling chatbot
- 🔄 Video interviews with professionals
- 🔄 Internship and job shadow matching
- 🔄 Parent/counselor dashboard

### Phase 3 (Future)
- 📋 College application integration
- 📋 Scholarship matching system
- 📋 Alumni mentorship program
- 📋 API for school integration

## 🙏 Acknowledgments

- Inspired by evidence-based career counseling practices
- Built with modern React and TypeScript best practices
- Powered by Supabase for backend infrastructure
- UI components styled with Tailwind CSS
- Icons provided by Lucide React

---

**PathForwards** - Guiding high school students toward their ideal career paths through comprehensive assessment, exploration, and planning tools.