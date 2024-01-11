describe('Verify Login Functionality', () => {
  beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    
      // Click text sign in 
      cy.get('.panel > .header > .authorization-link > a')
  
})

    
    cy.get('.panel > .header > .authorization-link > a')
    
  //Custom Command
  it('Verify Success Login', () => {
      cy.login('QA_Sanber@team15Okk.com', 'SanberTeam15')
      cy.wait(500)
  })
  it('Verify Failed Login', () => {
      cy.login('QA_Sanber@team15Okk.com', 'SanberTeam15')
      cy.get('.message-error > div').should('be.visible')
      cy.wait(500)
  })
  it('Verify Invalid Value Login', () => {
      cy.login('xxxx', 'xxxx')
      cy.wait(500)
  })
  it('Verify Not Registered Login', () => {
      cy.login('QA_Sanber@team15Okk.com', 'SanberTeam15')
      cy.get('.message-error > div').should('be.visible')
      cy.wait(500)
  })
})