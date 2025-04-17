# AI24 API Documentation

This document provides comprehensive documentation for the AI24 API endpoints and integration guides.

## 📋 Overview

The AI24 API is built on Next.js API routes and Supabase, providing endpoints for authentication, user management, workshops, media, and more.

## 🔐 Authentication

All API endpoints require authentication using a JWT token obtained from Supabase Auth.

### Headers

```http
Authorization: Bearer <jwt_token>
```

## 📡 API Endpoints

### Authentication

#### POST /api/auth/login
```typescript
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  session: Session;
}
```

#### POST /api/auth/register
```typescript
interface RegisterRequest {
  email: string;
  password: string;
  role: 'artist' | 'educator' | 'partner';
}

interface RegisterResponse {
  user: User;
  session: Session;
}
```

### Users

#### GET /api/users/me
```typescript
interface UserResponse {
  id: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}
```

#### PATCH /api/users/me
```typescript
interface UpdateUserRequest {
  role?: string;
  metadata?: Record<string, any>;
}

interface UpdateUserResponse {
  user: User;
}
```

### Workshops

#### GET /api/workshops
```typescript
interface WorkshopsResponse {
  workshops: Workshop[];
  total: number;
}

interface Workshop {
  id: string;
  title: string;
  description: string;
  educator_id: string;
  start_time: string;
  end_time: string;
  capacity: number;
  status: 'draft' | 'scheduled' | 'completed';
}
```

#### POST /api/workshops
```typescript
interface CreateWorkshopRequest {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  capacity: number;
}

interface CreateWorkshopResponse {
  workshop: Workshop;
}
```

### Media

#### GET /api/media
```typescript
interface MediaResponse {
  media: MediaItem[];
  total: number;
}

interface MediaItem {
  id: string;
  user_id: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  metadata: Record<string, any>;
}
```

#### POST /api/media
```typescript
interface CreateMediaRequest {
  type: 'image' | 'video' | 'audio';
  file: File;
  metadata?: Record<string, any>;
}

interface CreateMediaResponse {
  media: MediaItem;
}
```

## 🔧 Integration Guides

### Supabase Integration

1. Initialize Supabase client:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

2. Set up authentication:
```typescript
const { data: { user }, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})
```

### Mux Integration

1. Initialize Mux client:
```typescript
import Mux from '@mux/mux-node'

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
})
```

2. Create a live stream:
```typescript
const stream = await mux.Video.LiveStreams.create({
  playback_policy: 'public',
  new_asset_settings: { playback_policy: 'public' },
})
```

### Stripe Integration

1. Initialize Stripe client:
```typescript
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})
```

2. Create a checkout session:
```typescript
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price: 'price_123',
    quantity: 1,
  }],
  mode: 'subscription',
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
})
```

## 🔍 Error Handling

All API endpoints return standardized error responses:

```typescript
interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  }
}
```

Common error codes:
- `AUTH_REQUIRED`: Authentication required
- `INVALID_CREDENTIALS`: Invalid email or password
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid request data
- `INTERNAL_ERROR`: Server error

## 📈 Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user
- 10000 requests per day per API key

## 🔒 Security

- All endpoints use HTTPS
- JWT tokens expire after 24 hours
- Rate limiting to prevent abuse
- Input validation on all endpoints
- CORS policy in place

## 📝 Examples

### Authentication Flow

```typescript
// Login
const { data: { user }, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
})

// Get user profile
const { data: profile, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', user.id)
  .single()
```

### Workshop Management

```typescript
// Create workshop
const { data: workshop, error } = await supabase
  .from('workshops')
  .insert({
    title: 'AI Art Workshop',
    description: 'Learn to create art with AI',
    start_time: '2024-04-20T14:00:00Z',
    end_time: '2024-04-20T16:00:00Z',
    capacity: 20,
  })
  .select()
  .single()

// List workshops
const { data: workshops, error } = await supabase
  .from('workshops')
  .select('*')
  .order('start_time', { ascending: true })
```

### Media Upload

```typescript
// Upload file to Supabase Storage
const { data, error } = await supabase.storage
  .from('media')
  .upload('path/to/file.jpg', file)

// Create media record
const { data: media, error } = await supabase
  .from('media')
  .insert({
    type: 'image',
    url: data.path,
    metadata: { size: file.size },
  })
  .select()
  .single()
```

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Mux Documentation](https://docs.mux.com)
- [Stripe Documentation](https://stripe.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) 