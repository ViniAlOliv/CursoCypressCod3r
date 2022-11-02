/// <reference types='cypress'/>

describe('Helpers', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Aula 30 - Mocks', () => {
        //Chamada para falar de Mocks

        /*Os mocks são falsos dados, ou dados reais fixos, que podemos inserir em um contexto
        para nos trazer o/ um devido valor esperado*/
        
    });

    it('Aula 31 - Alerts', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?*/
        cy.get('#alert').click()

        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
              
        
    });

    it('Aula 32 - Alerts com subs', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub*/
        
        //const stub = cy.stub()
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })

        
    });

    it.only('Aula 33 - Alerts - CONFIRM', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub*/
        
        //const stub = cy.stub()
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })

        
    });

});