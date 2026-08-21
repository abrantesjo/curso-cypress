# 🐾 AdoPet - Testes E2E com Cypress

Projeto de estudos criado durante o curso **[Cypress: automatizando testes E2E](https://www.alura.com.br/)** da Alura. Aqui automatizo testes end-to-end e de API para a aplicação [AdoPet](https://adopet-frontend-cypress.vercel.app/), um site fictício de adoção de pets, praticando desde os fundamentos do Cypress até boas práticas como comandos customizados, Page Objects, testes orientados a dados e testes de API.

## 🚀 Tecnologias

- [Cypress](https://www.cypress.io/) `^13.6.4`
- [Mochawesome](https://github.com/adamgruber/mochawesome) `^7.1.3` — geração de relatórios de execução
- Node.js

## 📁 Estrutura do projeto

```
cypress/
├── e2e/                        # Specs de teste
│   ├── login-correto.cy.js         # Login com credenciais válidas
│   ├── login-incorreto.cy.js       # Validações de erro no login (com intercept/stub)
│   ├── cadastro-correto.cy.js      # Cadastro de usuário com sucesso
│   ├── cadastro-correto-po.cy.js   # Mesmo fluxo de cadastro usando Page Object
│   ├── cadastro-incorreto.cy.js    # Validações de erro no formulário de cadastro
│   ├── cadastro-massa.cy.js        # Cadastro em massa a partir de fixture (data-driven)
│   ├── api-login.cy.js             # Teste direto na API de perfil do adotante
│   ├── api-mensagens.cy.js         # Teste direto na API de mensagens
│   └── lista-exercicios.cy.js      # Exercícios de navegação e asserções gerais
│
├── fixtures/
│   └── usuarios.json           # Massa de dados usada nos testes de cadastro em lote
│
├── support/
│   ├── commands.js             # Comandos customizados (cy.login, cy.cadastro)
│   ├── e2e.js                  # Configuração global carregada antes dos testes
│   ├── elements.js             # Seletores centralizados da página de cadastro
│   └── pagina-cadastro.js      # Page Object da página de cadastro
│
└── results/                    # Relatórios gerados pelo Mochawesome (json/html)

cypress.config.js               # Configuração do Cypress e do reporter
cypress.env.json                # Variáveis de ambiente (ignorado pelo git)
```

## ✅ O que está sendo testado

- **Login**: preenchimento correto e cenários de erro (campos vazios, credenciais inválidas), incluindo o uso de `cy.intercept` para simular respostas da API.
- **Cadastro**: fluxo feliz, validações de campos obrigatórios e cadastro em massa usando dados de um fixture.
- **Page Objects**: exemplo de organização de testes separando ações da página (`pagina-cadastro.js`) dos seletores (`elements.js`).
- **Comandos customizados**: `cy.login()` e `cy.cadastro()` para reaproveitar ações repetidas entre specs.
- **API**: chamadas diretas com `cy.request()` para validar respostas dos endpoints de perfil e mensagens, sem depender da interface.

## 🔧 Como rodar o projeto

1. Clone o repositório e instale as dependências:

   ```bash
   npm install
   ```

2. Crie o arquivo `cypress.env.json` na raiz do projeto (ele é ignorado pelo git) com as variáveis necessárias, por exemplo:

   ```json
   {
     "authorization": "Bearer <seu-token-aqui>"
   }
   ```

3. Abra o Cypress no modo interativo:

   ```bash
   npx cypress open
   ```

4. Ou rode todos os testes via terminal (modo headless):

   ```bash
   npx cypress run
   ```

## 📊 Relatórios

O projeto usa o **Mochawesome** como reporter. A cada execução via `cypress run`, um relatório é gerado em `cypress/results/`, contendo os resultados em JSON/HTML de cada suíte de testes.

## 📚 Sobre

Projeto desenvolvido para fins de aprendizado, aplicando na prática os conceitos ensinados no curso de Cypress da Alura: automação de testes E2E, testes de API, boas práticas de organização (Page Objects e comandos customizados) e geração de relatórios.
