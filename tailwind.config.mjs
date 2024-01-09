/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        clamp: 'clamp(40px, 8vw, 65px)'
      },
      colors: {
        primary: '#1E2F48',
        accent: {
          100: '#9FEF00',
          200: '#0080ff',
          300: '#173a5e'
        },
        textColor: {
          100: '#46485D',
          200: '#b0b2c3',
          300: '#fff'
        },
        btn: {
          100: '#0080ff',
          150: '#0059B2',
          200: '#173a5e',
          250: '#132f4c',
          outlineHover: 'rgba(19, 47, 76, 0.4)'
        },
        background: {
          200: '#0A1929'
        }
      },
      screens: {
        desktop: '970px',
        tablet: '768px',
        mobile: '499px'
      },
      backgroundImage: {
        aboutMe: 'url(\'./src/assets/ivan-miyashiro.webp\')'
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-in-out',
        zoomIn: 'zoomIn 0.3s ease-in-out'
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        },
        zoomIn: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
}
