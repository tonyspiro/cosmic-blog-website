<!-- README_START -->
# Cosmic Blog Website

A modern, responsive blog website built with Next.js 15 and powered by Cosmic headless CMS. Features a clean design with category filtering, author profiles, and optimized content delivery.

![Blog Website](https://imgix.cosmicjs.com/58bd3f60-57b5-11f0-a051-23c10f41277a-photo-1555066931-4365d14bab8c-1751509682839.jpg?w=1200&h=400&fit=crop&auto=format,compress)

## Features

- 📝 Dynamic blog post rendering with markdown support
- 👤 Author profiles with social links and avatars
- 🏷️ Category-based content organization and filtering
- 🎨 Color-coded categories with custom styling
- 📱 Fully responsive design optimized for all devices
- ⚡ Server-side rendering for optimal performance
- 🔍 SEO-optimized with proper meta tags
- 🖼️ Optimized image delivery via Imgix
- 🎯 Featured post highlighting
- 📅 Publication date display
- 🌐 Clean, accessible user interface

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=blog-production-c7c4b140-5797-11f0-897f-39cd175ce0f5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: "staging" in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content Management**: [Cosmic](https://www.cosmicjs.com) headless CMS
- **Language**: TypeScript with strict type checking
- **Image Optimization**: Imgix integration
- **Deployment**: Optimized for Vercel, Netlify, and other platforms

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with the cloned bucket

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd cosmic-blog-website
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching All Posts
```typescript
import { cosmic } from '@/lib/cosmic'

const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting a Single Post
```typescript
const post = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .depth(1)
```

### Filtering by Category
```typescript
const techPosts = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.categories': 'category-id'
  })
  .depth(1)
```

## Cosmic CMS Integration

This application seamlessly integrates with your Cosmic CMS bucket structure:

- **Posts**: Complete blog articles with markdown content, featured images, author relationships, and category associations
- **Authors**: Author profiles with avatars, bios, and social media links
- **Categories**: Content organization with custom colors and descriptions

The app uses the [Cosmic SDK](https://www.cosmicjs.com/docs) to fetch content and leverages the staging environment for development. All content relationships are properly typed and validated.

## Deployment Options

### Vercel (Recommended for Next.js)
1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on git push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Other Platforms
This app can be deployed to any platform that supports Node.js applications.

Remember to set your environment variables in your hosting platform's dashboard for production deployment.

<!-- README_END -->