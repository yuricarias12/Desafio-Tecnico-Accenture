import BasePage from './BasePage'

class PracticeFormPage extends BasePage {
  elements = {
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',
    gender: '#gender-radio-1',
    mobile: '#userNumber',
    submit: '#submit',
    modal: '.modal-content'
  }

  fillForm(user) {
    this.type(this.elements.firstName, user.firstName)
    this.type(this.elements.lastName, user.lastName)
    this.type(this.elements.email, user.email)
    cy.get(this.elements.gender).check({ force: true })
    this.type(this.elements.mobile, user.mobile)
  }

  uploadFile() {
    cy.get('#uploadPicture')
      .selectFile('cypress/uploads/arquivo.txt', { force: true })
  }

  submitForm() {
    this.click(this.elements.submit)
  }

  validateModal() {
    cy.get(this.elements.modal).should('be.visible')
  }
}

export default new PracticeFormPage()
