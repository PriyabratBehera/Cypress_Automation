Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('bootstrap is not defined')) {
      return false;
    }
    return true; // Let other exceptions fail the test
  });