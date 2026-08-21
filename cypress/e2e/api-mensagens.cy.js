// teste direto na API
// resultado: a API ta devolvendo as respostas, caso não esteja aparecendo no site, o problema é do front.

describe('Api AdoPet', () => {
    // const tempoEsperado = Math.random() * 1000;
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/2d3b768a-95e9-4f83-aaa9-0b1bc9938f5e',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200) //espera uma resposta 200
            expect(res.body).is.not.empty //espera um body que nao seja vazio
            expect(res.body).to.have.property('msg') // espera que no body tenha uma propriedade msg
            // expect(res.duration).to.be.lte(tempoEsperado); // lte = menor que
        })
    })
})

// o teste de tempo esperado é chamado de flaky teste, é um teste inconsiste (as vezes passa, as vezes não)