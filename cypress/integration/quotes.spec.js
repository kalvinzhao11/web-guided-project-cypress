// write tests here
describe('Inputs and submit button', () => {
  it('can navigate to the site', () => {
    // this is setup for the actual test
    cy.visit('http://localhost:1234')
    // assert that the site we landed at is the correct one
    cy.url().should('include', 'localhost')
  })

  it('submit button is disabled', () => {
    // this is another test
  })
})

describe('Adding a new quote', () => {
  // tests here
})
