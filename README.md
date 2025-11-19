# Founderflow - SaaS Boilerplate

A complete, production-ready Next.js SaaS boilerplate with authentication, payments, internationalization, and more.

## 🚀 Features

- **Authentication**: Clerk integration with sign-up/sign-in
- **Payments**: Dual payment provider support (Stripe & Lemon Squeezy) 
- **Internationalization**: Multi-language support with next-intl
- **Database**: MongoDB integration with Mongoose
- **UI Components**: Radix UI components with Tailwind CSS
- **Email**: Resend integration for transactional emails
- **Analytics**: PostHog integration (optional)
- **CMS**: Sanity integration for blog content (optional)
- **Responsive Design**: Mobile-first approach
- **TypeScript**: Full type safety

## 📦 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: MongoDB with Mongoose
- **Authentication**: Clerk
- **Payments**: Stripe & Lemon Squeezy
- **Email**: Resend
- **Deployment**: Vercel ready

## 🛠️ Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd FounderflowBoilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and update with your credentials:

```bash
cp .env.example .env
```

Fill in all required environment variables in `.env`. See the [Environment Variables](#environment-variables) section below for details.

### 4. Set up the database

Ensure MongoDB is running and accessible via the `MONGO_URI` in your `.env` file.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

### Required Variables

- `MONGO_URI` - MongoDB connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key
- `CLERK_WEBHOOK_SIGNING_SECRET` - Clerk webhook secret

### Payment Providers (Choose One or Both)

**Stripe:**
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

**Lemon Squeezy:**
- `LEMON_SQUEEZY_API_KEY` - Lemon Squeezy API key
- `LEMON_SQUEEZY_STORE_ID` - Your store ID
- `LEMON_SQUEEZY_WEBHOOK_SECRET` - Webhook secret

### Optional Services

- `RESEND_API_KEY` - For transactional emails
- `NEXT_PUBLIC_POSTHOG_KEY` - For analytics
- `SANITY_PROJECT_ID` - For blog CMS
- `SANITY_DATASET` - Sanity dataset name

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── landing/          # Landing page components
│   └── platform/         # App dashboard components
├── lib/                  # Utility functions
│   ├── config/          # Configuration files
│   └── utils/           # Helper functions
├── models/              # Database models
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── docs/                # Documentation
```

## 💳 Payment Integration

This boilerplate supports both Stripe and Lemon Squeezy:

- Users can choose their preferred payment method
- Unified checkout experience
- Automatic webhook processing
- Credit and subscription management

Configure pricing in `lib/config/pricing.ts` and set up webhooks as documented in the `docs/` folder.

## 🌍 Internationalization

Built-in support for multiple languages using `next-intl`:

- Add translations in `locales/`
- Configure supported locales in `lib/config/locales.ts`
- Automatic locale detection and routing

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Add all environment variables in Vercel dashboard
3. Deploy

## 📚 Documentation

Additional documentation is available in the `docs/` folder:

- Payment provider setup guides
- Webhook configuration
- Deployment instructions

## 🤝 Support

For issues and questions:
1. Check the documentation in the `docs/` folder
2. Review the code examples in `examples/`
3. Open an issue on GitHub

## 📄 License

This project is licensed under the MIT License.
# Saas
