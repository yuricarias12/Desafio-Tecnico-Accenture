Feature: Gerenciamento de janelas do navegador

  Como um usuário do site DemoQA
  Quero abrir uma nova janela do navegador
  Para validar que o conteúdo exibido está correto

Scenario: Validar o texto exibido ao abrir uma nova janela
  Given que acesso a página inicial do DemoQA
  And seleciono a opção "Alerts, Frame & Windows"
  And acesso o submenu "Browser Windows"
  When clico no botão "New Window"
  Then a mensagem "This is a sample page" deve ser exibida

