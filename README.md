# Hackathon Management System Backend

Production-ready backend API for managing hackathons, built with Next.js 15, TypeScript, and Firebase.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Firebase Firestore
- **Auth**: Firebase Auth
- **Storage**: Firebase Storage
- **Validation**: Zod
- **Email**: Resend (optional)
- **Hosting**: Vercel

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── teams/
│   │   ├── events/
│   │   ├── registrations/
│   │   ├── projects/
│   │   ├── submissions/
│   │   ├── judges/
│   │   ├── mentors/
│   │   ├── leaderboard/
│   │   ├── notifications/
│   │   ├── certificates/
│   │   ├── chat/
│   │   ├── admin/
│   │   └── search/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── firebase/
│   ├── admin.ts
│   └── config.ts
├── middleware/
│   └── auth.ts
├── services/
│   └── firestore.ts
├── types/
│   └── index.ts
├── utils/
│   ├── helpers.ts
│   └── validations.ts
├── middleware.ts
├── firestore.rules
├── firestore.indexes.json
├── storage.rules
└── package.json
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
RESEND_API_KEY=
```

## Firebase Setup

1. Create a Firebase project
2. Enable Firestore, Auth, and Storage
3. Generate a service account key
4. Deploy Firestore rules, indexes, and storage rules

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Send password reset email
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/verify-email` - Verify email

### Users
- `GET /api/users` - List users (with filters and pagination)
- `PATCH /api/users` - Update user
- `DELETE /api/users` - Delete user (admin only)

### Teams
- `POST /api/teams` - Create team
- `GET /api/teams` - List teams or get a single team
- `PATCH /api/teams` - Update team, invite, join, leave
- `DELETE /api/teams` - Delete team

### Events
- `POST /api/events` - Create event (admin/organizer)
- `GET /api/events` - List events or get a single event
- `PATCH /api/events` - Update event (admin/organizer)
- `DELETE /api/events` - Delete event (admin)

### Registrations
- `POST /api/registrations` - Register for event
- `GET /api/registrations` - List registrations
- `PATCH /api/registrations` - Approve/reject registration (admin/organizer)

### Projects
- `POST /api/projects` - Create project
- `GET /api/projects` - List projects or get a single project
- `PATCH /api/projects` - Update project
- `DELETE /api/projects` - Delete project

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics (admin)

### Search
- `GET /api/search` - Global search

## Roles

- `admin` - Full access
- `organizer` - Manage events and registrations
- `judge` - Judge projects
- `mentor` - Mentor teams
- `volunteer` - Help with event
- `participant` - Compete in hackathon
