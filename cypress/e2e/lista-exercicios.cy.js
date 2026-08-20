describe('Múltiplas páginas', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // cy.get('[data-test="register-button"]').click();
  })

  it('Lista de exercícios', () => {
    // LISTA DE EXERCICIOS - 1
    // cy.contains('a', 'Ver pets disponíveis para adoção').click();
    // cy.get('[aria-label="Tela inicial"]').click();
    // cy.get('[aria-label="Ir para Mensagens"]').click();

    // cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    // cy.visit('https://adopet-frontend-cypress.vercel.app/home');

    // cy.contains('a', 'Falar com responsável').click();

    // LISTA DE EXERCÍCIOS - 2
    cy.title().should('include', 'AdoPet');
    cy.contains('Quem ama adota!').should('be.visible');
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');

    cy.get('.header__message').click();
    cy.login('joyce@email.com', 'Senha123!');

    // LISTA DE EXERCICIOS - 3
    cy.get('.cards > :nth-child(n) > img').should('be.visible');
  })
})

// ALTERNATIVAS COM O CÓDIGO REFATORADO:
// describe('Teste quem ama adota', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
   
//     it('Verifica mensagem de texto', () =>{
//         cy.contains('p', 'Quem ama adota!').should('be.visible')
//     })

//     it('Verifica mensagem de texto', () =>{
//         cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
//     })
 
//   });