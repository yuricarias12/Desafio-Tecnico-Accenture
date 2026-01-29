Feature: Submissão do formulário Practice Form

  Como um usuário do site DemoQA
  Quero preencher e submeter o formulário Practice Form
  Para validar que o envio ocorre com sucesso

  Scenario: Preencher e submeter o formulário com sucesso
    Given que acesso a página inicial do DemoQA
    And seleciono a opção "Forms"
    And acesso o submenu "Practice Form"
    When preencho o formulário com dados aleatórios
    And realizo o upload de um arquivo válido
    And submeto o formulário
    Then um popup de confirmação deve ser exibido
    And o popup deve ser fechado
