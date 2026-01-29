Feature: Practice Form

  Scenario: Preencher e submeter formulário com sucesso
    Given que acesso o formulário Practice Form
    When preencho todos os campos obrigatórios
    And realizo o upload de um arquivo
    And submeto o formulário
    Then um popup de confirmação deve ser exibido
