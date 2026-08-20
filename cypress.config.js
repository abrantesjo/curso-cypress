const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uzqfmz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // video: true, // grava videos dos testes com npx cypress run
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', //diretorio
      overwrite: false, //nao vai sobrescrever
      html: false, //gera um arquivo em html
      json: true, //gera em json
      timestamp: "mmddyyyy_HHMMss" //formato de data

      //outros tipos de config:
      // “charts”: dá a possibilidade de gerar gráficos quando unificamos os resultados.
      // “code”: mostra exatamente qual o código foi executado tanto na falha quanto no sucesso.
      // “reportTitle”: o título a ser apresentado no relatório.
    }
  },
});
