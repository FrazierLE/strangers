describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/strangers/', {
      method: 'GET',
      fixture: 'questions.json'
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
  });
  it('Should have a favorites button and go to favorites page when clicked', () => {
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.favorites').click()
    cy.location('pathname').should('eq', '/favorites')
    cy.get('h2').should('have.text', 'Sorry, you have no cards saved to your deck.')
  });
  it('Should go to level page one when level one div is clicked', () => {
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.level-one').click()
    cy.location('pathname').should('eq', '/one')
  });
  it('Should go to level page two when level two div is clicked', () => {
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
    cy.get('.level-two').click()
    cy.location('pathname').should('eq', '/two')
  });
  it('Should go to level page three when level three div is clicked', () => {
    cy.get('[href="/"] > button').should('have.text', 'Home')
    cy.get('.level-three').click()
    cy.location('pathname').should('eq', '/three')
    cy.get('.buttons > :nth-child(2)').click()
    cy.get('.favorites').should('have.text', 'Favorites (1)')
  });
});