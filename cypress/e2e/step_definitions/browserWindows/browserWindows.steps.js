import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BrowserWindowsPage from '../../../page/BrowserWindowsPage';

Given('que acesso a página inicial do DemoQA', () => {
  BrowserWindowsPage.acessarPaginaInicial();
});

And('seleciono a opção {string}', (opcao) => {
  BrowserWindowsPage.selecionarOpcao(opcao);
});

And('acesso o submenu {string}', (submenu) => {
  BrowserWindowsPage.acessarSubmenu(submenu);
});

When('clico no botão {string}', (botao) => {
  BrowserWindowsPage.clicarBotao(botao);
});

Then('a mensagem {string} deve ser exibida', (mensagem) => {
  BrowserWindowsPage.validarMensagemExibida(mensagem);
});
