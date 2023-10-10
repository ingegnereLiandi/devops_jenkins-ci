const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:"http://lojaebac.ebaconline.art.br/",
    projectId: "eousma",
    integrationFolder: "cypress/e2e",
    

    setupNodeEvents(on, config) {
      
    },
  },
});
