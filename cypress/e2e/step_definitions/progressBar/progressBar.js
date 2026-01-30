import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site DemoQA", () => {
  cy.visit("https://demoqa.com/");
});

Given("seleciono a opção {string} na página inicial", (menu) => {
  cy.contains(menu).click();
});

Given("acesso o submenu {string}", (submenu) => {
  cy.contains(submenu).click();
});

When("inicio o progresso da barra", () => {
  cy.get("#startStopButton").click();
});

When("interrompo o progresso antes de 25%", () => {
  cy.get("#progressBar .progress-bar")
    .should("have.attr", "aria-valuenow") // Aqui o Cypress já pegou o texto
    .then((valorNoAtributo) => {
      // valorNoAtributo já é a string "10", "15", etc.
      const valorAtual = Number(valorNoAtributo);

      if (valorAtual < 25) {
        cy.get("#startStopButton").click();
        cy.log(`Progresso interrompido em: ${valorAtual}%`);
      }
    });
});

Then("o valor da progress bar deve ser menor ou igual a 25%", () => {
  // Ajustado o seletor aqui também
  cy.get("#progressBar .progress-bar")
    .invoke("attr", "aria-valuenow")
    .then((value) => {
      expect(Number(value)).to.be.at.most(25);
    });
});

When("retomo o progresso da barra", () => {
  cy.get("#startStopButton").click();
});

Then("ao atingir 100% a barra deve ser resetada", () => {

  cy.get("#progressBar .progress-bar", { timeout: 25000 })
    .should("have.attr", "aria-valuenow", "100");

  cy.get("#resetButton")
    .should('be.visible')
    .click({ force: true });

  cy.get("#progressBar .progress-bar")
    .should("have.attr", "aria-valuenow", "0");
});
