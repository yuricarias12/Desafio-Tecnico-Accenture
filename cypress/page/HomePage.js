class HomePage {

  acessarHome() {
    cy.visit('https://demoqa.com');
  }

  selecionarCard(nomeCard) {
    cy.contains('h5', nomeCard).click();
  }
}

export default new HomePage();
