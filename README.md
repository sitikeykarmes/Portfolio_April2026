# Kartikeyan Kumar - Developer Portfolio 🚀

A modern, high-performance developer portfolio built with React, Vite, and Tailwind CSS v4. It features a sleek dark-mode aesthetic, interactive canvas animations, and a fully responsive design tailored to highlight professional projects and engineering skills.

## ✨ Features

- **Dynamic Interactive Backgrounds**: Custom WebGL/Canvas animations (Silk waves, Shape grids, Noise grain) that react to scroll and mouse movement without blocking the main thread.
- **Glassmorphism UI**: Beautiful, frosted-glass navigation pill and overlay elements.
- **Responsive Layout**: Carefully tuned for desktop, tablet, and mobile devices, including a smooth mobile hamburger menu.
- **Data-Driven Architecture**: Content is completely modularized in `src/constants/index.js` for easy updates.
- **Modern Tech Stack**: Built with the latest tools ensuring lightning-fast load times and smooth framerates.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Graphics**: Canvas APIs, CSS Transitions
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) (Ready)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sitikeykarmes/Portfolio_April2026.git
   cd Portfolio_April2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, svgs)
├── components/     # Reusable UI components (NavBar, Canvas Effects, etc.)
├── constants/      # Centralized data (Projects, Links, Text)
├── sections/       # Major page sections (Hero, About, Projects, Skills, Contact)
├── App.jsx         # Main application container
└── index.css       # Global styles and Tailwind imports
```

## 🎨 Customization

To update the portfolio with your own details:
1. Open `src/constants/index.js`.
2. Update the `PERSONAL`, `SOCIAL`, and `PROJECTS` arrays with your information.
3. Replace the `resume.pdf` in the `public` folder with your own.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
