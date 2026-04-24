# Quick Start — Get Your Portfolio Live in 5 Minutes

## The Simplest Path

### Step 1: Go to Vercel
- Visit https://vercel.com
- Sign up with GitHub (or email)

### Step 2: Create Your GitHub Repository
1. Go to https://github.com/new
2. Name it: `abdulsobur-portfolio`
3. Create the repository

### Step 3: Upload Your Code
Inside your new GitHub repo:
1. Click "Add file" → "Create new file"
2. Name it: `App.jsx`
3. Paste the portfolio component code
4. Click "Commit changes"

### Step 4: Deploy to Vercel
1. Go back to Vercel
2. Click "New Project"
3. Select your `abdulsobur-portfolio` repository
4. Click "Deploy"

**Done!** Your site is live. You'll get a URL like:
```
https://abdulsobur-portfolio.vercel.app
```

---

## Next: Customize It

### Add Your Email & Phone
In the contact section, find this line:
```
<a href="mailto:abdulsobur.content@gmail.com">
```

Replace with your actual contact info. Every time you update and push to GitHub, Vercel redeploys automatically.

### Add Your Photo
Replace the emoji placeholder with:
```jsx
<img 
  src="https://your-photo-url.jpg" 
  alt="Abdulsobur"
  className="w-full h-96 object-cover rounded-2xl"
/>
```

Or upload an image file to your repo and reference it.

---

## Common Updates

**Change the tagline:**
```jsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
  Your New Tagline Here
</h1>
```

**Update experience:**
```jsx
<h3 className="text-2xl font-semibold text-gray-900 mb-2">Your Job Title</h3>
<p className="text-amber-700 font-medium mb-4">Company Name — Industry</p>
```

**Change color scheme:**
Replace all `amber-700` with your preferred color:
- `blue-700` (Professional)
- `green-700` (Growth-focused)
- `purple-700` (Creative)
- `red-700` (Bold)

---

## That's It!

Your portfolio is now live and automatically updates whenever you edit files in your GitHub repo. Share the Vercel URL with potential clients and employers.

**Questions?** Check the full `DEPLOYMENT_GUIDE.md` for detailed instructions.
