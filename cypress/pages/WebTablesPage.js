class WebTablesPage {

  constructor() {
    this.createdEmails = [];
  }

  resetarEstado() {
    cy.viewport(1920, 1080);
    this.createdEmails = [];
  }

  acessarSite() {
    cy.visit("https://demoqa.com/");
  }

  selecionarOpcao(menu) {
    cy.contains(menu).click();
  }

  acessarSubmenu(submenu) {
    cy.contains(submenu).click();
  }

  criarNovoRegistroValido() {
    const email = `user${Date.now()}@test.com`;
    this.createdEmails.push(email);

    cy.get("#addNewRecordButton").click();

    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type(email);
    cy.get("#age").type("30");
    cy.get("#salary").type("5000");
    cy.get("#department").type("QA");

    cy.get("#submit").click();
  }

  editarRegistroCriado() {
    const email = this.createdEmails[0];

    cy.contains(email)
      .parents(".rt-tr-group")
      .find('[title="Edit"]')
      .click();

    cy.get("#department").clear().type("Automation QA");
    cy.get("#submit").click();
  }

  removerRegistro(email) {
    cy.contains('.rt-tr-group', email)
      .find('[title="Delete"]')
      .should("be.visible")
      .click({ force: true });

    cy.contains(email).should("not.exist");
  }

  criarRegistrosViaTabela(dataTable) {
    dataTable.hashes().forEach((user) => {
      cy.get("#addNewRecordButton").click();

      cy.get("#firstName").should("be.visible").clear().type(user.firstName);
      cy.get("#lastName").clear().type(user.lastName);
      cy.get("#userEmail").clear().type(user.email);
      cy.get("#age").clear().type(user.age);
      cy.get("#salary").clear().type(user.salary);
      cy.get("#department").clear().type(user.department);

      cy.get("#submit").click();

      cy.get('select[aria-label="rows per page"]')
        .select("50", { force: true });

      cy.contains(user.email).should("exist");

      this.createdEmails.push(user.email);
    });
  }

  removerTodosOsRegistrosCriados() {
    [...this.createdEmails].forEach((email) => {
      cy.log(`Tentando remover: ${email}`);
      this.removerRegistro(email);
    });
  }
}

export default new WebTablesPage();
