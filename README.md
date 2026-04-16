# AI Portfolio — Pramod Jadhav

A modern, interactive portfolio website showcasing data analysis and AI projects from a **Security Operations analyst transitioning into data science**.

**Live Demo:** [portfolio-eta-ashen-pxpaf816ec.vercel.app](https://portfolio-eta-ashen-pxpaf816ec.vercel.app/)

---

## 📋 About

This portfolio presents:
- **12+ years of Security Operations Center (SOC) expertise**
- **Real projects** in Python, data analysis, and machine learning
- **Interactive demos** of anomaly detection systems
- **AI-powered chatbot** for quick Q&A
- **Clean, modern UI** built with React

The portfolio is designed for potential employers to quickly understand:
1. Your background (SOC → Data Analyst transition)
2. Your technical projects with impact metrics
3. Your learning roadmap and growth mindset
4. How to contact you

---

## 🛠️ Tech Stack

- **Frontend:** React 18+
- **Styling:** CSS3 (custom, responsive design)
- **Build Tool:** Vite
- **Deployment:** Vercel
- **Analytics/Logic:** JavaScript (analyzer.js for demo simulations)

---

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx         # Landing section with intro
│   ├── Projects.jsx     # Showcase of 3 main projects
│   ├── Chatbot.jsx      # AI chatbot interaction
│   ├── Contact.jsx      # Contact information
│   └── ResumeAnalyzer.jsx # Resume analysis tool
│
├── utils/
│   └── analyzer.js      # Core logic for anomaly detection demos
│
├── App.jsx              # Main app component
├── index.html           # HTML entry point
├── index.css            # Global styles
└── main.jsx             # React DOM render

public/
├── Resume.pdf           # Your resume
├── package.json         # Dependencies
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ ([download](https://nodejs.org/))
- **npm** or **yarn**

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/pramodj551-oss/ai-portfolio.git
   cd ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output goes to the `dist/` folder.

---

## 🎯 Key Features

### 1. **Hero Section**
- Concise introduction: Data Analyst + AI SOC Analyst
- Key metrics at a glance (12+ years SOC, 3 ML projects, etc.)
- Call-to-action buttons (View Projects, Chat)

### 2. **Projects Showcase**
Three real projects with problem → approach → impact framework:

| Project | Tech | Impact |
|---------|------|--------|
| **Security Log Anomaly Detection** | Python, Pandas, Scikit-learn, Isolation Forest | 40% reduction in manual review |
| **Log Analysis & Automation Tool** | Python, Pandas, CSV processing | 80% faster report generation |
| **Incident Response Dashboard** | Python, Matplotlib, Pandas | Real-time KPI tracking |

Each links to the GitHub repo for deeper exploration.

### 3. **Interactive Anomaly Detector**
- Live simulation of login anomaly detection
- Adjustable controls: login attempts, different IPs, off-hours login
- Visual feedback showing threat levels
- **Uses:** `analyzer.js` to simulate threat scoring

### 4. **AI Chatbot**
- Q&A about your background, projects, and experience
- Pre-filled questions for quick interaction
- Extensible for adding more conversational flows

### 5. **Resume Analyzer** (Bonus)
- Tool for analyzing resume quality or structure
- Showcases your data analysis skills

### 6. **Contact Section**
- Direct email link
- GitHub profile
- LinkedIn profile
- PDF resume download

---

## 🔧 Customization

### Update Your Information

**Hero Section** (`src/components/Hero.jsx`)
```javascript
// Update your name, title, location
const name = "Your Name";
const title = "Your Title";
const location = "Your Location";
```

**Projects** (`src/components/Projects.jsx`)
- Add/remove projects
- Update GitHub links
- Modify impact metrics and tech stack

**Chatbot** (`src/components/Chatbot.jsx`)
- Add new Q&A pairs
- Customize responses
- Integrate with real backend API (e.g., Claude API)

**Resume** (`public/Resume.pdf`)
- Replace with your updated resume
- Ensure the file is named `Resume.pdf`

**Styles** (`src/index.css`)
- Change colors, fonts, spacing
- Customize responsive breakpoints

---

## 📊 How Anomaly Detector Works

The demo in the **Live Demo** section simulates a security log analyzer:

```javascript
// From utils/analyzer.js (simplified)
const detectThreat = (loginAttempts, differentIPs, offHoursLogin) => {
  let threatScore = 0;
  
  if (loginAttempts > 5) threatScore += 30;
  if (differentIPs > 3) threatScore += 40;
  if (offHoursLogin) threatScore += 30;
  
  return threatScore; // 0-100
};
```

**Real use case:** In your actual projects, replace demo logic with:
- Real anomaly detection (Isolation Forest, Autoencoders)
- Actual log parsing and feature engineering
- Statistical methods (Z-score, IQR)

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com/)
3. Vercel auto-deploys on every push to `main`
4. Your site goes live at: `<project-name>.vercel.app`

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 📈 Next Steps to Level Up

1. **Add Real Projects**
   - Create separate repos for each of your 3 projects
   - Include data, trained models, and detailed documentation
   - Pin them on your GitHub profile

2. **Enhance Analyzer Logic**
   - Replace demo logic with real anomaly detection code
   - Show actual ML model (saved .pkl or .h5 file)
   - Add visualizations (charts, confusion matrix)

3. **Backend Integration**
   - Connect chatbot to Claude API or other LLM
   - Add form submissions to a backend (Firebase, Vercel Functions)
   - Build an actual log analyzer API

4. **Blog Section**
   - Add technical blog posts about your projects
   - Document your learning journey (Python → ML)
   - Share insights from security domain

5. **Performance Optimization**
   - Code split components with React.lazy()
   - Optimize images and assets
   - Monitor performance with Lighthouse

6. **SEO & Analytics**
   - Add meta tags and structured data
   - Integrate Google Analytics or Vercel Analytics
   - Improve search rankings for "data analyst" + "security"

---

## 💡 Tips for Employers

When sharing this portfolio, highlight:
- ✅ **Real problems solved** — Not just theoretical projects
- ✅ **Measurable impact** — 40% reduction, 80% faster, etc.
- ✅ **Honest about skill level** — Beginner in Python but progressing fast
- ✅ **Domain expertise** — 12+ years of security knowledge
- ✅ **Growth mindset** — Clear learning roadmap and passion

---

## 🤝 Contributing

This is your personal portfolio, but feel free to:
- Improve UI/UX
- Add new projects
- Enhance the chatbot
- Fix bugs or improve performance

---

## 📄 License

This portfolio is open source under the **MIT License**. Feel free to fork and customize for your own use.

---

## 📞 Contact

- **Email:** pramodj551@gmail.com
- **LinkedIn:** [linkedin.com/in/pramod-jadhav](https://linkedin.com/in/pramod-jadhav)
- **GitHub:** [github.com/pramodj551-oss](https://github.com/pramodj551-oss)

---

## 🙏 Acknowledgments

Built with React, Vite, and deployed on Vercel. Designed to showcase a SOC analyst's transition into data science and AI.

**Last Updated:** April 2026

---

**Questions or feedback?** Reach out via email or LinkedIn. I'm open to collaboration and always learning! 🚀
