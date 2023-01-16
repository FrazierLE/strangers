const qOne = ["What was your first impression of me?", "What do you think is the hardest part of what I do for a living"]
const qTwo = ["What question did this year leave you with?","What about yourself is hardest to admit?"]
const qThree = ["If we were in a band, what would our name be?","Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?"]

describe('User flows through the page', () => {
  beforeEach(() => {
    cy.intercept('https://strangers-api-lhr3.vercel.app/api/v1/strangers/', {
      method: 'GET',
      fixture: '../fixtures/questions.json'
    });
    cy.visit('http://localhost:3000/')
  });
  it('Should have a title', () => {
    cy.get('h1').should('have.text', "We're Not Really Strangers")
  });
  it('Should have 3 boxes with three different levels', () => {
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
  });
  it('Should have a favorites button and go to favorites page when clicked', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.favorites').click()
    cy.location('pathname').should('eq', '/favorites')
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('h1').should('have.text', "We're Not Really Strangers")
    cy.get('h2').should('have.text', 'Sorry, you have no cards saved to your deck.')
  });
  it('Should go to level page one when level one div is clicked', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.level-one').click()
    cy.location('pathname').should('eq', '/one')
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qOne[0])) {
        cy.get('.randomQuestion').should('contain.text', qOne[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qOne[1])
      }
    })
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question')
    cy.get('[href="/two"] > button').should('have.text', 'Level Two')
    cy.get('[href="/three"] > button').should('have.text', 'Level Three')
  });
  it('Should go to level page two when level two div is clicked', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.level-two').click()
    cy.location('pathname').should('eq', '/two')
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qTwo[0])) {
        cy.get('.randomQuestion').should('contain.text', qTwo[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qTwo[1])
      }
    })
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question')
    cy.get('[href="/one"] > button').should('have.text', 'Level One')
    cy.get('[href="/three"] > button').should('have.text', 'Level Three')
  });
  it('Should go to level page three when level three div is clicked', () => {
    cy.get('.level-three').click()
    cy.location('pathname').should('eq', '/three')
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qThree[0])) {
        cy.get('.randomQuestion').should('contain.text', qThree[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qThree[1])
      }
    })
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question')
    cy.get('[href="/two"] > button').should('have.text', 'Level Two')
    cy.get('[href="/one"] > button').should('have.text', 'Level One')
    cy.get('.buttons > :nth-child(2)').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)').click()
    cy.get('.favorite-card').then(($favorite_card) => {
      if ($favorite_card.text().includes(qThree[0])) {
        cy.get('.favorite-card').should('contain.text', qThree[0])
      } else {
        cy.get('.favorite-card').should('contain.text', qThree[1])
      }
    })
    cy.get('.delete').contains('X')
  });
});