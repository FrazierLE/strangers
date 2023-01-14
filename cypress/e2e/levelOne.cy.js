describe('User flows through the page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/strangers/', {
      method: 'GET',
      fixture: 'questions.json'
    });
    cy.visit('http://localhost:3000/')
    cy.get('.level-one').click()
  });
  it('Should display level one card after the click on home', () => {
    cy.get('h1').should('have.text', "We're Not Really Strangers")
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.randomQuestion')
    //INSERT RANDOM FUNCTIONALITY HERE
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question')
    cy.get('[href="/two"] > button').should('have.text', 'Level Two')
    cy.get('[href="/three"] > button').should('have.text', 'Level Three')
  });
  it('Should allow the user to generate a new level one question by clicking next question button', () => {
     //INSERT RANDOM FUNCTIONALITY HERE
    cy.get('.randomQuestion') //.should('have.text', '')
    cy.get('.buttons > :nth-child(1)').should('have.text', 'Next Question').click()
    cy.get('.randomQuestion') //.should('have.text', '')
  });
  it('Should allow the user to save a level one question by clicking save question button', () => {
    //INSERT RANDOM FUNCTIONALITY HERE
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.buttons > :nth-child(2)').should('have.text', 'Save Question').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)')
 });
 it('Should allow the user to change levels of questions', () => {
  cy.get('[href="/two"] > button').should('have.text', 'Level Two').click()
  cy.location('pathname').should('eq', '/two')
  cy.get('.randomQuestion')
  ////INSERT RANDOM FUNCTIONALITY HERE
 });
});