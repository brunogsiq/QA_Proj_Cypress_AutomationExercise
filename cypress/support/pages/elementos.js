export class telaHome
{
    get buttonHome() {
        return cy.get('.navbar-nav > li > a').eq(0);
    };

    get logotipo() {
        return cy.get("[alt='Petlov']");
    }

    get buttonSignup() {
        return cy.get('[href="/login"]');
    };
};

export class telaCadastro_NewUser
{
    get formulario() {
        return cy.get('.signup-form');
    };

    get formulario_Titulo() {
        return cy.get('.signup-form > h2');
    };

    get formulario_Titulo_Texto() {
        return 'New User Signup!';
    };

    get inputNome() {
        return cy.get('[data-qa="signup-name"]');
    };

    get inputNome_Placeholder() {
        return 'Name';
    };

    get inputEmail() {
        return cy.get('[data-qa="signup-email"]')
    };

    get inputEmail_Placeholder() {
        return 'Email Address';
    };

    get buttonCadastrar() {
        return cy.get('[data-qa="signup-button"]');
    };

    get buttonCadastrar_Placeholder() {
        return 'Signup';
    };
};

export class telaCadastro_AccountInfo
{
    get formulario() {
        return cy.get('.login-form');
    };

    get formulario_Titulo() {
        return cy.get('.login-form > h2');
    };

    get formulario_Titulo_Texto() {
        return 'Enter Account Information';
    };

    get identificacao () {
        return cy.get('.clearfix');
    };

    get identificacao_Texto() {
        return 'Title';
    };

    get identificacao_Opcao_Mr() {
        return cy.get('.radio-inline').eq(0);
    };

    get identificacao_Opcao_Mr_Texto() {
        return 'Mr.';
    }

    get identificacao_Opcao_Mr_Check() {
        return cy.get('#id_gender1');
    };

    get identificacao_Opcao_Mrs() {
        return cy.get('.radio-inline').eq(1);
    };

    get identificacao_Opcao_Mrs_Texto() {
        return 'Mrs.';
    }

    get identificacao_Opcao_Mrs_Check() {
        return cy.get('#id_gender2');
    };

    get label_Name() {
        return cy.get('[for="name"]');
    }

    get label_Name_Texto() {
        return 'Name *';
    };

    get input_Name() {
        return cy.get('[data-qa="name"]');
    };

    get label_Email() {
        return cy.get('[for="email"]');
    };

    get label_Email_Texto() {
        return 'Email *';
    };

    get input_Email() {
        return cy.get('[data-qa="email"]');
    };

    get label_Password() {
        return cy.get('[for="password"]');
    };

    get label_Password_Texto() {
        return 'Password *';
    };

    get input_Passworda() {
        return cy.get('[data-qa="password"]');
    };

    get label_DateOfBirth() {
        return cy.get('.form-group > label').eq(3);
    };

    get label_DateOfBirth_Texto() {
        return 'Date of Birth';
    };

    get dateOfBirth() {
        return cy.get('.form-group > .row');
    } 

    get dateOfBirth_Day() {
        return cy.get('[data-qa="days"] > option').eq(0);
    };

    get dateOfBirth_Day_Texto() {
        return 'Day';
    };

    get dateOfBirth_Month() {
        return cy.get('[data-qa="months"] > option').eq(0);
    };

    get dateOfBirth_Month_Texto() {
        return 'Month';
    };

    get newlaters() {
        return cy.get('.checkbox').eq(0);
    };

    get newlaters_Texto() {
        return 'Sign up for our newsletter!';
    };

    get newlaters_Check() {
        return cy.get('#newsletter');
    };

    get specialOffers() {
        return cy.get('.checkbox').eq(1);
    };

    get specialOffers_Texto() {
        return 'Receive special offers from our partners!';
    };

    get specialOffers_Check() {
        return cy.get('#optin');
    };

    get etapa_Adress() {
        return cy.get('.text-center > b').eq(1);
    };

    get etapa_Adress_Texto() {
        return 'Address Information';
    };

    get label_FirstName() {
        return cy.get('[for="first_name"]');
    };

    get label_FirstName_Texto() {
        return 'First Name *';
    };

    get input_FirstName() {
        return cy.get('[data-qa="first_name"]');
    };

    get label_LastName() {
        return cy.get('[for="last_name"]');
    };

    get label_LastName_Texto() {
        return 'Last Name *';
    };

    get input_LastName() {
        return cy.get('[data-qa="Last_name"]');
    };

    get label_Company() {
        return cy.get('[for="company"]');
    };

    get label_Company_Texto() {
        return 'Company';
    };

    get input_Company() {
        return cy.get('[data-qa="company"]');
    };

    get label_Address() {
        return cy.get('[for="address1"]');
    };

    get label_Address_Texto() {
        return 'Address * (Street address, P.O. Box, Company name, etc.)';
    };

    get input_Address() {
        return cy.get('[data-qa="address"]');
    };

    get label_Address2() {
        return cy.get('[for="address2"]');
    };

    get label_Address2_Texto() {
        return 'Address2';
    };

    get input_Address2() {
        return cy.get('[data-qa="address2"]');
    };

    get label_Country() {
        return cy.get('[for="country"]');
    };

    get label_Country_Texto() {
        return 'Country *';
    };

    get select_Country() {
        return cy.get('[data-qa="country"]');
    };

    get label_State() {
        return cy.get('[for="state"]');
    };

    get label_State_Texto() {
        return 'State';
    };

    get input_State() {
        return cy.get('[data-qa="state"]');
    };

    get label_City() {
        return cy.get('[for="city"]');
    };

    get label_City_Texto() {
        return 'City';
    };

    get input_City() {
        return cy.get('[data-qa="city"]');
    };

    get label_Zipcode() {
        return cy.get('[for="zipcode"]');
    };

    get label_Zipcode_Texto() {
        return 'Zipcode';
    };

    get input_Zipcode() {
        return cy.get('[data-qa="zipcode"]');
    };

    get label_MobileNumber() {
        return cy.get('[for="mobile_number"]');
    };

    get label_MobileNumber_Texto() {
        return 'Mobile Number *';
    };

    get input_MobileNumber() {
        return cy.get('[data-qa="mobile_number"]');
    };

    get button_CreateAccount() {
        return cy.get('[data-qa="create-account"]');
    };

    get button_CreateAccount_Texto() {
        return 'Create Account';
    };
};