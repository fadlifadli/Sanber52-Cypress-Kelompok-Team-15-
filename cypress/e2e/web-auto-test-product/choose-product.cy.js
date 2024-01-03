describe(' Verify Choose Product functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login('alfaizu01@gmail.com', 'Alfaizu3540')
      cy.wait(500)
    })
    it('Verify success choose product', () => {
      // cy.visit('https://magento.softwaretestingboard.com/')
      
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#option-label-size-143-item-167').click()
      cy.get('#option-label-color-93-item-57').click()
      cy.get('#product-addtocart-button').click()
      cy.get('.showcart').click({force : true})
    })
    
    it('Verify Failed add cart - size & color not required', () => {
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
    //   cy.get('#super_attribute\[143\]-error').should('be.visible')
    //   cy.get('#super_attribute\[93\]-error').should('be.visible')
    })
  
    it('Verify Failed add cart - size not required', () => {
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#option-label-color-93-item-57').click()
      cy.get('#product-addtocart-button').click()
    //   cy.get('#super_attribute\[143\]-error').should('be.visible')
    })
  
    it('Verify Failed add cart - color not required', () => {
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#option-label-size-143-item-167').click()
      cy.get('#product-addtocart-button').click()
    //   cy.get('#super_attribute\[93\]-error').should('be.visible')
    })
  })