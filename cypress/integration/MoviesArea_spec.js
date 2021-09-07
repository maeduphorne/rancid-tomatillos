describe('User Movie Area Flows', () => {
    beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .visit('http://localhost:3000/')
  });

  describe('Main Page Render', () => {

  it('Should have a header with text Rancid Tomatillos on load', () => {
    cy.get('.title').contains('Rancid Tomatillos')
  });

  it('Should be able display all movies in dataset in the movie area with movie posters', () => {
    cy.get('.movie-card').find("img").should('be.visible').should('have.length', 40)
  });

    it('Should be able to click first movie card, should update url to matching path and display details', () => {
        cy.get('.movie-card')
            .first().click()
            cy.loadSingleMovieInfo()
            .url().should('eq', 'http://localhost:3000/694919')
            .url().should('not.eq', 'http://localhost:3000/');
    })

    it("Should contain a search bar", () => {
    cy.get('form input[placeholder="Start Typing a Movie Title to Search"]')
        .get('form input[type="text"]')
        .get('form input[name="search"]')
    })

});

  describe('Status Errors on Main Page Load', () => {

    it('Should display error message for 500 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500
      })
      cy.visit('http://localhost:3000/')
        .contains('h2', 'Oops! Looks like something went wrong')
    })

    it('Should display error message for 404 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404
      })
      cy.visit('http://localhost:3000/')
        .contains('h2', 'Oops! Looks like something went wrong')
    })

    it('Should display error message for 400 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 400
      })
      cy.visit('http://localhost:3000/')
        .contains('h2', 'Oops! Looks like something went wrong')
    })

  });
});