import editAcc from "../../support/pageObject/edit.acc"
import changePass from "../../support/pageObject/edit.acc"
const userData = require('../../fixtures/userLogin.json')

describe('Verify Edit Account Functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login('tester@test.com','P@ssword1')
      cy.get('.logged-in').should('contain.text','Welcome')
      cy.accountMenu()
    })
    it('Success Edit First Name', () => {
      cy.editMenu()
      cy.get(editAcc.fname).clear().type('User')
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })
    it('Success Edit Last Name', () => {
      cy.editMenu()
      cy.get(editAcc.lname).clear().type('Name')
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })
    it('Failed Edit First Name - Empty Field', () => {
      cy.editMenu()
      cy.get(editAcc.fname).clear()
      cy.saveBtn()
      cy.get('#firstname-error').should('be.visible')
    })
    it('Failed Edit Last Name - Empty Field', () => {
      cy.editMenu()
      cy.get(editAcc.lname).clear()
      cy.saveBtn()
      cy.get('#lastname-error').should('be.visible')
    })
    /*it('Success Edit Email', () => {
      cy.editMenu()
      cy.get('#change-email').click()
      cy.get(editAcc.newEmail).clear().type('halo@test.com')
      cy.get(editAcc.current).type('P@ssword1')
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })*/
    it('Failed Edit Email - Invalid Email', () => {
      cy.editMenu()
      cy.get('#change-email').click()
      cy.get(editAcc.newEmail).clear().type('test.test.com')
      cy.get(editAcc.current).type('P@ssword1')
      cy.saveBtn()
      cy.get('#email-error').should('be.visible')
    })
    it('Failed Edit Email - Wrong Password', () => {
      cy.editMenu()
      cy.get('#change-email').click()
      cy.get(editAcc.newEmail).clear().type('test@test.com')
      cy.get(editAcc.current).type('pass')
      cy.saveBtn()
      cy.get('.message-error').should('be.visible')
    })
    it('Failed Change Password - Wrong Current Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type('pass')
      cy.get(editAcc.new).type('rndmP@ass')
      cy.get(editAcc.confirm).type('rndmP@ass')
      cy.saveBtn()
      cy.get('.message-error').should('be.visible')
    })
    it('Failed Change Password - Weak New Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type('P@ssword')
      cy.get(editAcc.new).type('pass')
      cy.get('#password-error').should('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols')
    })
    it('Failed Change Password - Wrong Confirm New Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type('P@ssword1')
      cy.get(editAcc.new).type('rndmP@ass')
      cy.get(editAcc.confirm).type('pass')
      cy.saveBtn()
      cy.get('#password-confirmation-error').should('be.visible')
    })
    /*it('Success Change Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type('P@ssword1')
      cy.get(editAcc.new).type('rndmP@ass')
      cy.get(editAcc.confirm).type('rndmP@ass')
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })*/
    it('Failed Edit Email - Invalid Email (Fixtures)', () => {
        cy.editMenu()
        cy.get('#change-email').click()
        cy.get(editAcc.newEmail).clear().type(userData.invalid_email)
        cy.get(editAcc.current).type(userData.valid_password)
        cy.saveBtn()
        cy.get('#email-error').should('be.visible')
      })
  })