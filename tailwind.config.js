/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#4ecdc4',
        textColor: '#333',
        lightText: '#6c757d',
        bgColor: '#f7f7f7',
        warmGray: '#e0e0e0',
        darkBg: '#121212',
        darkCard: '#1e1e1e',
        darkText: '#e0e0e0',
        darkBorder: '#333',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        title: ['Montserrat', 'Pretendard', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
