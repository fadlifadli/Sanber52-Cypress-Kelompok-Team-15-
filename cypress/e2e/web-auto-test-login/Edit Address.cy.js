describe(' Verify Edit Address Functionality ', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login('emailtestingpramesta@gmail.com','EmailTesting.123')
      cy.wait(500)
      cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    })
	
	//Success Edit Address Dari Laman customer/address/
    it('Verify Success Edit Address', () => {
        cy.CustAddress()
        cy.get('#firstname').clear().type('NamaDepan')
        cy.get('#lastname').clear().type('NamaBelakang')
        cy.get('#company').clear().type('Sanbercode')
        cy.get('#telephone').clear().type('081234566789')
        cy.get('#street_1').clear().type('Jl. Kemerderkaan')
        cy.get('#street_2').clear().type('Indonesia')
        cy.get('#street_3').clear().type('Jawa Barat')
        cy.get('#city').clear().type('Indiana')
        cy.get('#region').clear().type('Jakarta')
        cy.get('#zip').clear().type('61526')
        cy.get('#country').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').should('be.visible')
      })
	
    //Success Edit Address Dari Laman Customer/account 
    it('Verify Success Edit Address', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#firstname').clear().type('NamaDepan')
        cy.get('#lastname').clear().type('NamaBelakang')
        cy.get('#company').clear().type('Sanbercode')
        cy.get('#telephone').clear().type('081234566789')
        cy.get('#street_1').clear().type('Jl. Kemerderkaan')
        cy.get('#street_2').clear().type('Indonesia')
        cy.get('#street_3').clear().type('Jawa Barat')
        cy.get('#city').clear().type('Indiana')
        cy.get('#region').clear().type('Jakarta')
        cy.get('#zip').clear().type('61526')
        cy.get('#country').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').should('be.visible')
      })

      it('Success Edit Address_Required only', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#firstname').clear().type('NamaDepan')
        cy.get('#lastname').clear().type('NamaBelakang')
        cy.get('#telephone').clear().type('081234566789')
        cy.get('#street_1').clear().type('Jl. Kemerderkaan')
        cy.get('#city').clear().type('Indiana')
        cy.get('#zip').clear().type('61526')
        cy.get('#country').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').should('be.visible')
      })

      it('Failed Edit Address_First name not field', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#firstname').clear()
        cy.get('#lastname').clear().type('NamaBelakang')
        cy.get('#company').clear().type('Sanbercode')
        cy.get('#telephone').clear().type('081234566789')
        cy.get('#street_1').clear().type('Jl. Kemerderkaan')
        cy.get('#street_2').clear().type('Indonesia')
        cy.get('#street_3').clear().type('Jawa Barat')
        cy.get('#city').clear().type('Indiana')
        cy.get('#region').clear().type('Jakarta')
        cy.get('#zip').clear().type('61526')
        cy.get('#country').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname-error').should('be.visible')
      })
	  
	  it('Failed Edit Address_City not field', () => {
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#firstname').clear().type('NamaDepan')
        cy.get('#lastname').clear().type('NamaBelakang')
        cy.get('#company').clear().type('Sanbercode')
        cy.get('#telephone').clear().type('081234566789')
        cy.get('#street_1').clear().type('Jl. Kemerderkaan')
        cy.get('#street_2').clear().type('Indonesia')
        cy.get('#street_3').clear().type('Jawa Barat')
        cy.get('#city').clear()
        cy.get('#region').clear().type('Jakarta')
        cy.get('#zip').clear().type('61526')
        cy.get('#country').select('Indonesia')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#city-error').should('be.visible')
      })
    

  })