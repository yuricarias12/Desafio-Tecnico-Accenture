import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BookStoreService from  '../../api/services/BookStoreService';

Given("que possuo um usuário válido na API", () => {
  BookStoreService.criarUsuario();
});

When("gero um token de acesso", () => {
  BookStoreService.gerarToken();
});

And("valido que o usuário está autorizado", () => {
  BookStoreService.validarAutorizacao();
});

And("listo os livros disponíveis", () => {
  BookStoreService.listarLivros();
});

And("alugo dois livros", () => {
  BookStoreService.alugarLivros();
});

Then("os livros devem estar associados ao usuário", () => {
  BookStoreService.validarLivrosNoUsuario();
});
