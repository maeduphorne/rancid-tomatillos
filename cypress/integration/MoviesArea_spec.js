describe('Movie area flows', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should have a header with text Rancid Tomatillos on load', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  });

  it('should be able to fill out the movie area with movie posters', () => {
    cy.intercept({
    method: 'GET',
    url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    })
    cy.get('div[class="movie-card"]').find("img").should('be.visible');
  });

    it('should be able to return error if api fails', () => {
    cy.intercept({
    method: 'GET',
    url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    },
    {
    statusCode: 404,
    })
    .visit('http://localhost:3000')
    .get('h2').contains('Oops! Looks like something went wrong')
  });

});