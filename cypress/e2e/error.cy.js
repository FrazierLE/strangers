describe('Error flows', () => {
  it('Should have a error message when a server error occurs', () => {
    cy.intercept('https://strangers-api-lhr3.vercel.app/api/v1/strangers/', {
    method: 'GET',
    fixture: ''
  });
    cy.visit('http://localhost:3000/')
    cy.get('.error-message').should('contain', 'We are sorry, but something has gone wrong. Please try again later.')
  })
  it('Should have a title when a bad url is given', () => {
    cy.intercept('https://strangers-api-lhr3.vercel.app/api/v1/strangers/', {
      method: 'GET',
      fixture: '../fixtures/questions.json'
    });
    cy.visit('http://localhost:3000/vibe')
    cy.get('.App > :nth-child(2)').should('have.text', "We're Not Really Strangers")
    cy.get('.status').contains(404)
    cy.get('h2').should('have.text', 'Page not found.')
    cy.get('button').should('have.text', 'Home')
    cy.get('button').should('have.text', 'Home').click()
    cy.location('pathname').should('eq', '/')
    cy.get('.level-one > h3').should('have.text', 'Level 1')
    cy.get('.level-one > span').should('have.text', 'Perception')
    cy.get('.level-two > h3').should('have.text', 'Level 2')
    cy.get('.level-two > span').should('have.text', 'Connection')
    cy.get('.level-three > h3').should('have.text', 'Level 3')
    cy.get('.level-three > span').should('have.text', 'Reflection')
    cy.get('.rules').should('contain', 'There are two ways to play this game:')
      .and('contain', '1. play safe')
      .and('contain', '2. play to grow')
      .and('contain', 'The second is how you win.')
  })
})