// Import commands.js using ES2015 syntax:
import './commands/cadastro'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });