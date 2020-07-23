// write tests here
describe('Inputs and submit button', () => {
  it('can navigate to the site', () => {
    // this is setup for the actual test
    cy.visit('http://localhost:1234')
    // assert that the site we landed at is the correct one
    cy.url().should('include', 'localhost')
  })

  it('submit button is disabled', () => {
    // grab the element
    // check that it's actually disabled
    cy.get('#submitBtn').should('be.disabled')
  })

  it('can type a text for a new quote', () => {
    // grab element (in itself is a test)
    // type something with cy
    // assert that the value of the input is the thing we typed
    cy.get('input[name="text"]')
      .type('Have Fun!')
  })
})

describe('Adding a new quote', () => {
  // tests here
})
