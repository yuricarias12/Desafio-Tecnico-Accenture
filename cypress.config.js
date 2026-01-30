const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.feature",
    excludeSpecPattern: "*.js",
    blockHosts: ["*google-analytics.com", "*googlesyndication.com", "*doubleclick.net", "*adservice.google.com"],
  },
});
