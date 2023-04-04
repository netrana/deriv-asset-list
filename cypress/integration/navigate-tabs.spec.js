/// <reference types="cypress" />

describe('Home page', () => {
  describe('Verify markets are rendered as tabs', () => {
    it('Go To Home page', () => {
      cy.visit("http://localhost:3000");
      cy.contains('Forex');
    });    
  });
});
