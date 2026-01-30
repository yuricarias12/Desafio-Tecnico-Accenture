class BrowserWindowsPage {

  acessarPaginaInicial() {
    cy.visit('https://demoqa.com');
  }

  selecionarOpcao(opcao) {
    cy.contains('h5', opcao).click();
  }

  acessarSubmenu(submenu) {
    cy.contains('span', submenu).click();
  }

  clicarBotao(botao) {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });

    cy.contains('button', botao).click();
  }

  validarMensagemExibida(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

export default new BrowserWindowsPage();
