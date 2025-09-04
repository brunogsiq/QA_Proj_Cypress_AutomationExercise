/// <reference types="cypress" /> 

context(`Tela Cadastro.`, () => 
{
	var cenario = 1;
    var teste = 1;

	afterEach(() =>
    {
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });

	describe(`Formulário - Etapa 1 - Dados de Novo Usuário.`, () =>
	{
		beforeEach(() =>
		{
			cy.visitaTelaDeCadastro_Hook();
		});

		var complemento = 1;
		describe(`Cenário ${cenario} - Validações do campo título.`, () =>
		{
			it(`Teste ${teste}.${complemento} - Visualização.`, () =>
			{
				cy.formulário();
			});

			it(`Teste ${teste}.${++complemento} - Texto & Deisgner.`, () =>
			{
				cy.formulário_titulo();
			});
		});

		var complemento = 1;
		describe(`Cenário ${++cenario} - Validações do campo nome.`, () =>
		{
			it(`Teste ${++teste}.${complemento} - Visualização.`, () =>
			{
				cy.formulario_CampoNome();
			});

			it(`Teste ${teste}.${++complemento} - Obrigatório.`, () =>
			{
				cy.formulario_CampoNome_Obrigatorio();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas.`, () =>
			{
				cy.formulario_CampoNome_LetrasMaiusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras minúsculas.`, () =>
			{
				cy.formulario_CampoNome_LetrasMinusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas e minúsculas.`, () =>
			{
				cy.formulario_CampoNome_LetrasMaisculasMinusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números.`, () =>
			{
				cy.formulario_CampoNome_Numeros();
			});

			it(`Teste ${teste}.${++complemento} - Digitação caracteres especiais.`, () =>
			{
				cy.formulario_CampoNome_CaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e números.`, () =>
			{
				cy.formulario_CampoNome_LetrasNumeros();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e caracteres especiais.`, () =>
			{
				cy.formulario_CampoNome_LetrasCaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números e caracteres especiais.`, () =>
			{
				cy.formulario_CampoNome_NumerosCaracteresEspeciais();
			});

			//

			it(`Teste ${teste}.${++complemento} - Digitação letras, números e caracteres especiais.`, () =>
			{
				cy.formulario_CampoNome_LetrasNumerosCaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação espaços entre nomes.`, () =>
			{
				cy.formulario_CampoNome_ComEspacos();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 01 caractere.`, () =>
			{
				cy.formulario_CampoNome_UmCaracter();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 30 caracteres.`, () =>
			{
				cy.formulario_CampoNome_TrintaCaracteres();
			});

			it(`Teste ${teste}.${++complemento} - Digitação vazio.`, () =>
			{
				cy.formulario_CampoNome_Vazio();
			});

			it(`Teste ${teste}.${++complemento} - Digitação vazio - Mensagem.`, () =>
			{
				cy.formulario_CampoNome_VazioMensagem();
			});
		});

		var complemento = 1;
		describe(`Cenário ${++cenario} - Validações do campo e-mail.`, () =>
		{
			it(`Teste ${++teste}.${complemento} - Visualização.`, () =>
			{
				cy.formulario_CampoEmail();
			});

			it(`Teste ${teste}.${++complemento} - Obrigatório.`, () =>
			{
				cy.formulario_CampoEmail_Obrigatorio();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaiusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras minúsculas.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMinusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas e minúsculas.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaisculasMinusculas();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números.`, () =>
			{
				cy.formulario_CampoEmail_Numeros();
			});

			it(`Teste ${teste}.${++complemento} - Digitação caracteres especiais.`, () =>
			{
				cy.formulario_CampoEmail_CaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e números.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumeros();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e caracteres especiais.`, () =>
			{
				cy.formulario_CampoEmail_LetrasCaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números e caracteres especiais.`, () =>
			{
				cy.formulario_CampoEmail_NumerosCaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras, números e caracteres especiais.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumerosCaracteresEspeciais();
			});

			it(`Teste ${teste}.${++complemento} - Digitação espaços entre Emails.`, () =>
			{
				cy.formulario_CampoEmail_ComEspacos();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 01 caractere.`, () =>
			{
				cy.formulario_CampoEmail_UmCaracter();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 30 caracteres.`, () =>
			{
				cy.formulario_CampoEmail_TrintaCaracteres();
			});

			it(`Teste ${teste}.${++complemento} - Digitação vazio.`, () =>
			{
				cy.formulario_CampoEmail_Vazio();
			});

			it(`Teste ${teste}.${++complemento} - Digitação vazio - Mensagem.`, () =>
			{
				cy.formulario_CampoEmail_VazioMensagem();
			});

			//Com arroba = @

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaiusculas_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras minúsculas com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMinusculas_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas e minúsculas com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaisculasMinusculas_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números com arroba.`, () =>
			{
				cy.formulario_CampoEmail_Numeros_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação caracteres especiais com arroba.`, () =>
			{
				cy.formulario_CampoEmail_CaracteresEspeciais_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e números com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumeros_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e caracteres especiais com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasCaracteresEspeciais_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números e caracteres especiais com arroba.`, () =>
			{
				cy.formulario_CampoEmail_NumerosCaracteresEspeciais_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras, números e caracteres especiais com arroba.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumerosCaracteresEspeciais_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação espaços entre Emails com arroba.`, () =>
			{
				cy.formulario_CampoEmail_ComEspacos_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 01 caractere com arroba.`, () =>
			{
				cy.formulario_CampoEmail_UmCaracter_ComArroba();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 30 caracteres com arroba.`, () =>
			{
				cy.formulario_CampoEmail_TrintaCaracteres_ComArroba();
			});

			// Com servidor = server.com

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaiusculas_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras minúsculas com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMinusculas_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras maiúsculas e minúsculas com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasMaisculasMinusculas_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_Numeros_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação caracteres especiais com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_CaracteresEspeciais_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e números com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumeros_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras e caracteres especiais com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasCaracteresEspeciais_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação números e caracteres especiais com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_NumerosCaracteresEspeciais_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação letras, números e caracteres especiais com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_LetrasNumerosCaracteresEspeciais_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação espaços entre Emails com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_ComEspacos_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 01 caractere com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_UmCaracter_ComArrobaServer();
			});

			it(`Teste ${teste}.${++complemento} - Digitação 30 caracteres com arroba e com servidor.`, () =>
			{
				cy.formulario_CampoEmail_TrintaCaracteres_ComArrobaServer();
			});

			// Nome e Email preenchidos

			it(`Teste ${teste}.${++complemento} - Preenchimento: Nome e Email vazio.`, () =>
			{
				cy.formulario_CamposNome_EmailVazio();
			});

			it(`Teste ${teste}.${++complemento} - Preenchimento: Nome e Email com arroba sem server.`, () =>
			{
				cy.formulario_CamposNome_EmailComArroba_SemServer();
			});

			it(`Teste ${teste}.${++complemento} - Preenchimento: Nome vazio e Email com arroba com server.`, () =>
			{
				cy.formulario_CamposNome_EmailComArrobaServer_SemUser();
			});

			it(`Teste ${teste}.${++complemento} - Preenchimento: Nome vazio e Email sem arroba sem server.`, () =>
			{
				cy.formulario_CamposNome_EmailSemArroba_SemServer();
			});

			it.only(`Teste ${teste}.${++complemento} - Preenchimento: Nome e Email com sucesso.`, () =>
			{
				cy.formulario_CamposNome_EmailComSucesso();
			});
		});

		var complemento = 1;
		describe(`Cenário ${++cenario} - Validações do botão cadastrar.`, () =>
		{
			it(`Teste ${++teste}.${complemento} - Validar campo botão cadastrar.`, () =>
			{
			
			});
		});
	});

	describe(`Formulário - Etapa 2 - Informações da conta.`, () =>
	{
		var complemento = 1;

		beforeEach(() =>
		{
			cy.preencheDadosNewUser_Hook();
		});

		describe(`Cenário ${cenario} - Validações do ...`, () =>
		{
			it(`Teste ${teste}.${complemento} - ...`, () =>
			{
			
			});

			it(`Teste ${teste}.${++complemento} - ...`, () =>
			{
			
			});
		});
	});
});