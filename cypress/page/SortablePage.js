class SortablePage {
  acessarSite() {
    cy.visit("https://demoqa.com/");
  }

  acessarMenuInteractions() {
    cy.contains("Interactions").click();
  }

  acessarSubmenuSortable() {
    cy.contains("Sortable").click();
  }

  ordenarElementosDecrescente() {
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
  }

  validarOrdemDecrescente() {
    const ordemEsperada = ["Six", "Five", "Four", "Three", "Two", "One"];

    cy.get(".vertical-list-container .list-group-item")
      .should("have.length", ordemEsperada.length)
      .each(($el, index) => {
        cy.wrap($el).should("contain.text", ordemEsperada[index]);
      });
  }
}

export default new SortablePage();
