/// <reference types= 'cypress' />

describe('Conteúdo 3 - Trabalhando com elementos básicos', () => {
    
    /*before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })*/
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })
    
    it('Aula 1 - Textos', () => {
        //Aqui eu considoro o ('have.text')
        

        cy.get('body').should('contain', 'Cuidado')
        
        cy.get('.facilAchar')
            .should('exist')
            .and('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it('Aula 2 - Links', () => {

        cy.contains('a','Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('a','Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')

    });

    it('Aula 13 - Campos de texto', () => {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value','Cypress test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Área de texto')
            .should('have.value', 'Área de texto')
        
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectAll}acerto', {delay:100})
            .should('have.value', 'acerto')

    });

    it('Aula 14 - Radio', () => {
        cy.get('#formSexoFem')
            .check()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    });

    it('Aula 15 - Checkbox', () => {
        /*cy.get('#formComidaPizza')
            .check()
            .should('be.checked')*/

        //marcando todas as checkboxs de uma vez só
        cy.get("[name='formComidaFavorita']").check({multiple:true})
        cy.get('#formComidaPizza')
            .uncheck()
            .should('not.be.checked')
        cy.get('#formComidaVegetariana')
            .uncheck()
            .should('not.be.checked')
    });

    it('Aula 16 - ComboBoxes', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
    });

    it('Aula 17 - Combos Múltiplos', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['Natacao','Corrida','nada'])
    });

});


describe.skip('Cópia do conteúdo 3 - Trabalhando com elementos básicos', () => {
    
    /*before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })*/
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    it('Externo', () => {
    
    });
})
