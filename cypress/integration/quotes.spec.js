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
      .should('have.value', 'Have Fun!')
  })

  it("Can type in an author", () => {
    cy.get('input[name="author"]')
      .type("My new author")
      .should('have.value', "My new author")
  })

  it('the submit button is not disabled any more', () => {
    cy.get('#submitBtn').should('not.be.disabled')
  })

  it('can cancel the new quote', () => {
    // grab the submit button
    // click the submit button
    // assert the inputs are back to blank and the button back to disabled
    cy.get('#cancelBtn').click()

    cy.get('input[name="text"]').should('have.value', '')    // assertion 1
    cy.get('input[name="author"]').should('have.value', '')  // assertion 2
    cy.get('#submitBtn').should('be.disabled')               // assertion 3
  })
})

describe('Adding a new quote', () => {
  it('can navigate to the site', () => {
    // repeat minus the check
  })

  it('can submit a quote', () => {
    // filling out the form and submit it
    // assert that a quote with the given text and author are in the DOM
  })
})
