import 'cypress-wait-until';

import '../01_Home/home.js';
import '../02_Cadastro/cadastro.js';

Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));