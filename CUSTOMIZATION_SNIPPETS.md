# Portfolio Customization Snippets

Copy and paste these code blocks to quickly customize your portfolio.

---

## 1. Update Contact Information

Replace the entire contact section with your details:

```jsx
{/* Contact Section */}
<section id="contact" className="py-24 px-6 bg-gradient-to-b from-amber-700 to-amber-800 text-white">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
    <p className="text-xl mb-12 text-amber-100">Ready to elevate your brand? Get in touch.</p>
    
    <div className="space-y-4 mb-12">
      <a
        href="mailto:YOUR-EMAIL@example.com"
        className="flex items-center justify-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-lg font-medium hover:bg-amber-50 transition-colors"
      >
        <Mail size={20} />
        YOUR-EMAIL@example.com
      </a>
      <a
        href="tel:+234XXXXXXXXXX"
        className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
      >
        <Phone size={20} />
        +234 XXX XXX XXXX
      </a>
    </div>

    <div className="flex justify-center gap-6">
      <a href="https://twitter.com/YOUR-HANDLE" className="hover:text-amber-100 transition-colors">
        <Twitter size={24} />
      </a>
      <a href="https://linkedin.com/in/YOUR-PROFILE" className="hover:text-amber-100 transition-colors">
        <Linkedin size={24} />
      </a>
    </div>
  </div>
</section>
```

---

## 2. Add a Portfolio/Work Section

Insert this before the Contact section:

```jsx
{/* Portfolio Section */}
<section id="portfolio" className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-16">Recent Work</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: 'Brand Campaign — Wellness Company',
          description: 'Increased engagement by 150% through consistent, storytelling-focused content',
          image: '🎯'
        },
        {
          title: 'Community Growth Strategy — E-commerce',
          description: 'Built a community of 5K engaged followers in 6 months',
          image: '📈'
        },
        {
          title: 'Paid Campaign — Tech Startup',
          description: 'Generated 500+ qualified leads with targeted social ads',
          image: '💡'
        },
        {
          title: 'Content Strategy — Lifestyle Brand',
          description: 'Created content framework resulting in 3x higher engagement rate',
          image: '✨'
        }
      ].map((work, idx) => (
        <div key={idx} className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl mb-4">{work.image}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{work.title}</h3>
          <p className="text-gray-600">{work.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

And add to navigation menu:
```jsx
{['about', 'services', 'portfolio', 'experience', 'skills'].map((item) => (
  // ... existing menu code
))}
```

---

## 3. Add Testimonials/Social Proof

Insert before Contact section:

```jsx
{/* Testimonials Section */}
<section className="py-24 px-6 bg-amber-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What Clients Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          text: 'Abdulsobur transformed our social media presence. Followers grew 40% in 3 months.',
          author: 'Sarah Johnson',
          company: 'The DEW Centre'
        },
        {
          text: 'Strategic, creative, and results-driven. Exactly what our brand needed.',
          author: 'Michael Chen',
          company: 'Digital Agency'
        },
        {
          text: 'The content quality and engagement rates speak for themselves. Highly recommend.',
          author: 'Amara Okonkwo',
          company: 'E-commerce Store'
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 4. Change Color Scheme

Find and replace all instances of `amber` with your chosen color:

**For Blue (Professional):**
```
amber-700 → blue-700
amber-800 → blue-800
amber-50 → blue-50
amber-100 → blue-100
amber-200 → blue-200
amber-600 → blue-600
```

**For Green (Growth-focused):**
```
amber-700 → green-700
amber-800 → green-800
amber-50 → green-50
amber-100 → green-100
amber-200 → green-200
amber-600 → green-600
```

**For Purple (Creative):**
```
amber-700 → purple-700
amber-800 → purple-800
amber-50 → purple-50
amber-100 → purple-100
amber-200 → purple-200
amber-600 → purple-600
```

---

## 5. Update About Section Statistics

Find this section and customize the numbers:

```jsx
<div className="flex gap-4">
  <div className="flex-1">
    <div className="text-3xl font-bold text-amber-700">6.1K</div>
    <p className="text-sm text-gray-600">Followers Managed</p>
  </div>
  <div className="flex-1">
    <div className="text-3xl font-bold text-amber-700">50+</div>
    <p className="text-sm text-gray-600">Campaigns Executed</p>
  </div>
  <div className="flex-1">
    <div className="text-3xl font-bold text-amber-700">3+</div>
    <p className="text-sm text-gray-600">Years Experience</p>
  </div>
</div>
```

---

## 6. Add a Newsletter Signup

Insert before Contact section:

```jsx
{/* Newsletter Section */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Social Media Tips</h2>
    <p className="text-gray-600 mb-8">Subscribe for weekly strategies to grow your brand.</p>
    <form className="flex gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
      />
      <button
        type="submit"
        className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>
```

---

## 7. Update Hero Tagline

Replace the h1 with your own:

```jsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
  Your Custom <span className="text-amber-700">Tagline Here</span>
</h1>
```

Examples:
- "Social Media that **Drives Results**"
- "Content **That Converts**"
- "Growing Brands Through **Storytelling**"
- "Digital **Growth** Made Simple"

---

## 8. Add Experience Entries

Add more experience items inside the experience section:

```jsx
<div className="border-l-4 border-amber-700 pl-8">
  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your Job Title</h3>
  <p className="text-amber-700 font-medium mb-4">Company Name — Industry</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="text-amber-700 mr-3">•</span>
      <span>Achievement or responsibility</span>
    </li>
    <li className="flex items-start">
      <span className="text-amber-700 mr-3">•</span>
      <span>Another key accomplishment</span>
    </li>
  </ul>
</div>
```

---

## 9. Add More Skills

Add to the skills section:

```jsx
{[
  'Your Skill 1',
  'Your Skill 2',
  'Your Skill 3',
  'Your Skill 4',
  'Your Skill 5',
  'Your Skill 6'
].map((skill, idx) => (
  <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
    <p className="text-lg font-medium text-gray-900">{skill}</p>
  </div>
))}
```

---

## 10. Update Navigation Links

If you add new sections, update the navigation:

```jsx
{['about', 'services', 'portfolio', 'experience', 'skills'].map((item) => (
  <button
    key={item}
    onClick={() => scrollToSection(item)}
    className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors capitalize"
  >
    {item}
  </button>
))}
```

Make sure each section has a matching `id`:
```jsx
<section id="portfolio" className="py-24 px-6">
  {/* Your content */}
</section>
```

---

## Tips

- **Always test after changes** — Open in a browser to verify
- **Keep it consistent** — Match the existing style/spacing
- **Mobile first** — Test on phone too
- **Backup before major changes** — Save your current code
- **Use simpler language** — Clarity beats fancy words

---

Happy customizing! 🚀
