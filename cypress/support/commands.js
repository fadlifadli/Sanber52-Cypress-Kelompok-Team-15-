// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Sign In').click();
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click();
})

Cypress.Commands.add('accountMenu', () => {
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.base').should('contain.text','My Account')
})

Cypress.Commands.add('editMenu', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('.base').should('contain.text', 'Edit Account')
})

Cypress.Commands.add('changePass', () => {
    cy.get('.change-password').click()
    cy.get('.base').should('contain.text', 'Edit Account')
})

Cypress.Commands.add('saveBtn', () => {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })