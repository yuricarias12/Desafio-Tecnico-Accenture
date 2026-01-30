Feature: Fluxo de API BookStore DemoQA

  Como consumidor da API DemoQA
  Quero criar um usuário e alugar livros
  Para validar o fluxo completo de autenticação e uso da API

  Scenario: Criar usuário, autenticar e alugar livros
    Given que possuo um usuário válido na API
    When gero um token de acesso
    And valido que o usuário está autorizado
    And listo os livros disponíveis
    And alugo dois livros
    Then os livros devem estar associados ao usuário
