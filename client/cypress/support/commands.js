Cypress.Commands.add('getByTestId', (testId) => cy.get(`[data-testid=${testId}]`));
Cypress.Commands.add('getByInputName', (inputName) => cy.get(`input[name=${inputName}]`));
