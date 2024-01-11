describe('My First Test Cypress', () => {
  it('Create Account "Create"', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    // Click text button
    cy.contains('Create an Account').click()

    // Get an input, type into it 
    cy.get('#firstname').type('SanberTeam15ok')
    cy.get('#lastname').type('QA')
    cy.get('#email_address').type('QA_Sanber@team15Okk.com')
    cy.get('#password').type('SanberTeam15')
    cy.get('#password-confirmation').type('SanberTeam15')

    // action submit primary
    cy.get('#form-validate > .actions-toolbar > div.primary> .action > span').click()

    
    
  })
})