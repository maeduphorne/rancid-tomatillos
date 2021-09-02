describe('User Movie Info Page Flows', () => {
  beforeEach(() => {
    cy.loadSingleMovieInfo();
    // cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
    // .visit('http://localhost:3000/694919')
  });

describe('Movie Info is Loading Status', () => {

    it('Should display a loading message while fetching movie data', () => {
      cy.get('.loading')
        .should('contain', 'Loading')
        .should('be.visible')
    });

  });

  describe('Movie Info Display', () => {

    it('Should render all data for the movie info display', () => {
      cy.get('.title').contains('Money Plane')
      .get('.backdrop').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')


    });

    it('Should render an iframe with an embedded youtube video that can be clicked', () => {
        cy.get('iframe').should('have.attr', 'src', 'https://www.youtube.com/embed/aETz_dRDEys')
    })

    it('It should display a go back button that when clicked returns user to home page', () => {
      cy.get('.home-btn')
            .click()
            // cy.loadMain()
            .url().should('eq', 'http://localhost:3000/')
            .url().should('not.eq', 'http://localhost:3000/694919');
    })

  });


});
