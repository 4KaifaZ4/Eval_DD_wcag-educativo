// postcss.config.js
module.exports = {
  plugins: {
    // Plugin esencial para procesar Tailwind CSS
    'tailwindcss': {},
    
    // Autoprefixer: añade prefijos de navegadores automáticamente
    'autoprefixer': {
      overrideBrowserslist: [
        '>1%',            // Navegadores con >1% de uso global
        'last 4 versions', // Últimas 4 versiones de cada navegador
        'Firefox ESR',     // Versión Extended Support de Firefox
        'not ie < 11',     // No soporta Internet Explorer menor a 11
        'not dead'         // Excluye navegadores sin soporte oficial
      ]
    },
    
    // CSSNano: solo en producción para minificar el CSS
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true  // Elimina todos los comentarios
        },
        colormin: false   // IMPORTANTE: Desactiva para mantener colores accesibles
      }]
    } : false
  }
}