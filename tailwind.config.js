module.exports = {
  darkMode: 'class', // Para modo oscuro accesible
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#4f46e5', // Indigo accesible
          600: '#4338ca',
        },
        error: '#dc2626', // Rojo AA compliant
        success: '#16a34a', // Verde AA compliant
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente accesible
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'), // Para mejor accesibilidad en contenido
  ]
}