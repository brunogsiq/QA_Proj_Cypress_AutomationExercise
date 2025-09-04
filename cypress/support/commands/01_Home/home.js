import 'cypress-wait-until';

import { telaHome } from "../../pages/elementos";
import { telaCadastro_NewUser } from "../../pages/elementos";

const TelaHome = new telaHome();
const TelaCadastro_NewUser = new telaCadastro_NewUser();

Cypress.Commands.add('visitaTelaDeCadastro_Teste', () =>
{
    cy.visit('/');

    // Dado que foi realizado um evento de clique no botão Signup/Login;
    TelaHome.buttonSignup
        .click();

    // Quando o sistema carregar,
    cy.waitUntil(() => 
        TelaCadastro_NewUser.formulario_Titulo.should('be.visible')
    );

    // Então deverá ser apresentado a página com o título "New User Signup!"
    TelaCadastro_NewUser.formulario_Titulo
        .should('have.text', TelaCadastro_NewUser.formulario_Titulo_Texto);
});
