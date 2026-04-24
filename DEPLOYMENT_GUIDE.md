# Abdulsobur's Portfolio Website — Setup & Deployment Guide

## Overview
This is a fully responsive, modern portfolio website built with React and Tailwind CSS. It includes smooth scrolling navigation, professional sections for about, services, experience, skills, education, and contact information.

---

## Quick Setup

### Option 1: Deploy to Vercel (Recommended)
Vercel is the easiest way to deploy React apps and offers free hosting with automatic deployments.

1. **Push your code to GitHub:**
   ```bash
   # Create a new repository on GitHub (abdulsobur-portfolio)
   # Then:
   git init
   git add abdulsobur-portfolio.jsx
   git commit -m "Initial portfolio website"
   git remote add origin https://github.com/YOUR-USERNAME/abdulsobur-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project" → Select your repository
   - Vercel will auto-detect React and configure everything
   - Click "Deploy" — your site is live in minutes!
   - Get a URL like `https://abdulsobur-portfolio.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project settings
   - Add your custom domain (e.g., `abdulsobur.com`)
   - Update DNS records as instructed

---

### Option 2: Deploy to Netlify
Another excellent free option with easy setup.

1. **Create a React app locally:**
   ```bash
   npx create-react-app abdulsobur-portfolio
   cd abdulsobur-portfolio
   ```

2. **Replace the App.js content with the portfolio code** (the component code provided)

3. **Deploy:**
   ```bash
   npm run build
   ```

4. **Drag & drop the `build` folder** to [netlify.com](https://netlify.com)
   - Or connect GitHub for automatic deployments

---

### Option 3: Use a React Template Locally

1. **Create a new React app:**
   ```bash
   npx create-react-app abdulsobur-portfolio
   cd abdulsobur-portfolio
   ```

2. **Replace `src/App.jsx` with the portfolio component code**

3. **Install dependencies:**
   ```bash
   npm install lucide-react
   ```

4. **Run locally:**
   ```bash
   npm start
   ```
   - Site opens at `http://localhost:3000`

5. **Build for production:**
   ```bash
   npm run build
   ```
   - Creates optimized files in the `build/` folder

---

## Customization Guide

### Update Contact Information
Find the contact section (near the bottom) and replace:
```jsx
<a href="mailto:abdulsobur.content@gmail.com">
```
with your actual email, phone, and social links.

### Add Your Photo
In the "About Me" section, replace the placeholder:
```jsx
<div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-96 flex items-center justify-center text-gray-400">
  <div className="text-center">
    <div className="text-6xl mb-4">📸</div>
    <p>Professional photo goes here</p>
  </div>
</div>
```

With an actual image:
```jsx
<img 
  src="/your-photo.jpg" 
  alt="Abdulsobur" 
  className="w-full h-96 object-cover rounded-2xl"
/>
```

### Update Statistics
Change the numbers in the About section:
```jsx
<div className="text-3xl font-bold text-amber-700">6.1K</div>
<p className="text-sm text-gray-600">Followers Managed</p>
```

### Update Experience
Modify the experience section to include actual company dates:
```jsx
<p className="text-amber-700 font-medium mb-4">The DEW Centre — Wellness & Lifestyle</p>
```

### Adjust Colors
The site uses amber/orange tones. To change the color scheme, replace instances of:
- `amber-700` → `blue-700`, `green-700`, `purple-700`, etc.
- `amber-50` → `blue-50`, `green-50`, `purple-50`, etc.

(Tailwind supports: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose)

---

## Features

✅ **Responsive Design** — Works perfectly on mobile, tablet, and desktop  
✅ **Smooth Navigation** — Click nav items to smoothly scroll to sections  
✅ **Animations** — Subtle hover effects and scroll-triggered animations  
✅ **Fast Performance** — Optimized React code with Tailwind CSS  
✅ **SEO Ready** — Proper heading hierarchy and semantic HTML  
✅ **Accessible** — Keyboard navigation, readable text sizes  
✅ **Mobile Menu** — Hamburger menu for small screens  

---

## File Structure

```
abdulsobur-portfolio/
├── src/
│   └── App.jsx (main component — the portfolio code)
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md
```

---

## Environment Checklist

Before deploying:

- [ ] Update email address in contact section
- [ ] Update phone number
- [ ] Add professional photo
- [ ] Update statistics (followers, campaigns, years)
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Update social media links (Twitter, LinkedIn)
- [ ] Customize color scheme if desired
- [ ] Proof-read all text

---

## Useful Links

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Tailwind CSS:** https://tailwindcss.com
- **React Docs:** https://react.dev
- **Lucide Icons:** https://lucide.dev

---

## Troubleshooting

**Icons not showing?**
- Make sure `lucide-react` is installed: `npm install lucide-react`

**Styles look wrong?**
- Check that Tailwind CSS is properly configured in your `tailwind.config.js`

**Deployment failed on Vercel?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`

**Want to add a blog section?**
- Add a new section with `id="blog"` and add it to the navigation menu

---

## Support & Next Steps

1. **Add more work samples** — Create a portfolio/case studies section
2. **Add a blog** — Share insights on social media strategy
3. **Integrate form** — Use services like Formspree or EmailJS for contact forms
4. **Analytics** — Add Google Analytics to track visitors
5. **Newsletter signup** — Integrate ConvertKit or Mailchimp

---

Made with ❤️ for Abdulsobur Olatunji
