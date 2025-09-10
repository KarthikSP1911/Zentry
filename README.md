
## 🕹️ Zentry Frontend Project

Zentry is a cinematic, interactive web experience built with **React**, **GSAP**, and **Tailwind CSS**, designed to showcase the future of gaming through a unified Play Economy. This frontend project blends immersive visuals, scroll-triggered animations, and modular components to deliver a rich metagame interface.

---
### 🚀 Demo
![Demo](zentry.gif)

### 🚀 Features

- **GSAP Scroll Animations**  
  Smooth, timeline-driven transitions using `ScrollTrigger` for immersive storytelling.

- **Modular Components**  
  Reusable UI blocks like `AnimatedTitle`, `BentoCard`, `BentoTilt`, and `Button` for scalable design.

- **Tilt Interactivity**  
  Mouse-driven 3D tilt effects for dynamic hover states.

- **Video Backgrounds**  
  Cinematic looping videos embedded in feature cards for visual depth.

- **Responsive Navigation**  
  Scroll-aware navbar with GSAP fade/slide transitions and audio toggle indicator.

- **Semantic Typography**  
  Emphasized titles using inline `<b>` tags and custom fonts for brand identity.

---

### 📁 Project Structure

```
Zentry/
├── public/
│   ├── img/               # Static images
│   ├── videos/            # Feature background videos
│   └── audio/             # Looping background audio
├── src/
│   ├── components/
│   │   ├── AnimatedTitle.jsx
│   │   ├── BentoTilt.jsx
│   │   ├── BentoCard.jsx
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── App.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

---

### 🧰 Tech Stack

| Tool/Library       | Purpose                                 |
|--------------------|------------------------------------------|
| React              | Component-based UI architecture          |
| GSAP + ScrollTrigger | Scroll animations and transitions     |
| Tailwind CSS       | Utility-first styling and theming        |
| React Icons        | Scalable vector icons                    |
| react-use          | Scroll tracking and hooks                |
| clsx               | Conditional class merging                |

---

### 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/KarthikSP1911/Zentry.git
cd Zentry

# Install dependencies
npm install

# Start development server
npm run dev
```

---

### 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### 🙌 Acknowledgments

Built with passion by [Karthik](https://github.com/KarthikSP1911), exploring the intersection of immersive UI, modular architecture, and semantic theming.

---

Would you like me to help generate badges, add deployment instructions, or write a short project pitch for your GitHub profile?
