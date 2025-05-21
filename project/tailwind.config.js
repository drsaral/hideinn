/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF2ED',
          100: '#FCE5DB',
          200: '#F9CBB7',
          300: '#F5B193',
          400: '#F2976F',
          500: '#EF7D4B',
          600: '#E94E1B', // Main orange
          700: '#BA3E15',
          800: '#8B2F10',
          900: '#5C1F0A',
        },
        secondary: {
          50: '#E6EBF2',
          100: '#CDD7E4',
          200: '#9BAFD0',
          300: '#6887BB',
          400: '#365FA6',
          500: '#1A4A92',
          600: '#0F3460', // Main blue
          700: '#0C2A4D',
          800: '#091F3A',
          900: '#061527',
        },
        accent: {
          50: '#E7F5FB',
          100: '#D0EBF7',
          200: '#A1D6EF',
          300: '#72C2E7',
          400: '#43ADDF',
          500: '#1E99D6',
          600: '#187AAB',
          700: '#125C81',
          800: '#0C3D56',
          900: '#061F2B',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};