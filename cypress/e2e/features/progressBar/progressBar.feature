Feature: Controle da Progress Bar

  Como um usuário do sistema
  Quero controlar o progresso da Progress Bar
  Para validar seu comportamento durante a execução e reinicialização

  Scenario: Iniciar, pausar e resetar a Progress Bar
    Given que acesso o site DemoQA
    And seleciono a opção "Widgets" na página inicial
    And acesso o submenu "Progress Bar"
    When inicio o progresso da barra
    And interrompo o progresso antes de 25%
    And retomo o progresso da barra até completar
    Then o valor da progress bar deve ser menor ou igual a 25%
    And ao atingir 100% a barra deve ser resetada
