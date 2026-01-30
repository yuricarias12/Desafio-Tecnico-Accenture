import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let createdEmails = [];

beforeEach(() => {
  cy.viewport(1920, 1080);
  createdEmails = [];
});

Given("que acesso o site DemoQA", () => {
  cy.visit("https://demoqa.com/");
});

Given("seleciono a opção {string} na página inicial", (menu) => {
  cy.contains(menu).click();
});

Given("acesso o submenu {string}", (submenu) => {
  cy.contains(submenu).click();
});

When("crio um novo registro válido", () => {
  const email = `user${Date.now()}@test.com`;
  createdEmails.push(email);

  cy.get("#addNewRecordButton").click();

  cy.get("#firstName").type("John");
  cy.get("#lastName").type("Doe");
  cy.get("#userEmail").type(email);
  cy.get("#age").type("30");
  cy.get("#salary").type("5000");
  cy.get("#department").type("QA");

  cy.get("#submit").click();
});

When("edito o registro criado", () => {
  cy.contains(createdEmails[0])
    .parents(".rt-tr-group")
    .find('[title="Edit"]')
    .click();

  cy.get("#department").clear().type("Automation QA");
  cy.get("#submit").click();
});

Then("o registro deve ser removido com sucesso", () => {
  cy.contains(createdEmails[0])
    .parents(".rt-tr-group")
    .find('[title="Delete"]')
    .click();

  cy.contains(createdEmails[0]).should("not.exist");
});

When("crio os seguintes registros:", (dataTable) => {
  cy.wrap(dataTable.hashes()).each((user) => {
    cy.get("#addNewRecordButton").click();

    cy.get("#firstName").should("be.visible").clear().type(user.firstName);
    cy.get("#lastName").clear().type(user.lastName);
    cy.get("#userEmail").clear().type(user.email);
    cy.get("#age").clear().type(user.age);
    cy.get("#salary").clear().type(user.salary);
    cy.get("#department").clear().type(user.department);

    cy.get("#submit").click();

    cy.get('select[aria-label="rows per page"]')
     .select('50', { force: true });

    cy.contains(user.email).should("exist");

    createdEmails.push(user.email);
  });
});

Then("removo todos os registros criados", () => {

  const emailsParaRemover = [...createdEmails];

  emailsParaRemover.forEach((email) => {
    cy.log(`Tentando remover: ${email}`);

    cy.contains('.rt-tr-group', email)
      .find('[title="Delete"]')
      .should('be.visible')
      .click({ force: true });

    cy.contains(email).should("not.exist");
  });
});
