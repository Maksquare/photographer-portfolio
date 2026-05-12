module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Cormorant Garamond"', 'serif'],
      body: ['"DM Sans"', 'sans-serif'],
      // Keep old ones as fallback if used elsewhere
      primary: ['"Cormorant Garamond"', 'serif'],
      secondary: ['"DM Sans"', 'sans-serif'],
    },
    screens: {
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        // New cinematic palette
        primary: '#080A09',          // Near-black with a green undertone (forest dark)
        'primary-mid': '#0F1410',    // Slightly lighter forest dark
        cream: '#F0EBE0',            // Warm off-white for text
        gold: '#C9A96E',             // Warm gold — main accent
        'gold-light': '#E8C88A',     // Lighter gold for hover states
        teal: '#3ECFCF',             // Electric teal for secondary highlights
        grey: '#4A4A44',             // Warm grey

        // Old aliases (so other pages don't break)
        accent_secondary: '#C9A96E', // was orange, now gold
        accent: '#0F1410',           // was light blue, now dark mid
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cinematic': 'linear-gradient(135deg, #080A09 0%, #1a1f1a 50%, #080A09 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.4' },
        },
      },
      boxShadow: {
        'gold': '0 0 40px rgba(201, 169, 110, 0.15)',
        'photo': '0 40px 80px rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 0 30px rgba(201, 169, 110, 0.05)',
      },
    },
  },
  plugins: [],
};