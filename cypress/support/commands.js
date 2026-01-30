// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("findAndDeleteUser", (email) => {
  const searchAndDelete = () => {
    cy.get("body").then(($body) => {
      if ($body.text().includes(email)) {
        cy.contains(email)
          .parents(".rt-tr-group")
          .find('[title="Delete"]')
          .click();

        cy.contains(email).should("not.exist");
      } else {
        cy.get(".-next").then(($next) => {
          if ($next.is(":disabled")) {
            throw new Error(`Usuário não encontrado na tabela: ${email}`);
          } else {
            cy.wrap($next).click();
            searchAndDelete();
          }
        });
      }
    });
  };

  searchAndDelete();
});
