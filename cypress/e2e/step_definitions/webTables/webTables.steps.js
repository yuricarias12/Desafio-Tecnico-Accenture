import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import WebTablesPage from "../../../page/WebTablesPage";

Before(() => {
  WebTablesPage.resetarEstado();
});

Given("que acesso o site DemoQA", () => {
  WebTablesPage.acessarSite();
});

And("seleciono a opção {string} na página inicial", (menu) => {
  WebTablesPage.selecionarOpcao(menu);
});

And("acesso o submenu {string}", (submenu) => {
  WebTablesPage.acessarSubmenu(submenu);
});

When("crio um novo registro válido", () => {
  WebTablesPage.criarNovoRegistroValido();
});

And("edito o registro criado", () => {
  WebTablesPage.editarRegistroCriado();
});

Then("o registro deve ser removido com sucesso", () => {
  WebTablesPage.removerRegistro(WebTablesPage.createdEmails[0]);
});

When("crio os seguintes registros:", (dataTable) => {
  WebTablesPage.criarRegistrosViaTabela(dataTable);
});

Then("removo todos os registros criados", () => {
  WebTablesPage.removerTodosOsRegistrosCriados();
});
