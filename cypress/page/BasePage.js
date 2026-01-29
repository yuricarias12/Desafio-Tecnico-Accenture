export default class BasePage {
  visit(path) {
    cy.visit(path)
  }

  click(element) {
    cy.get(element).click()
  }

  type(element, text) {
    cy.get(element).type(text)
  }
}
