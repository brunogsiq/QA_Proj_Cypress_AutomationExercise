import 'cypress-wait-until';

import { telaHome } from "../../pages/elementos";
import { telaCadastro_NewUser } from "../../pages/elementos";
import { telaCadastro_AccountInfo } from "../../pages/elementos";

const TelaHome = new telaHome();
const TelaCadastro_NewUser = new telaCadastro_NewUser();
const TelaCadastro_AccountInfo = new telaCadastro_AccountInfo();

import { faker } from '@faker-js/faker';

const nomeAleatorio = faker.person.firstName();
const emailAleatorio = faker.internet.email();

Cypress.Commands.add('visitaTelaDeCadastro_Hook', () =>
{
    cy.visit('/');

    TelaHome.buttonSignup
        .click();

    cy.waitUntil(() => 
        TelaCadastro_NewUser.formulario_Titulo.should('be.visible'));

    cy.wait(1000);
});

Cypress.Commands.add('preencheDadosNewUser_Hook', () =>
{
    cy.visitaTelaDeCadastro_Hook();

    TelaCadastro_NewUser.inputNome
        .type(nomeAleatorio)

    TelaCadastro_NewUser.inputEmail
        .type(emailAleatorio)

    TelaCadastro_NewUser.buttonCadastrar
        .click();
});

Cypress.Commands.add('formulário', () =>
{
    // Dado que a tela de cadastro foi carregada,
    //Quando validar os elementos em tela,
    // Então o sistema deverá apresentar o formulário de cadastro.
    TelaCadastro_NewUser.formulario
        .should('be.visible');
});

Cypress.Commands.add('formulário_titulo', () =>
{
    /* 
        Dado que o formulário de cadastro foi carregado,
        Quando validar o campo título,
        Então o sistema deverá: 
            Ser visível,
            Título com o texto "New User Signup!",
            Cor do texto do campo título igual a "rgb(105, 103, 99)".
    */

    TelaCadastro_NewUser.formulario_Titulo
        .should('be.visible')
        .and('have.text', TelaCadastro_NewUser.formulario_Titulo_Texto)
        .and('have.css', 'color', 'rgb(105, 103, 99)');
});

//Nome

Cypress.Commands.add('formulario_CampoNome',() =>
{
    /*
        Dado que o formulário de cadastro foi carregado,
        Quando validar o campo nome,
        Então o sistema deverá:
            Ser visível,
            Ser um input do tipo texto,
            apresentar o campo nome com o placeholder "Name".
    */
    TelaCadastro_NewUser.inputNome
        .should('be.visible')
        .and('have.attr', 'type', 'text')
        .and('have.attr', 'placeholder', TelaCadastro_NewUser.inputNome_Placeholder);
});

Cypress.Commands.add('formulario_CampoNome_Obrigatorio',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            1- Validar que o campo é obrigatório.
    */
    TelaCadastro_NewUser.inputNome
        .should('have.attr', 'required');
});

Cypress.Commands.add('formulario_CampoNome_LetrasMaiusculas',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            2 - Permitir a digitação de letras maiúsculas 
    */
    TelaCadastro_NewUser.inputNome
        .type('BRUNO')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'BRUNO');
});

Cypress.Commands.add('formulario_CampoNome_LetrasMinusculas',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            3 - Permitir a digitação de letras minúsculas 
    */
    TelaCadastro_NewUser.inputNome
        .type('bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'bruno');
});

Cypress.Commands.add('formulario_CampoNome_LetrasMaisculasMinusculas',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            4 - Permitir a digitação de letras maiúsculas e minúsculas 
    */
    TelaCadastro_NewUser.inputNome
        .type('BrUnO')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'BrUnO');
});

Cypress.Commands.add('formulario_CampoNome_Numeros',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            5 - Permitir a digitação de números 
    */
    TelaCadastro_NewUser.inputNome
        .type('01091910')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', '01091910');
});

Cypress.Commands.add('formulario_CampoNome_CaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            6 - Permitir a digitação de caracteres especiais, 
    */
    TelaCadastro_NewUser.inputNome
        .type('[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', '[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoNome_LetrasNumeros',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            7 - Permitir a digitação de letras e números, 
    */
    TelaCadastro_NewUser.inputNome
        .type('SCCP1910')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'SCCP1910');
});

Cypress.Commands.add('formulario_CampoNome_LetrasCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            8 - Permitir a digitação de letras e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputNome
        .type('Bruno[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoNome_NumerosCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            9 - Permitir a digitação de números e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputNome
        .type('1910[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', '1910[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoNome_LetrasNumerosCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:
            10 - Permitir a digitação de letras, números e caracteres especiais,             
    */
    TelaCadastro_NewUser.inputNome
        .type('Bruno1910[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno1910[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoNome_ComEspacos',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:             
            11 - Permitir a digitação de espaços entre nomes,
    */
    TelaCadastro_NewUser.inputNome
        .type('Bruno Siqueira')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno Siqueira');
});

Cypress.Commands.add('formulario_CampoNome_UmCaracter',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:             
            12 - Permitir a digitação de 01 caracteres.
    */
    TelaCadastro_NewUser.inputNome
        .type('B')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'B');
});

Cypress.Commands.add('formulario_CampoNome_TrintaCaracteres',() =>
{
    /*
        Dado que foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema deverá:             
            13 - Permitir a digitação de 30 caracteres.
    */
    TelaCadastro_NewUser.inputNome
        .type('1234567890ABCDEFGHIJ12345ABCDE')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', '1234567890ABCDEFGHIJ12345ABCDE')
});

Cypress.Commands.add('formulario_CampoNome_Vazio', () =>
{
    /*
        Dado que não foi inserido informações no campo nome,
        Quando validar os valores digitados
        Então o sistema não deverá:
            14 - Permitir que esteja com o campo vazio.
    */
    TelaCadastro_NewUser.inputNome
        .type('esse texto será apagado')
        .clear();
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', '')
});

Cypress.Commands.add('formulario_CampoNome_VazioMensagem', () =>
{
    /*
        Dado que não foi inserido informações no campo nome,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            15 - exibir alerta de preenchimento.
    */
    
    TelaCadastro_NewUser.inputNome
        .should('be.visible')
        .clear()
        .should('have.value', '')
        .and('have.attr', 'required');

    TelaCadastro_NewUser.inputNome.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Preencha este campo.');
    });
});

// Email

Cypress.Commands.add('formulario_CampoEmail',() =>
{
    /*
        Dado que o formulário de cadastro foi carregado,
        Quando validar o campo Email,
        Então o sistema deverá:
            Ser visível,
            Ser um input do tipo texto,
            apresentar o campo Email com o placeholder "Name".
    */
    TelaCadastro_NewUser.inputEmail
        .should('be.visible')
        .and('have.attr', 'type', 'email')
        .and('have.attr', 'placeholder', TelaCadastro_NewUser.inputEmail_Placeholder);
});

Cypress.Commands.add('formulario_CampoEmail_Obrigatorio',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            1- Validar que o campo é obrigatório.
    */
    TelaCadastro_NewUser.inputEmail
        .should('have.attr', 'required');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMaiusculas',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            2 - Permitir a digitação de letras maiúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BRUNO')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BRUNO');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMinusculas',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            3 - Permitir a digitação de letras minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'bruno');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMaisculasMinusculas',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            4 - Permitir a digitação de letras maiúsculas e minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BrUnO')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BrUnO');
});

Cypress.Commands.add('formulario_CampoEmail_Numeros',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            5 - Permitir a digitação de números 
    */
    TelaCadastro_NewUser.inputEmail
        .type('01091910')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '01091910');
});

Cypress.Commands.add('formulario_CampoEmail_CaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            6 - Permitir a digitação de caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumeros',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            7 - Permitir a digitação de letras e números, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('SCCP1910')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'SCCP1910');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            8 - Permitir a digitação de letras e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoEmail_NumerosCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            9 - Permitir a digitação de números e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('1910[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1910[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumerosCaracteresEspeciais',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            10 - Permitir a digitação de letras, números e caracteres especiais,             
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno1910[*!$&!*]')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno1910[*!$&!*]');
});

Cypress.Commands.add('formulario_CampoEmail_ComEspacos',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            11 - Permitir a digitação de espaços entre Emails,
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno teste')
        .should('be.visible')
        .and('have.value', 'brunoteste');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Inclua um "@" no endereço de e-mail.');
        expect(inputElement.validationMessage).to.contain('"brunoteste" está com um "@" faltando.');
    });    
});

Cypress.Commands.add('formulario_CampoEmail_UmCaracter',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            12 - Permitir a digitação de 01 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('B')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'B');
});

Cypress.Commands.add('formulario_CampoEmail_TrintaCaracteres',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            13 - Permitir a digitação de 30 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('1234567890ABCDEFGHIJ12345ABCDE')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1234567890ABCDEFGHIJ12345ABCDE')
});

Cypress.Commands.add('formulario_CampoEmail_Vazio', () =>
{
    /*
        Dado que não foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema não deverá:
            14 - Permitir que esteja com o campo vazio.
    */
    TelaCadastro_NewUser.inputEmail
        .type('essa mensagem será apagada')
        .clear();
        TelaCadastro_NewUser.inputEmail
            .should('be.visible')
            .and('have.value', '')
});

Cypress.Commands.add('formulario_CampoEmail_VazioMensagem', () =>
{
    /*
        Dado que não foi inserido informações no campo Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            15 - exibir alerta de preenchimento.
    */
    
    TelaCadastro_NewUser.inputEmail
        .should('be.visible')
        .clear()
        .should('have.value', '')
        .and('have.attr', 'required');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Preencha este campo.');
    });
});

// Email & arroba

Cypress.Commands.add('formulario_CampoEmail_LetrasMaiusculas_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            2 - Permitir a digitação de letras maiúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BRUNO@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BRUNO@');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMinusculas_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            3 - Permitir a digitação de letras minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'bruno@');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMaisculasMinusculas_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            4 - Permitir a digitação de letras maiúsculas e minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BrUnO@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BrUnO@');
});

Cypress.Commands.add('formulario_CampoEmail_Numeros_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            5 - Permitir a digitação de números 
    */
    TelaCadastro_NewUser.inputEmail
        .type('01091910@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '01091910@');
});

Cypress.Commands.add('formulario_CampoEmail_CaracteresEspeciais_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            6 - Permitir a digitação de caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('[*!$&!*]@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '[*!$&!*]@');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumeros_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            7 - Permitir a digitação de letras e números, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('SCCP1910@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'SCCP1910@');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasCaracteresEspeciais_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            8 - Permitir a digitação de letras e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno[*!$&!*]@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno[*!$&!*]@');
});

Cypress.Commands.add('formulario_CampoEmail_NumerosCaracteresEspeciais_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            9 - Permitir a digitação de números e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('1910[*!$&!*]@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1910[*!$&!*]@');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumerosCaracteresEspeciais_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            10 - Permitir a digitação de letras, números e caracteres especiais,             
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno1910[*!$&!*]@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno1910[*!$&!*]@');
});

Cypress.Commands.add('formulario_CampoEmail_ComEspacos_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            11 - Permitir a digitação de espaços entre Emails,
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno teste@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'brunoteste@');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Insira uma parte depois de')
        expect(inputElement.validationMessage).to.contain('está incompleto');
    });    
});

Cypress.Commands.add('formulario_CampoEmail_UmCaracter_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            12 - Permitir a digitação de 01 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('B@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'B@');
});

Cypress.Commands.add('formulario_CampoEmail_TrintaCaracteres_ComArroba',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            13 - Permitir a digitação de 30 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('1234567890ABCDEFGHIJ12345ABCDE@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1234567890ABCDEFGHIJ12345ABCDE@')
});

// Email & arroba & servidor

Cypress.Commands.add('formulario_CampoEmail_LetrasMaiusculas_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            2 - Permitir a digitação de letras maiúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BRUNO@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BRUNO@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMinusculas_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            3 - Permitir a digitação de letras minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'bruno@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasMaisculasMinusculas_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            4 - Permitir a digitação de letras maiúsculas e minúsculas 
    */
    TelaCadastro_NewUser.inputEmail
        .type('BrUnO@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'BrUnO@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_Numeros_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            5 - Permitir a digitação de números 
    */
    TelaCadastro_NewUser.inputEmail
        .type('01091910@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '01091910@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_CaracteresEspeciais_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            6 - Permitir a digitação de caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('[*!$&!*]@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '[*!$&!*]@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumeros_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            7 - Permitir a digitação de letras e números, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('SCCP1910@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'SCCP1910@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasCaracteresEspeciais_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            8 - Permitir a digitação de letras e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno[*!$&!*]@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno[*!$&!*]@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_NumerosCaracteresEspeciais_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            9 - Permitir a digitação de números e caracteres especiais, 
    */
    TelaCadastro_NewUser.inputEmail
        .type('1910[*!$&!*]@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1910[*!$&!*]@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_LetrasNumerosCaracteresEspeciais_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:
            10 - Permitir a digitação de letras, números e caracteres especiais,             
    */
    TelaCadastro_NewUser.inputEmail
        .type('Bruno1910[*!$&!*]@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'Bruno1910[*!$&!*]@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_ComEspacos_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            11 - Permitir a digitação de espaços entre Emails,
    */
    TelaCadastro_NewUser.inputEmail
        .type('bruno teste@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'brunoteste@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_UmCaracter_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            12 - Permitir a digitação de 01 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('B@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'B@server.com');
});

Cypress.Commands.add('formulario_CampoEmail_TrintaCaracteres_ComArrobaServer',() =>
{
    /*
        Dado que foi inserido informações no campo Email,
        Quando validar os valores digitados
        Então o sistema deverá:             
            13 - Permitir a digitação de 30 caracteres.
    */
    TelaCadastro_NewUser.inputEmail
        .type('1234567890ABCDEFGHIJ12345ABCDE@server.com')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '1234567890ABCDEFGHIJ12345ABCDE@server.com')
});

// Nome & Email 

Cypress.Commands.add('formulario_CamposNome_EmailVazio', () =>
{
    /*
        Dado que não foi inserido informações nos campos Nome e Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            1 - exibir alerta de preenchimento para o campo nome,
            2 - exibir alerta de preenchimento para o campo email.
    */
    
    TelaCadastro_NewUser.inputNome
        .type('Bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno');

    TelaCadastro_NewUser.inputEmail
        .should('be.visible')
        .clear()
        .should('have.value', '')
        .and('have.attr', 'required');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Preencha este campo.');
    });
});

// Nome & Email & arroba

Cypress.Commands.add('formulario_CamposNome_EmailComArroba_SemServer', () =>
{
    /*
        Dado que não foi inserido informações nos campos Nome e Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            1 - exibir alerta de preenchimento para o campo nome,
            2 - exibir alerta de preenchimento para o campo email.
    */
    
    TelaCadastro_NewUser.inputNome
        .type('Bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno');

    TelaCadastro_NewUser.inputEmail
        .type('bruno@')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'bruno@');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Insira uma parte depois')
        expect(inputElement.validationMessage).to.contain('está incompleto.');
    });
});

// Nome & arroba & servidor

Cypress.Commands.add('formulario_CamposNome_EmailComArrobaServer_SemUser', () =>
{
    /*
        Dado que não foi inserido informações nos campos Nome e Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            1 - exibir alerta de preenchimento para o campo nome,
            2 - exibir alerta de preenchimento para o campo email.
    */
    
    TelaCadastro_NewUser.inputNome
        .type('Bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno');

    TelaCadastro_NewUser.inputEmail
        .type('@server')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', '@server');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Insira uma parte seguida por');
        expect(inputElement.validationMessage).to.contain('está incompleto.');
    });
});

// Nome & Email Sem arroba Sem servidor

Cypress.Commands.add('formulario_CamposNome_EmailSemArroba_SemServer', () =>
{
    /*
        Dado que não foi inserido informações nos campos Nome e Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            1 - exibir alerta de preenchimento para o campo nome,
            2 - exibir alerta de preenchimento para o campo email.
    */
    
    TelaCadastro_NewUser.inputNome
        .type('Bruno')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno');

    TelaCadastro_NewUser.inputEmail
        .type('brunoteste')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'brunoteste');

    TelaCadastro_NewUser.inputEmail.then(($input) => {
        const inputElement = $input[0];
        // inválido porque é required e está vazio
        expect(inputElement.checkValidity()).to.be.false;
        // mensagem exibida pelo navegador
        inputElement.reportValidity();
        expect(inputElement.validationMessage).to.contain('Inclua um "@" no endereço de e-mail');
        expect(inputElement.validationMessage).to.contain('está com um "@" faltando');
    });
});

// Nome e Email com sucesso

Cypress.Commands.add('formulario_CamposNome_EmailComSucesso', () =>
{
    /*
        Dado que foi inserido informações nos campos Nome e Email,
        Quando clicar no campo cadastrar,
        Então o sistema deverá:
            1 - cadastrar o usuário com sucesso.
    */
    
    TelaCadastro_NewUser.inputNome
        .type('Bruno Siqueira')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputNome
                .should('be.visible')
                .and('have.value', 'Bruno Siqueira');

    TelaCadastro_NewUser.inputEmail
        .type('bruno@teste')
        TelaCadastro_NewUser.inputEmail
            .click();
            TelaCadastro_NewUser.inputEmail
                .should('be.visible')
                .and('have.value', 'bruno@teste');

    TelaCadastro_NewUser.buttonCadastrar
        .click();

    TelaCadastro_AccountInfo.formulario_Titulo
        .should('be.visible')
        .and('have.text', TelaCadastro_AccountInfo.formulario_Titulo_Texto);
});