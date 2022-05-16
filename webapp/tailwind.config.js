module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'pokemon-solid': ['PokemonSolid'],
        'pokemon-hollow': ['PokemonHollow'],
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
