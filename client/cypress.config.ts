import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 1000,
  viewportWidth: 1280,
  screenshotOnRunFailure: false,
  video: false,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  env: {
    mobileViewportWidthBreakpoint: 414,
    coverage: true,
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
