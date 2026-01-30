import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SortablePage from "../../../page/SortablePage";

Given("que acesso o site DemoQA", () => {
  SortablePage.acessarSite();
});

And("acesso o menu Interactions", () => {
  SortablePage.acessarMenuInteractions();
});

And("acesso o submenu Sortable", () => {
  SortablePage.acessarSubmenuSortable();
});

When("ordeno os elementos de forma decrescente", () => {
  SortablePage.ordenarElementosDecrescente();
});

Then("os elementos devem estar em ordem decrescente", () => {
  SortablePage.validarOrdemDecrescente();
});

When("ordeno os elementos de forma crescente novamente", () => {
  SortablePage.ordenarElementosCrescente();
});

Then("os elementos devem estar em ordem crescente", () => {
  SortablePage.validarOrdemCrescente();
});
