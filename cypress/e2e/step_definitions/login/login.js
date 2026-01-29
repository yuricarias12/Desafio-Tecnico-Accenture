import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const user = {
  firstName: 'Yuri',
  lastName: 'Carias',
  email: 'yuri@email.com',
  mobile: '9999999999'
}

Given('que acesso o formulário Practice Form', () => {
  cy.visit('https://demoqa.com/');
  cy.contains('h5', 'Alerts, Frame & Windows').click();
})

When('preencho todos os campos obrigatórios', () => {
   cy.contains('span', 'Browser Windows').click();
})

When('realizo o upload de um arquivo', () => {
 cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url
         })
    })
})

When('submeto o formulário', () => {
  cy.contains('button', 'New Window').click()
})

Then('um popup de confirmação deve ser exibido', () => {
 cy.contains('This is a sample page').should('be.visible')
})
