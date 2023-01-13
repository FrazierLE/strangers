describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/strangers/', {
      method: 'GET',
      fixture: 'questions.json'
    })
    cy.visit('http://localhost:3000/')
  });
  it('Should have a title', () => {
    cy.get('h1').should('have.text', "We're Not Really Strangers")
  })
  it('Should have 3 boxes with three different levels', () => {
    cy.get('.level-one > h3').should('have.text', 'Level 1')
    cy.get('.level-one > span').should('have.text', 'Perception')
    cy.get('.level-two > h3').should('have.text', 'Level 2')
    cy.get('.level-two > span').should('have.text', 'Connection')
    cy.get('.level-three > h3').should('have.text', 'Level 3')
    cy.get('.level-three > span').should('have.text', 'Reflection')
  });
  it('Should have a home button and a favorites button', () => {
    cy.get('.active > button').should('have.text', 'Home')
    cy.get('.favorites').should('have.text', 'Favorites (0)')
  })
});