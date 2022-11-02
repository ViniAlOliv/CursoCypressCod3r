/// <reference types='cypress'/>

describe('Esperas e sincronismo', () => {
    
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
    
    
    it('Aula 18 - Deve aguardar elemento estar disponível', () => {
        //Aguardar o próprio Cypress
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
            .should('have.value','Resposta Demorada')
        
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('Esperei')
            
    });

    it('Aula 19 - Retentativas', () => {
        //Aguardar o próprio Cypress
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
            .should('have.value','Resposta Demorada')
        
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('Esperei')
            
    });

    it('Aula 20 - Cuidado com o que busca...', () => {
        cy.get('#buttonList').click()
        
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')
        /*cy.get('#lista li')
            .find('span')
            .should('contain','Item 2')*/
        cy.get('#lista li span')
            .should('contain','Item 2')
    });

    it('Aula 20 - Button list DOM', () => {
        cy.get('#buttonListDOM').click()
        
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')
        /*cy.get('#lista li')
            .find('span')
            .should('contain','Item 2')*/
        cy.get('#lista li span')
            .should('contain','Item 2')
    });

    it('Aula 21 - Wait e Timeout', () => {
        /*cy.get('#buttonDelay').click()
            .should('have.value','Resposta Demorada')
        
        cy.get('#novoCampo', {timeout: 3000}).should('exist')*/
        cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        cy.get('#lista li span',{timeout:30000})
            .should('contain','Item 2')
    });

    it('Aula 21 - Timeout: Aguardando dados', () => {
        /*cy.get('#buttonDelay').click()
            .should('have.value','Resposta Demorada')
        
        cy.get('#novoCampo', {timeout: 3000}).should('exist')*/
        cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    });

    it('Aula 22 - Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '11') 
    });

    it('Aula 23 - Sync título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contains', 'Campo de Treinamento')

        cy.title()
                .should('be.equal', 'Campo de Treinamento')
                .should('contain', 'Campo')

        //cy.title().debug()

        //Conceito de promisses
        cy.title().then(title => {
            console.log(title)
        })
    });

    it.only('Aula 24 - Should Vs Then', () => {
        cy.get('#buttonListDOM').click()
        //cy.get('#lista li span').debug()

        //Utilizando then
        //O then aguarda a execução para depois executar
        //Para novas buscas dentro de um elemento, use Then
        cy.get('#lista li span').then($el => {//Elemento HTML capturado
            console.log($el)
            expect($el).to.have.length(1)
        })

        //Utilizando should
        //O should fica sendo executado ao longo da espera, retentando tudo
        /*cy.get('#lista li span').should($el => {//Elemento HTML capturado
            console.log($el)
            expect($el).to.have.length(1)
        })*/
    });
});