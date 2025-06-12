# Modern Portfolio Template

A modern, responsive portfolio website template built with Next.js 14 and Tailwind CSS. This template provides a beautiful and interactive way to showcase your work, skills, and professional journey.

![Portfolio Preview](public/preview.png)

## 🚀 Features

- ✨ Modern and responsive design
- 🌙 Dark/Light mode support
- 🎨 Beautiful UI components using Radix UI
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📊 Interactive data visualization with Recharts
- 🎯 SEO optimized
- 📧 Contact form with email integration
- 🔍 Easy customization and theming

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management

## 🏗️ Project Structure

```
portfolio-template/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── data/            # Static data and content
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── public/          # Static assets
└── styles/          # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure your personal information:
   - Update the content in `data/` directory
   - Modify the theme colors in `styles/globals.css`
   - Replace images in `public/` directory
   - Update metadata in `app/layout.tsx`

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Theme Colors
Edit the color scheme in `styles/globals.css` to match your personal brand.

### Content
Update the following files to personalize your portfolio:
- `data/projects.ts` - Add your projects
- `data/skills.ts` - List your skills
- `data/experience.ts` - Add your work experience
- `data/education.ts` - Add your education details

### Images
Replace the following images in the `public` directory:
- `profile.jpg` - Your profile picture
- `preview.png` - Portfolio preview image
- Project screenshots in `public/projects/`



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs) 