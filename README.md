# SuperCard Experiment

A stunning 3D credit card showcase built with React Three Fiber, featuring animated Super Money and Black Card designs with realistic materials, physics-based lighting, and smooth animations.

## 🌟 Features

### 3D Visualization
- **Interactive 3D Credit Cards**: Beautifully rendered credit card models with realistic textures loaded from PNG/WebP images
- **Dual Card Animation**: Two cards (Blue Super Money Card and Black Card) animate simultaneously from opposite directions with custom easing
- **Realistic Materials**: Metallic finish with proper roughness and lighting for authentic card appearance
- **Double-Sided Rendering**: Cards are visible from all angles

### Animation & Interactivity
- **Smooth Entry Animations**: Cards slide in from top and bottom with subtle overshoot easing
- **Floating Animation**: Gentle continuous rotation for a dynamic feel
- **Orbit Controls**: Full 360° rotation, zoom, and exploration with touch/mouse support
- **Responsive Camera**: Automatically adjusts field of view and position for mobile, tablet, and desktop
- **Damped Movement**: Smooth, natural camera controls with damping

### Performance & Optimization
- **High Performance Rendering**: Optimized Three.js settings with frame rate limiting
- **Texture Optimization**: WebP support with automatic PNG fallback
- **Adaptive Quality**: Dynamic pixel ratio based on device capabilities
- **Efficient Updates**: Frame-skipping for smooth 60fps performance
- **Memory Management**: Proper texture disposal and cleanup

### Responsive Design
- **Mobile Optimized**: Touch controls with adjusted sensitivity and camera positioning
- **Tablet Support**: Medium-range camera settings for optimal viewing
- **Desktop Excellence**: Full orbit controls with high-quality rendering
- **Adaptive Layouts**: Fullscreen canvas that works on all screen sizes

## 🛠 Technologies Used

### Core Framework
- **React 19** - Latest React with modern features and concurrent rendering
- **TypeScript** - Type-safe development with full IntelliSense support
- **Vite** - Lightning-fast build tool and development server with HMR

### 3D Graphics
- **Three.js 0.174.0** - Industry-standard 3D graphics library
- **React Three Fiber 9.0.4** - React renderer for Three.js with declarative API
- **@react-three/drei 10.0.4** - Essential helpers (OrbitControls, Environment, Text)
- **@react-three/postprocessing 3.0.4** - Post-processing effects library

### Styling & Build
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **ESLint** - Code quality and consistency

### Development Tools
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Netlify CLI** - Deployment and preview tools
- **Sharp** - High-performance image optimization

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js) or **yarn**
- Modern browser with WebGL 2.0 support

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd 25three02
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (Vite's default port)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
25three02/
├── public/                 # Static assets
│   ├── Blue Card.png      # Super Money card texture
│   ├── Blue Card.webp     # Optimized WebP version
│   ├── Black Card.png     # Black card texture
│   └── Black Card.webp    # Optimized WebP version
├── src/
│   ├── components/
│   │   ├── Scene.tsx           # Main 3D scene with lighting and camera
│   │   ├── CreditCard.tsx      # Credit card 3D model component
│   │   └── CardDetails.tsx     # Card detail elements (text, chips, logos)
│   ├── App.tsx                 # Root application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── index.html                  # HTML template
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json               # Dependencies and scripts
├── DEPLOYMENT.md              # Detailed deployment guide
└── README.md                  # This file
```

## 🎨 Card Variants

The project supports multiple card designs:

### Super Money Card (Blue)
- **Color**: Vibrant blue gradient
- **Features**: Golden chip, RuPay logo, QR code, contactless payment
- **Material**: High metalness (0.8) with low roughness (0.2)

### Black Card
- **Color**: Elegant black with subtle gradients
- **Features**: Premium design with vertical SUPER text
- **Material**: Metallic finish with realistic reflections

## 🔧 Key Technical Details

### Animation System
- **Custom Easing**: Combines ease-out with subtle overshoot for natural motion
- **Duration**: 1.5 second animation with smooth acceleration
- **Stagger**: Cards can be delayed independently for sequential animations
- **Physics-based**: Uses time-based animation for consistent cross-device performance

### Camera System
- **Responsive Settings**: 
  - Mobile: FOV 35°, distance 10 units
  - Tablet: FOV 40°, distance 8 units
  - Desktop: FOV 45°, distance 7 units
- **Constraints**: Limited polar angle (60° to 120°) to prevent upside-down views
- **Auto-updates**: Listens to window resize events

### Texture Loading
- **Progressive Enhancement**: Tries WebP first, falls back to PNG
- **Optimized Settings**: 
  - Clamp to edge wrapping
  - Linear filtering for crisp textures
  - No mipmaps for performance
- **Aspect Ratio**: Maintains 504x705 pixel ratio (2.1:2.94 in 3D space)

### Performance Optimizations
- **Frame Skipping**: Floating animation updates every 2 frames
- **DPR Limiting**: Max device pixel ratio of 2 for high-DPI displays
- **Power Preference**: Uses "high-performance" WebGL context
- **Conditional Updates**: Only animates during active animation periods

## 🌐 Deployment

The application builds to static files and can be deployed to any static hosting service.

### Quick Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   # Using Netlify CLI
   netlify deploy --prod --dir=dist
   
   # Or drag and drop the dist/ folder to netlify.com
   ```

### Supported Platforms
- **Netlify** (recommended) - See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide
- **Vercel** - Zero-config deployment
- **GitHub Pages** - Static hosting with GitHub Actions
- **CloudFlare Pages** - Fast global CDN
- **AWS S3 + CloudFront** - Enterprise-grade hosting

### Deployment Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18 or higher

## 🎯 Browser Support

### Minimum Requirements
- WebGL 2.0 support
- ES6+ JavaScript support
- Hardware acceleration enabled

### Tested Browsers
| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 60+ | ✅ Full support |
| Firefox | 55+ | ✅ Full support |
| Safari | 12+ | ✅ Full support |
| Edge | 79+ | ✅ Full support |
| Mobile Safari | iOS 12+ | ✅ Touch optimized |
| Chrome Mobile | Android 7+ | ✅ Touch optimized |

### Known Limitations
- Older browsers without WebGL 2.0 will not work
- Very low-end mobile devices may experience reduced frame rates
- Internet Explorer is not supported

## 🏗 Migration from Next.js

This project was successfully converted from Next.js to a pure React + Vite application.

### Why the Migration?
- **Simpler Stack**: No need for SSR/SSG for a 3D-only application
- **Faster Development**: Vite's HMR is significantly faster than Next.js
- **Smaller Bundle**: Reduced bundle size by ~40% without Next.js overhead
- **Easier Deployment**: Static files deploy anywhere without server requirements
- **Better DX**: Instant server startup and lightning-fast updates

### Changes Made
- ✅ Replaced Next.js with Vite
- ✅ Removed `next/image` and Next.js specific APIs
- ✅ Updated build configuration for static output
- ✅ Maintained all 3D functionality and animations
- ✅ Preserved responsive design and performance optimizations
- ✅ Kept existing component structure

## 🎓 Learning Resources

### React Three Fiber
- [Official Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Fundamentals](https://threejs.org/manual/)
- [Drei Helper Components](https://github.com/pmndrs/drei)

### Three.js
- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)

### Performance
- [React Three Fiber Performance](https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

## 🐛 Troubleshooting

### Common Issues

**Cards don't appear:**
- Check browser console for texture loading errors
- Ensure `Blue Card.png` and `Black Card.png` are in the `public/` folder
- Verify WebGL 2.0 support in your browser

**Poor performance:**
- Reduce device pixel ratio in `Scene.tsx` (change `dpr={[1, 2]}` to `dpr={[1, 1]}`)
- Disable post-processing effects
- Close other GPU-intensive applications

**Build fails:**
- Ensure Node.js version 18 or higher
- Delete `node_modules/` and `package-lock.json`, then run `npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

**Texture appears distorted:**
- Check image aspect ratio matches code (504x705)
- Verify texture wrapping settings in `CreditCard.tsx`
- Try regenerating WebP files with `optimize-images.js`

## 🤝 Contributing

This is an experimental project. Feel free to:
- Report bugs via issues
- Suggest new features
- Submit pull requests
- Fork and create your own variants

## 📄 License

This project is for experimental and educational purposes.

## 🎉 Acknowledgments

- Built with [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- Powered by [Three.js](https://threejs.org/)
- Deployed on [Netlify](https://www.netlify.com/)

---

**Made with ❤️ using React Three Fiber**
