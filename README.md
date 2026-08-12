# CTC-Kenya Website

A fully functional website for CTC-Kenya (Commitment to Community), a grassroots organization dedicated to mentoring, empowering, and exposing communities to opportunities that transform lives.

## Technology Stack

### Frontend
- **React** 19 + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Supabase** - Database client

### Backend
- **Node.js** + **Express** + **TypeScript**
- **Supabase** - PostgreSQL database
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - API rate limiting

### Design System
- **Primary Color**: Deep Teal (#006B68)
- **Accent Color**: Warm Gold (#D6B334)
- **Background**: White (#FFFFFF) / Very Light Teal (#F4F9F8)
- **Typography**: Manrope (display) + Inter (body)

## Project Structure

```
/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ProgramsPage.tsx
│   │   │   ├── ImpactPage.tsx
│   │   │   ├── DonatePage.tsx
│   │   │   └── ContactPage.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/         # Supabase configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── middleware/     # Express middleware
│   │   └── server.ts       # Entry point
│   ├── migrations/         # Supabase SQL migrations
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

## Website Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, impact stats, core programs, MEE campaign, CTA |
| `/about` | About Us | Story, vision, mission, core values, leadership |
| `/programs` | Programs | All 9 program areas with descriptions |
| `/impact` | Impact | Impact trajectory, beneficiary stories, SDG alignment |
| `/donate` | Donate | Donation form with amount selection and impact cards |
| `/contact` | Contact | Contact form and organization information |

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (for database)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will be available at `http://localhost:3000`

### Environment Variables

**Frontend** (`frontend/.env`):
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:3000
```

**Backend** (`backend/.env`):
```
PORT=3000
NODE_ENV=development
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
FRONTEND_URL=http://localhost:5173
```

### Supabase Setup

1. Create a new Supabase project
2. Run the SQL migration in `backend/migrations/001_create_contact_submissions.sql` in the Supabase SQL Editor
3. Copy your project URL and API keys to the environment files

## Development Commands

### Frontend
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm run dev      # Start development server (with hot reload)
npm run build    # Compile TypeScript
npm start        # Start production server
```

## Production Build

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
npm start
```

## Security

- CORS configured to only allow requests from the frontend
- Helmet for security headers
- Rate limiting on API endpoints
- Service role key only used on the backend
- Input validation on all form submissions
- No sensitive keys exposed in frontend code

## Database

The project uses Supabase PostgreSQL. Current tables:

- `contact_submissions` - Stores contact form submissions

See `backend/migrations/` for SQL migration files.