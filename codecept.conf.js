/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: false, //Alterar esse campo para false, executa os testes em modo headless, ou seja, não abre a execução no navegador
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'automacao-teste'
}