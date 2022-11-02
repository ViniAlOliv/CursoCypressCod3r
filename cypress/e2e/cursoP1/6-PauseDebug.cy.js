/// <reference types= 'Cypress'/>

describe('O básico de Cypress', () => {
    //Essa aula começa daqui!!!
    //Validação do uso de cy.pause() e cy.debug()
    
    
    it.only('Deve visitar a página e realizar assertiva ao título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contains', 'Campo de Treinamento').debug()

        cy.title()
                .should('be.equal', 'Campo de Treinamento')
                .should('contain', 'Campo')

                //não acredito que usei Contains errado até hoje!!!!!!!!!!!!!!!!!!!!!!!
    });
    
    //Essa aula não usa essa parte!!!
    it.skip('Deve encontrar e interagir com um elemento', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    });


});