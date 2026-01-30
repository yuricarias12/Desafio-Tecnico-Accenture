Feature: Ordenação decrescente no Sortable

  Como usuário do sistema
  Quero ordenar os itens utilizando drag and drop
  Para garantir que a lista fique em ordem decrescente

  Scenario: Ordenar os elementos em ordem decrescente
    Given que acesso o site DemoQA
    And acesso o menu Interactions
    And acesso o submenu Sortable
    When ordeno os elementos de forma decrescente
    Then os elementos devem estar em ordem decrescente
