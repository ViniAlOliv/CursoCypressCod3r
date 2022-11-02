const { resolve } = require("cypress/types/bluebird")
const { reject } = require("cypress/types/lodash")

it('Hello, miroslav', () => {
    console.log('Olá')
})

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);      
        }, 1000)
    })
}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log('end')
    })
}

system();