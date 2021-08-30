describe('Movie info flows', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});