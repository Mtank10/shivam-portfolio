/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#6366f1', // Indigo
            dark: '#4f46e5',
          },
          secondary: {
            DEFAULT: '#10b981', // Emerald
            dark: '#059669',
          },
          dark: {
            bg: '#0f172a', // Navy blue
            surface: '#1e293b',
            text: '#f8fafc',
          },
        },
      },
    },
    plugins: [],
  };