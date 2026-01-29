/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Main palette: Red + Ravens Purple + Silver
        'kendrick': {
          red: '#DC143C',      // DAMN. album red
          black: '#0A0A0A',    // Deep black
        },
        // F1-inspired colors (Ferrari red)
        'f1': {
          ferrari: '#DC0000',   // Iconic Ferrari red
          redbull: '#0600EF',   // Red Bull racing blue
          merc: '#00D2BE',      // Mercedes petronas
        },
        // Basketball court colors
        'court': {
          wood: '#C19A6B',      // Hardwood floor
          orange: '#FF8C00',    // Basketball orange
          line: '#FFFFFF',      // Court lines
        },
        // Baltimore Ravens (Lamar Jackson)
        'ravens': {
          purple: '#5A4AB5',    // Ravens purple
          gold: '#9E7C0C',      // Ravens metallic gold
          black: '#000000',     // Ravens black
        },
        // Premium neutrals
        'premium': {
          dark: '#0B0F14',
          darker: '#060A0F',
          light: '#F8F9FA',
        },
        // Accent colors
        'silver': '#C0C0C0',    // Silver/platinum accent
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'kendrick-gradient': 'linear-gradient(135deg, #DC143C 0%, #0A0A0A 100%)',
        'f1-gradient': 'linear-gradient(135deg, #DC0000 0%, #0600EF 50%, #00D2BE 100%)',
        'court-gradient': 'linear-gradient(135deg, #FF8C00 0%, #C19A6B 100%)',
        'ravens-gradient': 'linear-gradient(135deg, #241773 0%, #9E7C0C 100%)',
        'premium-glow': 'radial-gradient(circle at center, rgba(220,20,60,0.15), transparent 70%)',
      },
      boxShadow: {
        'ferrari': '0 0 40px rgba(220,0,0,0.3)',
        'kendrick': '0 0 40px rgba(220,20,60,0.3)',
        'ravens': '0 0 40px rgba(36,23,115,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: []
};
