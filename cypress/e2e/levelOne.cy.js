const qOne = ["What was your first impression of me?", "What do you think is the hardest part of what I do for a living"]
const qTwo = ["What question did this year leave you with?","What about yourself is hardest to admit?"]

describe('User flows through the page', () => {
  beforeEach(() => {
    cy.intercept('https://strangers-api-lhr3.vercel.app/api/v1/strangers/', {
      method: 'GET',
      fixture: '../fixtures/questions.json'
    });
    cy.visit('http://localhost:3000/')
    cy.get('.level-one').click()
  });
  it('Should display level one card after the click on home', () => {
    cy.get('h1').should('have.text', "We're Not Really Strangers")
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
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
  it('Should allow the user to generate a new level one question by clicking next question button', () => {
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qOne[0])) {
        cy.get('.randomQuestion').should('contain.text', qOne[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qOne[1])
      }
    })
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question').click()
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qOne[0])) {
        cy.get('.randomQuestion').should('contain.text', qOne[0])
      } else {
        cy.get('.randomQuestion').should('contain.text', qOne[1])
      }
    })
  });
  it('Should allow the user to save a level one question by clicking save question button', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)')
 });
 it('Should allow the user to change levels of questions', () => {
  cy.get('[href="/two"] > button').should('have.text', 'Level Two').click()
  cy.location('pathname').should('eq', '/two')
  cy.get('.randomQuestion').then(($randomQuestion) => {
    if ($randomQuestion.text().includes(qTwo[0])) {
      cy.get('.randomQuestion').should('contain.text', qTwo[0])
    } else {
      cy.get('.randomQuestion').should('contain.text', qTwo[1])
    }
  })
 });
});