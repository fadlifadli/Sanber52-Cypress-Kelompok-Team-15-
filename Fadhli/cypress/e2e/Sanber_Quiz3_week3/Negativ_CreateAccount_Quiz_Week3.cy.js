describe('Positif Test Case', () => {

  it('Create Account "Create"', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    // Sign in is passed get logo Luma
    cy.get('.logo > img')

    // Click text button
    cy.contains('Create an Account').click()

    // this page true create account
    cy.get('.base')

    // Get an input, type into it 
    // cy.get('#firstname').type()
    // cy.get('#lastname').type()    
    cy.get('#email_address').type('1234')    
    cy.get('#password').type('123456')    
    cy.get('#password-confirmation').type('123456')

    // action submit primary
    cy.get('#form-validate > .actions-toolbar > div.primary> .action > span').click()
    
    it('Verify Fail firstname-error', () => {
    cy.get('#firstname-error').should('be.visible')
    cy.wait(500)
        })

    it('Verify Fail lastname-error', () => {
    cy.get('#lastname-error').should('be.visible')
    cy.wait(500)
        })
    
    it('Verify Fail Email', () => {
      cy.get('#email_address-error').should('be.visible')
      cy.wait(500)
        })

    it('Verify Failed Login', () => {
    cy.get('#password-error').should('be.visible')
    cy.wait(500)
  })

  })
})
