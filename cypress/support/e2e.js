// This is automatically loaded before test execution
import './commands';

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing tests due to errors in the app
  return false;
});