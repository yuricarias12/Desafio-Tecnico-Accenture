# 🛡️ Desafio QA Automation - Accenture

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)

> Este repositório contém a resolução do Desafio de QA Automation da Accenture, focado em boas práticas, organização e cobertura de testes.

## 📄 Resumo do Projeto

O projeto foi arquitetado em duas frentes principais de testes automatizados:

### 🔌 API Automation
Testes de integração com a API do **DemoQA**, cobrindo o ciclo de vida do usuário e gerenciamento de livros.
* Criação e autenticação de usuário.
* Listagem e reserva de livros.

### 🖥️ Frontend Automation
Testes E2E no site **DemoQA** utilizando **Cypress + Cucumber**, validando componentes complexos como:
* **Practice Form** (Formulários e Upload)
* **Browser Windows** (Gerenciamento de abas)
* **Web Tables** (Manipulação de dados)
* **Progress Bar** (Sincronismo)
* **Sortable** (Interação Drag & Drop)

---

## 🛠️ Tecnologias e Dependências

* **[Node.js](https://nodejs.org/)**
* **[Cypress](https://www.cypress.io/)**
* **Cypress Plugin API** (Feedback visual de API)
* **Cypress Cucumber Preprocessor** (Escrita em Gherkin)

### 📦 Instalação

```bash
# Clone o repositório e instale as dependências
npm install

# Dependências principais incluídas:
# - cypress
# - cypress-plugin-api
# - cypress-cucumber-preprocessor

# 🛡️ Desafio QA Automation - Accenture

> Este repositório contém a resolução do Desafio de QA Automation da Accenture, focado em boas práticas, organização e cobertura de testes.

## 📄 Resumo do Projeto

O projeto foi arquitetado em duas frentes principais de testes automatizados:

### 🔌 API Automation
Testes de integração com a API do **DemoQA**, cobrindo o ciclo de vida do usuário e gerenciamento de livros.
* Criação e autenticação de usuário.
* Listagem e reserva de livros.

### 🖥️ Frontend Automation
Testes E2E no site **DemoQA** utilizando **Cypress + Cucumber**, validando componentes complexos como:
* **Practice Form** (Formulários e Upload)
* **Browser Windows** (Gerenciamento de abas)
* **Web Tables** (Manipulação de dados)
* **Progress Bar** (Sincronismo)
* **Sortable** (Interação Drag & Drop)

---

## 🛠️ Tecnologias e Dependências

* **[Node.js](https://nodejs.org/)**
* **[Cypress](https://www.cypress.io/)**
* **Cypress Plugin API** (Feedback visual de API)
* **Cypress Cucumber Preprocessor** (Escrita em Gherkin)

### 📦 Instalação

```bash
# Clone o repositório e instale as dependências
npm install

# Dependências principais incluídas:
# - cypress
# - cypress-plugin-api
# - cypress-cucumber-preprocessor
🚀 Funcionalidades ImplementadasAPI (Backend)
[x] Criar usuário[x] 
Gerar token de acesso[x] 
Confirmar autorização[x] 
Listar livros disponíveis[x] 
Reservar livros[x] 
Validar detalhes do usuário

Frontend (UI)
Funcionalidade             Detalhes do Teste
Form Practice              Preenchimento dinâmico, upload de .txt e validação de popup.
Browser Windows            Abertura de nova janela, validação de mensagem e fechamento.
Web Tables                 CRUD de registros, criação em massa (Scenario Outline) e limpeza de dados.
Progress Bar               Controle de barra (Stop < 25%) e Reset (100%).
Sortable                   Ordenação de elementos via Drag and Drop (Crescente).

🏗 Estrutura do Projeto & PadrõesO projeto segue rigorosamente o padrão Page Object Model (POM) e BDD.Plaintext

cypress/
├── e2e/
│   ├── api/                # Testes de API
│   │   ├── features/       # Especificações Gherkin
│   │   ├── services/       # Camada de requisições HTTP
│   │   └── step_def.../    # Steps do Cucumber
│   └── features/           # Funcionalidades Frontend
│       ├── browserWindows/
│       ├── formPractice/
│       ├── progressBar/
│       ├── sortable/
│       └── webTables/
├── fixtures/               # Massas de dados e arquivos
├── pages/                  # Page Objects (Elementos e Métodos)
└── support/                # Configurações globais
🔗 Links Úteis

* [DemoQA Website](https://demoqa.com/)
* [Swagger API Documentation](https://demoqa.com/swagger/)
