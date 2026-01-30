Feature: Ordenação decrescente no Sortable

  Como usuário do sistema
  Quero ordenar os itens utilizando drag and drop
  Para garantir que a lista fique em ordem decrescente

  Scenario: Ordenar lista de forma decrescente e retornar ao original
    Given que acesso o site DemoQA
    And acesso o menu Interactions
    And acesso o submenu Sortable
    When ordeno os elementos de forma decrescente
    Then os elementos devem estar em ordem decrescente
    When ordeno os elementos de forma crescente novamente
    Then os elementos devem estar em ordem crescente
