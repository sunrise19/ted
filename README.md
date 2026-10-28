# The Evolving Digitals — Frontend

A responsive nine-page agency website starter built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide React. The project is frontend-focused and deliberately does not pretend that an API, database, CMS, admin dashboard, email delivery, or course checkout has been implemented.

## Requirements
- Node.js 20.9+ (recommended for Next.js 15)
- npm

## Install and run
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Production checks
```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Routes
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/portfolio` — Portfolio, with working category filters
- `/courses` — Courses
- `/team` — Team
- `/partners` — Partners
- `/blog` — Blog preview
- `/contact` — Contact form interface and configurable contact options

## Project structure
```text
app/                 App Router pages, metadata, global styles, sitemap and robots
components/           Shared header, footer, section headings, cards, filters and form
lib/site.ts           Typed starter content, navigation, mission/vision, WhatsApp helper
public/images/        Place approved logo, portfolio and team assets here
.env.example          Public configuration template
```

## Brand and content updates
- Replace the temporary `ED` monogram in `components/header.tsx` with the official logo when supplied. Preserve its original proportions and colours.
- Replace clearly marked artwork/portfolio placeholders with authentic, approved designs. Store files in `public/images/` and reference them from the relevant components or content data.
- Edit the service list and portfolio data in `lib/site.ts`.
- Course, team, partner, testimonial and blog arrays are intentionally empty until approved details are available. Populate them only with verified information.
- Mission and vision statements in `lib/site.ts` should remain faithful to the supplied brand wording.
- Update the page copy and metadata as approved brand materials arrive.

## Environment configuration
Copy `.env.example` to `.env.local` and set:
- `NEXT_PUBLIC_SITE_URL` — deployed canonical site origin (replace the example domain).
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — international number, digits only, including country code.
- `NEXT_PUBLIC_WHATSAPP_MESSAGE` — optional pre-filled message.
- `NEXT_PUBLIC_CALENDLY_URL` — approved Calendly booking URL.
- `NEXT_PUBLIC_CONTACT_EMAIL` — approved public contact email.
- Social URL variables — official account URLs when supplied. These are not shown until components are configured to use them.

Only public URLs and public contact details belong in `NEXT_PUBLIC_*` variables. Never place private API keys or secrets in them.

## Contact form status
The form validates fields in the browser and displays a truthful notice. It does **not** submit data anywhere yet. Connect a real server action or API endpoint, add server-side validation and spam protection, and configure email delivery before using it for live enquiries.

## Calendly status
The contact page links to the configured Calendly URL when present. An embedded scheduler can be added later if desired. No booking URL is fabricated.

## Future backend/admin integration
Keep presentation separate from content in `lib/site.ts`. For a future API, introduce typed repository/service functions and replace static content access with API-backed data. The admin dashboard should be a separate protected route/application with real authentication and authorisation. Do not expose admin controls on the public site.

Suggested future models: Service, PortfolioProject, TeamMember, Partner, Testimonial, Course, Article, Category, Tag and ContactEnquiry.

## SEO, accessibility and performance
- Page-specific metadata is defined on each route.
- Root metadata, Open Graph defaults, `sitemap.ts` and `robots.ts` are included.
- Semantic landmarks, skip link, visible focus treatment, responsive navigation, form labels and reduced-motion-safe CSS defaults are included.
- Replace `https://example.com` and verify canonical URLs before deployment.
- Run PageSpeed Insights and accessibility testing after adding real media and deploying. Scores of 90+ are goals, not measured claims.

## Deployment checklist
1. Set production environment variables and domain.
2. Add approved brand assets and remove placeholder copy/artwork.
3. Connect and test contact delivery, WhatsApp and Calendly.
4. Configure HTTPS/SSL at the hosting provider.
5. Run lint, type-check, production build and responsive QA.
6. Verify all external links, legal/privacy requirements and form handling.

## Known outstanding inputs
- Official logo and logo variations
- Approved portfolio creatives, project descriptions, client permissions and analytics (if any)
- Team names, photographs, roles and biographies
- Confirmed partners and approved partner logos
- Authentic testimonials and publication permissions
- Course names, descriptions, prices and sales URLs
- Public email, WhatsApp number, official social profile URLs and Calendly link
- Approved contact-form delivery provider/API
- Final domain/hosting details and privacy/legal copy
