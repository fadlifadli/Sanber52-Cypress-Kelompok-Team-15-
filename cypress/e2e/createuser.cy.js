describe('Reqres API Testing - Create User', () => {
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Fadhli",
                "job" : "Quality Assurance"
            }
        }).then((response) =>{
            expect( response.status).to.equal(200)
            expect(response.body).has.property("name","Fadhli")
        })
    })
})