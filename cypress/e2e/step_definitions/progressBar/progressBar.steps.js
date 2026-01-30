import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProgressBarPage from "../../../page/ProgressBarPage";

Given("que acesso o site DemoQA", () => {
  ProgressBarPage.acessarSite();
});

And("seleciono a opção {string} na página inicial", (menu) => {
  ProgressBarPage.selecionarOpcao(menu);
});

And("acesso o submenu {string}", (submenu) => {
  ProgressBarPage.acessarSubmenu(submenu);
});

When("inicio o progresso da barra", () => {
  ProgressBarPage.iniciarProgresso();
});

And("interrompo o progresso antes de 25%", () => {
  ProgressBarPage.interromperAntesDe25();
});

And("retomo o progresso da barra até completar", () => {
  ProgressBarPage.validarProgressoMenorOuIgual25();
});

Then("o valor da progress bar deve ser menor ou igual a 25%", () => {
  ProgressBarPage.retomarProgresso();
});

And("ao atingir 100% a barra deve ser resetada", () => {
  ProgressBarPage.validarResetApos100();
});
