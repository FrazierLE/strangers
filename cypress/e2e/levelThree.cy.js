const qOne = ["What was your first impression of me?", "What do you think is the hardest part of what I do for a living"]
const qThree = ["If we were in a band, what would our name be?","Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?"]

describe('User flows through the page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/strangers/', {
      method: 'GET',
      fixture: '../fixtures/questions.json'
    });
    cy.visit('http://localhost:3000/')
    cy.get('.level-three').click()
  });
  it('Should display level one card after the click on home', () => {
    cy.get('h1').should('have.text', "We're Not Really Strangers")
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qThree[0])) {
        cy.get('.randomQuestion').should('contain.text', qThree[0])
      } else {cy.get('.randomQuestion').should('contain.text', qThree[1])}
    })
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question')
    cy.get('[href="/two"] > button').should('have.text', 'Level Two')
    cy.get('[href="/one"] > button').should('have.text', 'Level One')
  });
  it('Should allow the user to generate a new level one question by clicking next question button', () => {
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qThree[0])) {
        cy.get('.randomQuestion').should('contain.text', qThree[0])
      } else {cy.get('.randomQuestion').should('contain.text', qThree[1])}
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question').click()
    cy.get('.randomQuestion').then(($randomQuestion) => {
      if ($randomQuestion.text().includes(qThree[0])) {
        cy.get('.randomQuestion').should('contain.text', qThree[0])
      } else {cy.get('.randomQuestion').should('contain.text', qThree[1])} 
    })
  });
  it('Should allow the user to save a level one question by clicking save question button', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)')
 });
 it('Should allow the user to change levels of questions', () => {
  cy.get('[href="/one"] > button').should('have.text', 'Level One').click()
  cy.location('pathname').should('eq', '/one')
  cy.get('.randomQuestion').then(($randomQuestion) => {
    if ($randomQuestion.text().includes(qOne[0])) {
      cy.get('.randomQuestion').should('contain.text', qOne[0])
    } else {
      cy.get('.randomQuestion').should('contain.text', qOne[1])
    }
  })
 });
})
})