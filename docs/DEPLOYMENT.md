# AI24 Deployment Guide

This guide outlines the deployment procedures for the AI24 platform across different environments.

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the development server

```bash
git clone https://github.com/moisestech/AI24-app.git
cd AI24-app
pnpm install
cp .env.example .env.local
pnpm dev
```

## 📋 Prerequisites

- Node.js 18+
- pnpm
- Supabase account
- Vercel account
- Mux account
- Stripe account

## 🔧 Environment Setup

### Required Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Mux
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Other
NEXT_PUBLIC_APP_URL=your_app_url
```

## 🏗️ Development Environment

### Local Development

1. Start the development server:
```bash
pnpm dev
```

2. Access the application at `http://localhost:3000`

### Database Setup

1. Connect to Supabase
2. Run the database migrations:
```bash
pnpm db:migrate
```

3. Seed the database (if needed):
```bash
pnpm db:seed
```

## 🚀 Staging Environment

### Deployment Process

1. Push to the `staging` branch
2. Vercel automatically deploys to staging
3. Run tests:
```bash
pnpm test
```

4. Verify deployment at `https://staging.ai24.live`

### Database Migration

1. Connect to staging Supabase instance
2. Run migrations:
```bash
pnpm db:migrate:staging
```

## 🎯 Production Environment

### Deployment Process

1. Create a release branch from `main`
2. Update version numbers
3. Push to `main`
4. Vercel automatically deploys to production
5. Run tests:
```bash
pnpm test
```

6. Verify deployment at `https://ai24.live`

### Database Migration

1. Connect to production Supabase instance
2. Run migrations:
```bash
pnpm db:migrate:production
```

## 🔍 Monitoring

### Logs

- Vercel logs: `vercel logs`
- Supabase logs: Supabase dashboard
- Application logs: Sentry

### Metrics

- Performance: Datadog
- Errors: Sentry
- Analytics: Vercel Analytics

## 🔒 Security

### SSL/TLS

- Automatically handled by Vercel
- Force HTTPS in production

### Environment Variables

- Never commit `.env` files
- Use Vercel environment variables
- Rotate secrets regularly

## 🚨 Rollback Procedure

1. Identify the last stable version
2. Revert the deployment in Vercel
3. Rollback database migrations if needed:
```bash
pnpm db:rollback
```

## 📈 Scaling

### Horizontal Scaling

- Automatically handled by Vercel
- Configure in Vercel dashboard

### Database Scaling

- Configure in Supabase dashboard
- Monitor usage and adjust as needed

## 🔄 CI/CD Pipeline

### GitHub Actions

1. Push to repository
2. Run tests
3. Build application
4. Deploy to appropriate environment

### Manual Steps

1. Review pull requests
2. Run security scans
3. Verify deployments
4. Monitor performance

## 📝 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs
   - Verify dependencies
   - Clear build cache

2. **Database Issues**
   - Check Supabase status
   - Verify migrations
   - Check connection strings

3. **Performance Issues**
   - Check Vercel metrics
   - Review application logs
   - Monitor database performance

### Support

- Check [GitHub Issues](https://github.com/moisestech/AI24-app/issues)
- Contact team on Discord
- Submit support ticket 