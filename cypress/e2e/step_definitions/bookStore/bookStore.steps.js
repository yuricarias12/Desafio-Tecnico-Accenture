import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BookStoreApiPage from  '../../../pages/BookStoreApiPage';

Given("que possuo um usuário válido na API", () => {
  BookStoreApiPage.criarUsuario();
});

When("gero um token de acesso", () => {
  BookStoreApiPage.gerarToken();
});

And("valido que o usuário está autorizado", () => {
  BookStoreApiPage.validarAutorizacao();
});

And("listo os livros disponíveis", () => {
  BookStoreApiPage.listarLivros();
});

And("alugo dois livros", () => {
  BookStoreApiPage.alugarLivros();
});

Then("os livros devem estar associados ao usuário", () => {
  BookStoreApiPage.validarLivrosNoUsuario();
});
