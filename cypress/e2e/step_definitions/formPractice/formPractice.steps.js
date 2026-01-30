import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PracticeFormPage from '../../../pages/FormPracticePage';

Given('que acesso a página inicial do DemoQA', () => {
  PracticeFormPage.acessarPaginaInicial();
});

And('seleciono a opção {string}', (opcao) => {
  PracticeFormPage.selecionarOpcao(opcao);
});

And('acesso o submenu {string}', (submenu) => {
  PracticeFormPage.acessarSubmenu(submenu);
});

When('preencho o formulário com dados aleatórios', () => {
  PracticeFormPage.preencherFormularioComDadosAleatorios();
});

And('realizo o upload de um arquivo válido', () => {
  PracticeFormPage.realizarUploadArquivoValido();
});

And('submeto o formulário', () => {
  PracticeFormPage.submeterFormulario();
});

Then('um popup de confirmação deve ser exibido', () => {
  PracticeFormPage.validarPopupConfirmacao();
});

And('o popup deve ser fechado', () => {
  PracticeFormPage.fecharPopupConfirmacao();
});
