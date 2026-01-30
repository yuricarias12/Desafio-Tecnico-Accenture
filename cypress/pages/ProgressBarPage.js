class ProgressBarPage {

  acessarSite() {
    cy.visit("https://demoqa.com/");
  }

  selecionarOpcao(menu) {
    cy.contains(menu).click();
  }

  acessarSubmenu(submenu) {
    cy.contains(submenu).click();
  }

  iniciarProgresso() {
    cy.get("#startStopButton").click();
  }

  interromperAntesDe25() {
    cy.get("#progressBar .progress-bar")
      .should("have.attr", "aria-valuenow")
      .then((valor) => {
        const valorAtual = Number(valor);

        if (valorAtual < 25) {
          cy.get("#startStopButton").click();
          cy.log(`Progresso interrompido em: ${valorAtual}%`);
        }
      });
  }

  validarProgressoMenorOuIgual25() {
    cy.get("#progressBar .progress-bar")
      .invoke("attr", "aria-valuenow")
      .then((value) => {
        expect(Number(value)).to.be.at.most(25);
      });
  }

  retomarProgresso() {
    cy.get("#startStopButton").click();
  }

  validarResetApos100() {
    cy.get("#progressBar .progress-bar", { timeout: 25000 })
      .should("have.attr", "aria-valuenow", "100");

    cy.get("#resetButton")
      .should("be.visible")
      .click({ force: true });

    cy.get("#progressBar .progress-bar")
      .should("have.attr", "aria-valuenow", "0");
  }
}

export default new ProgressBarPage();
