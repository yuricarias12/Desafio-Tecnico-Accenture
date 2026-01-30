class PracticeFormPage {

  acessarPaginaInicial() {
    cy.visit('https://demoqa.com');
  }

  selecionarOpcao(opcao) {
    cy.contains('h5', opcao).click();
  }

  acessarSubmenu(submenu) {
    cy.contains('span', submenu).click();
  }

  preencherFormularioComDadosAleatorios() {
    const randomNumber = Math.floor(Math.random() * 10000);

    cy.get('#firstName').type(`Nome${randomNumber}`);
    cy.get('#lastName').type(`Sobrenome${randomNumber}`);
    cy.get('#userEmail').type(`email${randomNumber}@teste.com`);

    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(`9${randomNumber}`.substring(0, 10));

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__day--015').click();

    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('#currentAddress')
      .type('Endereço gerado automaticamente para teste');
  }

  realizarUploadArquivoValido() {
    cy.get('#uploadPicture')
      .selectFile('cypress/fixtures/arquivo-teste.txt');
  }

  submeterFormulario() {
    cy.get('#submit').click();
  }

  validarPopupConfirmacao() {
    cy.get('.modal-content').should('be.visible');
    cy.contains('Thanks for submitting the form').should('be.visible');
  }

  fecharPopupConfirmacao() {
    cy.get('#closeLargeModal').click({ force: true });
    cy.get('.modal-content').should('not.exist');
  }
}

export default new PracticeFormPage();
