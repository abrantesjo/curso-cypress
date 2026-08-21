describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')
    });

    it('Verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click();

        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible')
    });
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('joyce@email.com', 'Senha123!');
        cy.wait('@stubPost'); //espera o stub
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
});

// a gente usa o stub pra controlar o retorno (fazer uma função retornar um valor fixo ou falso); conferir se a função foi executada etc
// evitar que o sistema depende de API, banco de dados ou funções lentas
