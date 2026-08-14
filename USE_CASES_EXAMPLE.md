# Use Cases Section Configuration

Add this to your service page configuration (e.g., in `app/services/web-development/page.js`):

```javascript
const cfg = {
  // ... other sections ...
  
  usecases: {
    badge: "Use Cases",
    title: "Flexible Ways to Work With Us",
    desc: "See how our solutions empower different teams and departments to succeed",
    items: [
      {
        title: "Legal",
        desc: "Accelerate legal reviews by streamlining contract analysis, policy reviews, and regulatory research, reducing risk and improving collaboration.",
        image: "/usecases/legal.jpg", // Add your image path
        href: "/services/web-development",
        linkText: "Learn more"
      },
      {
        title: "Sales",
        desc: "Build competitive, on-brand proposals with speed and precision to hit your sales targets and foster lasting client relationships.",
        image: "/usecases/sales.jpg",
        href: "/services/web-development",
        linkText: "Learn more"
      },
      {
        title: "Human Resources",
        desc: "Create clear, compliant content for job descriptions, onboarding materials, benefit summaries, and employee communications.",
        image: "/usecases/hr.jpg",
        href: "/services/web-development",
        linkText: "Learn more"
      },
      {
        title: "Finance",
        desc: "Compile data, accelerate reporting cycles, and validate information to turn your financial documents into actionable decisions.",
        image: "/usecases/finance.jpg",
        href: "/services/web-development",
        linkText: "Learn more"
      },
      {
        title: "Procurement",
        desc: "Turn vendor selection into a faster and smarter process by simplifying reviews and delivering audit-ready recommendations.",
        image: "/usecases/procurement.jpg",
        href: "/services/web-development",
        linkText: "Learn more"
      },
      {
        title: "Marketing",
        desc: "Transform documents into on-brand marketing assets to create experiences that resonate with your target audience.",
        image: "/usecases/marketing.jpg",
        href: "/services/web-development",
        linkText: "Learn more"
      }
    ]
  },

  // ... continue with other sections (process, results, pricing, etc.) ...
};
```

## Configuration Details

- **badge**: Small eyebrow label (e.g., "Use Cases")
- **title**: Main section heading (e.g., "Flexible Ways to Work With Us")
- **desc**: Subtitle/description text
- **items**: Array of use case cards, each with:
  - **title**: Card title (e.g., "Legal")
  - **desc**: Card description text
  - **image**: Path to your use case image (recommended: 500x300px or similar aspect ratio)
  - **href**: Link destination
  - **linkText**: Optional custom link text (defaults to "Learn more")

## Styling Notes

The cards automatically get:
- ✨ Smooth hover animations (lift up 12px, scale image)
- 🎨 Gradient accent line on hover
- 📱 Responsive grid (3 columns → 2 columns → 1 column)
- 🌊 Glassmorphism effects matching Aurora Modern design
- ⚡ Staggered entrance animations

## Image Recommendations

For best results, use images with:
- **Size**: ~500x300px or wider (maintains good quality at card size)
- **Aspect Ratio**: 16:9 or wider (looks better on cards)
- **Format**: JPG or PNG, optimized for web (use Next.js Image component if needed)
- **Content**: Product mockups, UI screenshots, or service visuals (like the examples in the image)

You can add this to ANY service page by including the `usecases` object in the `cfg` export!
