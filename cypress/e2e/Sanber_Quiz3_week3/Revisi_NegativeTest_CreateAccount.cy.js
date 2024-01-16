context('Negative Test Case Create Account', () => {
  beforeEach(() => {
      // cy.visit('https://magento.softwaretestingboard.com/')
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      
    })
  
    // Custom Command
    it('this page true create  account ', () => {
      // this page true create account
      cy.get('.base')
    // })

    // it('No Input field FirstName', () => {
    //   // input, type into it 
    //   cy.get('#firstname').type()
    // })

    // it('No Input field lastname', () => {
    //   // input, type into it 
    //   cy.get('#lastname').type()
    // })

    // it('Wrong Input email_address', () => {
      // input, type into it 
      cy.get('#email_address').type('1234')   
    // })

    // it('Wrong Input Password', () => {
      // input, type into it 
      cy.get('#password').type('123456')   
    // })

    // it('Wrong Input password-confirmation', () => {
      // input, type into it 
      cy.get('#password-confirmation').type('123456')   
    // })

    // it('Click Button Submit', () => {
      // action submit primary
      cy.get('#form-validate > .actions-toolbar > div.primary> .action > span').click()
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

    // it('VALIDASI Failed Login', () => {
      // Verify Failed Login
      cy.get('#password-error').should('be.visible')
      cy.wait(500)
 })
})
