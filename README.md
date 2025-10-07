# Echo - Mental Wellness Platform

A beautiful, gamified mental wellness platform with AI-powered support, mood tracking, habit building, and mindfulness exercises. Built with a modern dark glassmorphic aesthetic.

![Echo](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **🤖 AI Wellness Companion** - Chat with an empathetic AI powered by Groq (free tier)
- **😊 Mood Tracker** - Monitor your emotional well-being over time
- **✅ Habit Tracker** - Build positive habits with visual progress tracking
- **🎙️ Voice Journaling** - Express yourself through voice notes and reflections
- **📝 Smart Todo Lists** - Organize your life with intelligent task management
- **🧘 Mindfulness Exercises** - Guided meditations and wellness exercises
- **🏆 Gamification** - Earn rewards and badges for progress

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd echo-wellness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/echo_db
   PGHOST=localhost
   PGPORT=5432
   PGUSER=postgres
   PGPASSWORD=your_password
   PGDATABASE=echo_db
   
   # Server Configuration
   PORT=5000
   
   # AI Configuration (Free - No Credit Card Required)
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5000`

## 🎨 Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **TanStack Query** - Data fetching
- **Wouter** - Routing
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **Drizzle ORM** - Database ORM
- **Groq SDK** - AI integration

## 📁 Project Structure

```
echo-wellness/
├── client/                  # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities
│   │   └── hooks/          # Custom hooks
├── server/                  # Backend application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Storage layer
│   └── db.ts               # Database setup
├── shared/                  # Shared types & schemas
│   └── schema.ts           # Database schema
└── attached_assets/         # Static assets
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `GROQ_API_KEY` | Groq AI API key (free) | Yes |
| `PORT` | Server port (default: 5000) | No |
| `PGHOST` | PostgreSQL host | Yes (local) |
| `PGPORT` | PostgreSQL port | Yes (local) |
| `PGUSER` | PostgreSQL username | Yes (local) |
| `PGPASSWORD` | PostgreSQL password | Yes (local) |
| `PGDATABASE` | PostgreSQL database name | Yes (local) |

## 🤖 Getting a Free Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up for a free account (no credit card required)
3. Navigate to API Keys section
4. Create a new API key
5. Copy and add it to your `.env` file

**Why Groq?**
- ✅ Completely free
- ✅ No credit card required
- ✅ Fast inference (optimized hardware)
- ✅ Uses Llama 3.1 models

## 🎨 Design Philosophy

Echo features a unique **dark glassmorphic aesthetic** with:

- **Color Palette**: Purple, pink, blue gradients with glass-like surfaces
- **Animations**: Smooth transitions, floating particles, glow effects
- **Typography**: Poppins for headings, Inter for body text
- **Layout**: Responsive sidebar navigation, card-based content

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run check      # Type check
npm run db:push    # Push database schema changes
```

## 🔧 Development

### Running Locally

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5000
```

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Database Migrations

```bash
# Push schema changes to database
npm run db:push

# Force push (if data loss warning)
npm run db:push --force
```

## 🌐 Deployment

### Deploy to Replit

1. Import project to Replit
2. Add secrets in Replit Secrets panel:
   - `GROQ_API_KEY`
   - Database variables (auto-configured)
3. Click "Run"

### Deploy to Other Platforms

The app can be deployed to:
- Vercel
- Netlify
- Railway
- Render
- Any Node.js hosting service

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ for mental wellness**
