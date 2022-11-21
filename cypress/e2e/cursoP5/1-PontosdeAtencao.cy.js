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

    it('Aula 33A - Alerts - CONFIRM - CONFIRMAR', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub*/
        
        //const stub = cy.stub()
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })

    });

    it('Aula 33B - Alerts - CONFIRM - NEGAR', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub*/
        
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Negado')
        })

    });

    it('Aula 34 - Prompt', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub
        Aqui tem mocks*/
        

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
            //Isso é um mock
        })

        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Era 42?')
        })

        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click()


    });

    it.only('Aula 35 - Desafio de mensagem - Nome', () => {
        // Aqui apresenta como conseguir captar alerts.
        /*Interessante isso daqui, eim?
        Aqui tenho sub
        Aqui tem mocks*/
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Vini')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy="dataSobrenome"]').type('Oliv')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexo > tbody > tr > :nth-child(1)').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('have.text','Cadastrado!')

        
        /* Tentei começar como fiz abaixo, e não funcionou
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })*/

    });

});