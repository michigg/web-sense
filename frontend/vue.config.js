process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  pwa: {
    name: 'Crowd Sensing App',
    themeColor: '#09b6e5',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      short_name: 'Masterthesis',
      display: 'standalone',
      shortcuts: [
        {
          name: 'List Sensors',
          short_name: 'Sensors',
          description: 'Which Sensors are on my Device?',
          url: '/sensors',
          icons: [{ src: '/img/icons/android-chrome-192x192.png', sizes: '192x192' }]
        }
      ]
    }
  }
}
