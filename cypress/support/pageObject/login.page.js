class loginPage{
    email = '#email'
    password = '#password'
    loginBtn = '#send2'
    errorMsg = '.message-error > div'

    clickLoginBtn(){
        cy.get(this.loginBtn).click()
    }

    verifyErrorMsg(message){
        cy.get(this.errorMsg).should('contain.text', message)
    }
}
export default loginPage()
