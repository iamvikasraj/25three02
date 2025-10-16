# SuperCard Experiment - React Three Fiber

A 3D credit card showcase built with React Three Fiber, featuring animated Super Money and Black Card designs with realistic materials and lighting.

## Features

- **3D Credit Card Visualization**: Interactive 3D models of credit cards with realistic textures
- **Smooth Animations**: Custom easing animations with subtle overshoot effects
- **Responsive Design**: Adaptive camera settings for mobile, tablet, and desktop
- **Interactive Controls**: Orbit controls for exploring the 3D scene
- **High Performance**: Optimized rendering with performance settings

## Technologies Used

- **React 19**: Latest React with modern features
- **React Three Fiber**: React renderer for Three.js
- **Three.js**: 3D graphics library
- **@react-three/drei**: Useful helpers for React Three Fiber
- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 25three02
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Scene.tsx          # Main 3D scene component
│   ├── CreditCard.tsx     # 3D credit card component
│   └── CardDetails.tsx    # Card detail elements
├── App.tsx                # Main app component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## Migration from Next.js

This project was successfully converted from Next.js to a pure React Three Fiber application:

### Changes Made:
- Replaced Next.js with Vite for faster development and building
- Removed Next.js specific features (SSR, routing, etc.)
- Updated build configuration for static deployment
- Maintained all 3D functionality and animations
- Preserved responsive design and performance optimizations

### Benefits:
- Faster development server startup
- Smaller bundle size
- Simpler deployment (static files)
- Better development experience with Vite
- No unnecessary Next.js overhead for a 3D-only application

## Deployment

The application builds to static files in the `dist/` directory and can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository and deploy
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any CDN**: Upload the `dist/` contents

## Performance Notes

- The application uses performance optimizations including:
  - Frame rate limiting for animations
  - Optimized texture loading
  - Responsive camera settings
  - Efficient Three.js rendering settings

## Browser Support

- Modern browsers with WebGL support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is for experimental purposes.