Feature: Gerenciamento de registros na Web Table

  Como um usuário do sistema
  Quero gerenciar registros na Web Table
  Para garantir o correto funcionamento das operações de cadastro, edição e exclusão

  Scenario: Criar, editar e deletar um registro
    Given que acesso o site DemoQA
    And seleciono a opção "Elements" na página inicial
    And acesso o submenu "Web Tables"
    When crio um novo registro válido
    And edito o registro criado
    Then o registro deve ser removido com sucesso

  Scenario: Criar e remover múltiplos registros dinamicamente
    Given que acesso o site DemoQA
    And seleciono a opção "Elements" na página inicial
    And acesso o submenu "Web Tables"
    When crio os seguintes registros:
      | firstName | lastName | email              | age | salary | department |
      | User1     | Test     | user1@test.com     | 25  | 1000   | QA         |
      | User2     | Test     | user2@test.com     | 26  | 2000   | Dev        |
      | User3     | Test     | user3@test.com     | 27  | 3000   | DevOps     |
      | User4     | Test     | user4@test.com     | 28  | 4000   | QA         |
      | User5     | Test     | user5@test.com     | 29  | 5000   | Finance    |
      | User6     | Test     | user6@test.com     | 30  | 6000   | QA         |
      | User7     | Test     | user7@test.com     | 31  | 7000   | Dev        |
      | User8     | Test     | user8@test.com     | 32  | 8000   | RH         |
      | User9     | Test     | user9@test.com     | 33  | 9000   | Support    |
      | User10    | Test     | user10@test.com    | 34  | 10000  | QA         |
      | User11    | Test     | user11@test.com    | 35  | 11000  | Dev        |
      | User12    | Test     | user12@test.com    | 36  | 12000  | DevOps     |
    Then removo todos os registros criados
