const { defineConfig } = require("cypress");
const envConfig = require("./cypress/config/env");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    supportFile: false,
    baseUrl: envConfig.baseUrl,
    env: envConfig,
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}", 
    supportFile: "cypress/support/e2e.js",
  },
});