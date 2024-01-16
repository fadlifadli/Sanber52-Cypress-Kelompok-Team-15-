context('Negative Test Case Create Account', () => {
  beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      
    })
  
    // Custom Command
    it('this page true create  account ', () => {
      // this page true create account
      cy.get('.base')
    })

    it('Wrong Input email_address', () => {
      // input, type into it 
      cy.get('#email_address').type('1234')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#email_address-error').should('be.visible')
      cy.wait(500)   
    })

    it('Wrong Input Password', () => {
      // input, type into it 
      cy.get('#password').type('123456')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#password-error').should('be.visible')     
    })


    it('VALIDASI FIRST-NAME ERROR, LAST-NAME ERROR, Fail Email, password-error  ', () => {
      // action submit primary
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    // })

    // it('VALIDASI FIRST-NAME ERROR', () => {
      //Verify Fail firstname-error
      cy.get('#firstname-error').should('be.visible')
      cy.wait(500)
    // })

    // it('VALIDASI LAST-NAME ERROR', () => {
      //Verify Fail lastname-error
      cy.get('#lastname-error').should('be.visible')
      cy.wait(500)
    // })

    // it('VALIDASI Fail Email', () => {
    //Verify Fail lastname-error
      cy.get('#email_address-error').should('be.visible')
      cy.wait(500)
    // })

    // it('VALIDASI Pasword Error', () => {
      // Verify Pasword Error
      cy.get('#password-error').should('be.visible')
      cy.wait(500)
 })
})
