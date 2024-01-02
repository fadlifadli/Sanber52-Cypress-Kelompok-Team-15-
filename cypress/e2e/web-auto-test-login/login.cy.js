
//const { default: loginPage } = require("../../support/pageObject/login.page")
//const userLogin = require("../../fixtures/userLogin.json")

describe('Verify Login Functionality', () => {
    beforeEach(() => {
        cy.visit('')
    })

    //Custom Command
    it('Verify Success Login', () => {
        cy.login('anisakaamilla@gmail.com', 'Mila0799')
        cy.wait(500)
    })
    it('Verify Failed Login', () => {
        cy.login('anisakaamilla@gmail.com', 'Mila799')
        cy.get('.message-error > div').should('be.visible')
        cy.wait(500)
    })
    it('Verify Invalid Value Login', () => {
        cy.login('xxxx', 'xxxx')
        cy.wait(500)
    })
    it('Verify Not Registered Login', () => {
        cy.login('anisakaamila@yahoo.com', 'Mila0799')
        cy.get('.message-error > div').should('be.visible')
        cy.wait(500)
    })

    //Page Object Model
    // it('Verify Success Login', () => {
    //     cy.get(loginPage.email).type('anisakaamilla@gmail.com')
    //     cy.get(loginPage.password).type('Mila0799')
    //     loginPage.clickLoginBtn()
    // })
    // it('Verify Failed Login', () => {
    //     cy.get(loginPage.email).type('anisakaamilla@gmail.com')
    //     cy.get(loginPage.password).type('Mila799')
    //     loginPage.clickLoginBtn()
    //     loginPage.verifyErrorMsg('password incorrect')
    // })
    // it('Verify Invalid Value Login', () => {
    //     cy.get(loginPage.email).type('xxxx')
    //     cy.get(loginPage.password).type('xxxx')
    //     loginPage.clickLoginBtn()
    // })
    // it('Verify Not Registered Login', () => {
    //     cy.get(loginPage.email).type('anisakaamila@yahoo.com')
    //     cy.get(loginPage.password).type('Mila0799')
    //     loginPage.clickLoginBtn()
    // })

    //Fixtures
    // it('Verify Success Login', () => {
    //     cy.get(loginPage.email).type(userLogin.valid_email)
    //     cy.get(loginPage.password).type(userLogin.valid_password)
    //     cy.wait(500)
    // })
   
})