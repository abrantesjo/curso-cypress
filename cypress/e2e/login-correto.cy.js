describe("Página de Login", () => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/");
        cy.get('[data-test="login-button"]').click();
    });

    it("Preencher os campos de login corretamente e autenticar o usuário na página", () => {
        cy.login('joyce@email.com', 'Senha123!'); // usa o comando personalizado
    });
});
