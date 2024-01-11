describe('Reqres API Testing - Get User List', () => {
    
    function randomName(){
        const randomString = Math.random().toString(36).substring(2,9)
        const name = "user" + randomString 
        return name
    }
    
    let username = randomName()
    let job = 'Quality'
    
    it('get list user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) =>{
            expect( response.status).to.equal(200)
        })
    })
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": username,
                "job" : job
            }
        }).then((response) =>{
            expect( response.status).to.equal(201)
        })
    })
})