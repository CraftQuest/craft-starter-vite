// module exports
module.exports = {
  content: [
    '../cms/templates/**/*.{twig,html}',
    '../src/vue/**/*.{vue,html}',
    '../src/css/components/**/*.css',
    '../src/css/app.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F2D',
        secondary: '#97BC62FF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}