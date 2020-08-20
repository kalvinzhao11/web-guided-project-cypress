// function foo(arg){
//     if (arg === 5) return 'five'
//     return 'foo'
// }
// // write tests here
// describe('Quotes App', () =>{
//     describe('Inputs and submit button', ()=>{
//         it('returns the string "foo"', () => {
//             expect(foo()).to.eq('foo') //a single assertion within the test
//             expect(foo()).not.to.eq('bar') //foo doesnt equal bar
//         })
//         it('returns the string "five" if passed a five as an arg', () =>{
//             expect(foo(5)).to.eq('five')
//         })
//     })
// })

describe('Quotes App', () =>{

    describe('Inputs and submit button', ()=>{
        it('can navigate to http://localhost:1234', () => {
            cy.visit('http://localhost:1234/')
            cy.url().should('include', 'localhost')
        })
        it('the submit button is disabled', ()=>{
            //first need to find the submit button
            cy.get('#submitBtn').should('be.disabled') // .not.be.disabled to check for not disabled
        })
        it('can type something in the "text" input', () =>{
            cy.get('input[name="text"]')
                .type('Have fun')
                .should('have.value', 'Have fun')
        })
        it('can type something in the "author" input', () =>{
            cy.get('input[name="author"]')
                .type('Kalvin Zhao')
                .should('have.value', 'Kalvin Zhao') //check to see if input aquires this value
        })
        it('the submit button is enabled', ()=>{
            cy.get('#submitBtn').should('not.be.disabled') //be.enabled also works
        })
        it('cancel button empties out both inputs', () =>{
            cy.get('#cancelBtn').click()
            cy.get('#submitBtn').should('be.disabled')
            cy.get('input[name="text"]')
                .should('have.value', '')
            cy.get('input[name="author"]')
                .should('have.value', '')
        })
    })
})

describe('Quotes App', () =>{

    const textInput = () => cy.get('input[name="text"]')
    const authorInput = () => cy.get('input[name="author"]')
    const submitButton = () => cy.get('#submitBtn')

    describe('Inputs and submit button', ()=>{
        it('can navigate to http://localhost:1234', () => {
            cy.visit('http://localhost:1234/')
        })
        it('can submit a new quote', () =>{
            textInput().type('Have fun')
            cy.get('input[name="author"]').type('Lambda')
            cy.get('#submitBtn').click()
            cy.contains('Have fun (Lambda)').should('exist')
            cy.contains('Have fun (Lambda)').next().next().click()
        })
    })
})

describe('Input, submit button cancel button', ()=> {

})

describe('Submitting a new quote', ()=> {
    
})


describe('Editing an existing quote', ()=> {

    const textInput = () => cy.get('input[name="text"]')
    const authorInput = () => cy.get('input[name="author"]')
    const submitButton = () => cy.get('#submitBtn')

    it('can edit a quote', () =>{
        // add a new one
        textInput().type('Have fun')
        authorInput().type('Lambda')
        submitButton().click()
        // click edit
        cy.contains('Have fun (Lambda)').next().click()
        // add your edit
        textInput().clear().type('Lambda is fun')
        authorInput().clear().type('Lambda School')
        // click submit
        submitButton().click()
        // assert that the edits took
        cy.contains('Lambda is fun (Lambda School)').should('exist')
        // clean after yourself
        cy.contains('Lambda is fun (Lambda School)').next().next().click()
    })
})
