describe('User Movie Info Page Flows', () => {
  beforeEach(() => {
    cy.loadSingleMovieInfo();
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

    // it('Should render an iframe with an embedded youtube video that can be clicked', () => {
        
    // })

    // it('It should display a go back button that when clicked returns user to home page', () => {
      
    // })

  });


});
