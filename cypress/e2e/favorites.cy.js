const qOne = ["What was your first impression of me?", "What do you think is the hardest part of what I do for a living"]

describe('User flows through the page', () => {
  beforeEach(() => {
    cy.intercept('https://strangers-api-lhr3.vercel.app/api/v1/strangers/', {
      method: 'GET',
      fixture: '../fixtures/questions.json'
    });
    cy.visit('http://localhost:3000/favorites')
  });
  it('Should have a favorites button and go to favorites page when clicked', () => {
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('h1').should('have.text', "We're Not Really Strangers")
    cy.get('h2').should('have.text', 'Sorry, you have no cards saved to your deck.')
  });
  it('Should go to homepage if home button is clicked', () => {
    cy.get('[href="/"] > button').should('have.text', 'Home').click()
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('h1').should('have.text', "We're Not Really Strangers")
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
    cy.get('.level-one').click()
    cy.location('pathname').should('eq', '/one')
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qOne[0])) {
        cy.get('.randomQuestion').should('contain.text', qOne[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qOne[1])
      }
    })
    cy.get('[href="/two"] > button').should('have.text', 'Level Two')
    cy.get('[href="/three"] > button').should('have.text', 'Level Three')
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)')
    cy.get('.favorites').should('have.text', 'Favorites (1)').click()
    cy.location('pathname').should('eq', '/favorites')
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorite-card').then(($favorite_card) => {
      if ($favorite_card.text().includes(qOne[0])) {
        cy.get('.favorite-card').should('contain.text', qOne[0])
      } else {
        cy.get('.favorite-card').should('contain.text', qOne[1])
      }
    })
    cy.get('.delete').contains('X')
    cy.get('.delete').contains('X').click()
    cy.get('h2').should('have.text', 'Sorry, you have no cards saved to your deck.')
  });
})