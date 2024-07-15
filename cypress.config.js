const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 10000, // Increase default command timeout to 10 seconds
  },
});
