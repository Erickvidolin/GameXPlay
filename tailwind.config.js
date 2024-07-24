/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html",
            "./src/**/*.{css,js}",],
  theme: {
    extend: {
      backgroundImage: {
        '01': "url('./img/Jogo_principal.jpg')",
        'jogo01': "url('./img/Astroneer.png')",
        'jogo02': "url('./img/Forza Motor.png')",
        'jogo03': "url('./img/Subnautica BZ.png')",
        'jogo04': "url('./img/Resident evil bio.png')",
        'jogo05': "url('./img/horizon forbidden.png')",
        'jogo06': "url('./img/Farcry6.png')",
        'jogo07': "url('./img/Once Human.png')",
        'jogo08': "url('./img/assasines-valhalla.jpg')",
        'jogo09': "url('./img/State of Decay 2.png')",

        'canal01': "url('./img/maxmrm.jpg')",
        'canal02': "url('./img/patife.jpg')",
        'canal03': "url('./img/max-palaro.jpg')",
        'canal04': "url('./img/flaviomachado.jpg')",
        'canal05': "url('./img/Alan.webp')",
        'canal06': "url('./img/cap-joga.jpg')",
        'canal07': "url('./img/mrsam.jpg')",
        'canal08': "url('./img/lipaogamer.jpg')",
        'canal09': "url('./img/getaway.jpg')",
      },

      fontFamily: {
        'RacingSansOne': ['Racing Sans One', 'sans-serif'],
        'Racing': ['Racing']
      }

    },
  },
  plugins: [],
}


