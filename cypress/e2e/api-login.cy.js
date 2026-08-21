// teste direto na API

describe('Api AdoPet', () => {
    it('Perfil da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/2d3b768a-95e9-4f83-aaa9-0b1bc9938f5e',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200) //espera uma resposta 200
            expect(res.body).is.not.empty //espera um body que nao seja vazio
            expect(res.body).to.have.property('perfil').to.have.property('nome') // espera que no body existe perfil, e que dentro dele exista nome
        })
    })
})