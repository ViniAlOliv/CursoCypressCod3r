/// <reference types= 'Cypress'/>

describe('O básico de Cypress', () => {
    it.skip('Deve visitar a página e realizar assertiva ao título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contains', 'Campo de Treinamento')

        cy.title()
                .should('be.equal', 'Campo de Treinamento')
                .should('contain', 'Campo')

                //não acredito que usei Contains errado até hoje!!!!!!!!!!!!!!!!!!!!!!!
    });
 //Essa aula começa daqui!!!
    it.only('Deve encontrar e interagir com um elemento', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    });


});