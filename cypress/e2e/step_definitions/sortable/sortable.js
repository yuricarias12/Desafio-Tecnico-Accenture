import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site DemoQA", () => {
  cy.visit("https://demoqa.com/");
});

Given("acesso o menu Interactions", () => {
  cy.contains("Interactions").click();
});

Given("acesso o submenu Sortable", () => {
  cy.contains("Sortable").click();
});

When("ordeno os elementos de forma decrescente", () => {
  const ordemDecrescente = ["Six", "Five", "Four", "Three", "Two", "One"];

  ordemDecrescente.forEach((texto, index) => {
    cy.get(".vertical-list-container .list-group-item")
      .contains(texto)
      .trigger("mousedown", { which: 1, force: true });

    cy.get(".vertical-list-container .list-group-item")
      .eq(index)
      .trigger("mousemove", { force: true })
      .trigger("mouseup", { force: true });
  });
});

Then("os elementos devem estar em ordem decrescente", () => {
  const ordemEsperada = ["Six", "Five", "Four", "Three", "Two", "One"];

  cy.get(".vertical-list-container .list-group-item")
    .should("have.length", ordemEsperada.length)
    .each(($el, index) => {
      cy.wrap($el).should("contain.text", ordemEsperada[index]);
    });
});
