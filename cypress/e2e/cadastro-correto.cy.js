describe('Página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastro('Joyce', 'joyce@email.com', 'Senha123!'); // se der bad request, pode ser email ja cadastrado de testes anteriores!

    // LISTA DE EXERCICIOS - 1
    // cy.contains('a', 'Ver pets disponíveis para adoção').click();
    // cy.get('[aria-label="Tela inicial"]').click();
    // cy.get('[aria-label="Ir para Mensagens"]').click();

    // cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    // cy.visit('https://adopet-frontend-cypress.vercel.app/home');

    // cy.contains('a', 'Falar com responsável').click();
  })
})