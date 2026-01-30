import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que acesso a página inicial do DemoQA', () => {
  cy.visit('https://demoqa.com');
});

Given('seleciono a opção {string}', (opcao) => {
  cy.contains('h5', opcao).click();
});

Given('acesso o submenu {string}', (submenu) => {
  cy.contains('span', submenu).click();
});

When('clico no botão {string}', (botao) => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });

  cy.contains('button', botao).click();
});

Then('a mensagem {string} deve ser exibida', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});
