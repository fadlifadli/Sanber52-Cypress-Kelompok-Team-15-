describe('Positif Test Case', () => {

  function randomName(){
    const randomString = Math.random().toString(36).substring(2,9)
    const firstname = "QA_sanber" + randomString
    return firstname
  }

  function RandomEmail(){
    const randomString = Math.random().toString(36).substring(2,9)
    const firstname = "QA_" + randomString + "@team15.com"
    return firstname
}


  it('Create Account "Create"', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    // Sign in is passed get logo Luma
    cy.get('.logo > img')

    // Click text button
    cy.contains('Create an Account').click()

    // this page true create account
    cy.get('.base')

    // Get an input, type into it 
    cy.get('#firstname').type(randomName())
    cy.get('#lastname').type('QA')
    cy.get('#email_address').type(RandomEmail())
    cy.get('#password').type('SanberTeam15')
    cy.get('#password-confirmation').type('SanberTeam15')

    // action submit primary
    cy.get('#form-validate > .actions-toolbar > div.primary> .action > span').click()

    // this succes create Account 
    cy.get('.message-success')
    
  })
})


cy.get('#firstname-error')