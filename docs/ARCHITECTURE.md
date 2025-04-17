# AI24 Architecture

## System Overview

AI24 is built as a modern web application using Next.js v15 with the App Router, leveraging Supabase for backend services. The architecture follows a modular design pattern, separating concerns by user roles and features.

```mermaid
graph TD
    A[Client] --> B[Next.js Frontend]
    B --> C[Supabase Backend]
    C --> D[PostgreSQL Database]
    C --> E[Storage]
    C --> F[Auth]
    B --> G[AI Services]
    G --> H[OpenAI API]
    G --> I[Stability AI]
    G --> J[Custom Models]
```

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  Next.js    │  │  Tailwind   │  │  Framer     │             │
│  │  App Router │  │    CSS      │  │  Motion     │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API Layer                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  Server     │  │  Edge       │  │  Middleware │             │
│  │  Actions    │  │  Functions  │  │  Layer      │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Backend Services                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  Supabase   │  │  Mux        │  │  Stripe     │             │
│  │  (Auth, DB, │  │  (Video)    │  │  (Payments) │             │
│  │   Storage)  │  │             │  │             │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

## Frontend Architecture

```mermaid
graph LR
    A[Pages] --> B[Components]
    B --> C[UI Components]
    B --> D[Layout Components]
    B --> E[Feature Components]
    A --> F[API Routes]
    F --> G[External APIs]
    F --> H[Internal Services]
```

## 📁 Directory Structure

```
/app
├── (auth)/
│   ├── login/
│   └── register/
├── (dashboard)/
│   ├── artist/
│   ├── educator/
│   └── partner/
├── workshops/
├── showcase/
├── livestreams/
├── profile/
└── api/
```

## 🔧 Core Components

### Frontend
- **Next.js v15**: App Router, Server Components, Server Actions
- **Tailwind CSS**: Styling and theming
- **Framer Motion**: Animations and interactions
- **SWR/React Query**: Data fetching and caching

### Backend
- **Supabase**: Authentication, Database, Storage
- **Mux**: Video streaming and processing
- **Stripe**: Payment processing
- **Sanity CMS**: Content management

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    participant AI Services

    User->>Frontend: Interacts with UI
    Frontend->>Backend: API Request
    Backend->>Database: Query Data
    Database-->>Backend: Return Data
    Backend->>AI Services: Process Request
    AI Services-->>Backend: Return Results
    Backend-->>Frontend: API Response
    Frontend-->>User: Update UI
```

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Auth Service
    participant Database

    User->>Frontend: Login Request
    Frontend->>Auth Service: Authenticate
    Auth Service->>Database: Verify Credentials
    Database-->>Auth Service: User Data
    Auth Service-->>Frontend: JWT Token
    Frontend->>User: Session Established
```

1. User initiates login/register
2. Supabase Auth handles authentication
3. JWT token stored in secure cookie
4. RLS policies enforce data access
5. User profile created/updated

## 💾 Data Model

### Users
```sql
create table users (
  id uuid references auth.users primary key,
  email text unique,
  role text check (role in ('artist', 'educator', 'partner')),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Workshops
```sql
create table workshops (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  educator_id uuid references users(id),
  start_time timestamp with time zone,
  end_time timestamp with time zone,
  capacity integer,
  status text check (status in ('draft', 'scheduled', 'completed')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Media
```sql
create table media (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id),
  type text check (type in ('image', 'video', 'audio')),
  url text not null,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

## Component Hierarchy

```mermaid
graph TD
    A[App] --> B[Layout]
    B --> C[Navigation]
    B --> D[Pages]
    D --> E[Landing]
    D --> F[Dashboard]
    D --> G[Workshop]
    E --> H[Components]
    F --> H
    G --> H
    H --> I[UI Library]
```

## 🔄 State Management

```mermaid
graph LR
    A[Components] --> B[Context]
    B --> C[Global State]
    B --> D[User State]
    B --> E[UI State]
    C --> F[Local Storage]
    D --> G[Session Storage]
```

- **Server State**: Managed by Supabase
- **Client State**: Managed by React Query
- **UI State**: Managed by React hooks
- **Form State**: Managed by React Hook Form

## 🚀 Deployment Architecture

```mermaid
graph TD
    A[Vercel] --> B[Next.js App]
    B --> C[Edge Functions]
    B --> D[Static Assets]
    A --> E[Supabase]
    E --> F[Database]
    E --> G[Storage]
    E --> H[Auth]
```

- **Platform**: Vercel
- **Environments**: Development, Staging, Production
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, Datadog

## 🔍 Security Layers

```mermaid
graph TD
    A[Client] --> B[HTTPS]
    B --> C[API Gateway]
    C --> D[Rate Limiting]
    D --> E[Authentication]
    E --> F[Authorization]
    F --> G[Data Access]
```

- **Authentication**: Supabase Auth with JWT
- **Authorization**: Row Level Security (RLS)
- **Data Protection**: Encryption at rest
- **API Security**: Rate limiting, CORS policies

## 📈 Monitoring & Analytics

```mermaid
graph LR
    A[Application] --> B[Logging]
    A --> C[Error Tracking]
    A --> D[Performance Monitoring]
    B --> E[Analytics Dashboard]
    C --> E
    D --> E
```

- **Caching**: SWR/React Query
- **Optimization**: Next.js Image, Font optimization
- **Monitoring**: Performance metrics
- **Testing**: Jest, Cypress 