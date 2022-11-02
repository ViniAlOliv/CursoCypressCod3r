/// <reference types='cypress'/>

describe('Helpers', () => {
    it('Aula 25 - Wraps - ou encapsulamento de objeto', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //obj.should('have.property','nome') //aqui dá erro
        cy.wrap(obj).should('have.property','nome') //aqui eu encapsulo o objeto obj

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        /*cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona?')
        })*/

        /*const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500) a
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))*/
    });

    it('Aula 26 - Its', () => {
        //Its => pega uma PROPRIEDADE do objeto
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property','nome', 'User') //aqui eu encapsulo o objeto obj
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: { rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    });

    it('Aula 27 - Invoke', () => {
        //Invoke trabalha com funções
        const getValue = () => 1;
        const soma = (a,b) => a + b; 

        cy.wrap({ fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({ fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert','Dá pra ver')
        cy.get('#resultado')
            .invoke('html', '<input type="button", value="hached!"/>')
    });

    it('Aula 28 - Dívida título...', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
                .and('contains', 'Campo')


        let syncTitle

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy="dataSobrenome"]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    });

    it('Aula 29 - Combos', () => {
        
    });
});