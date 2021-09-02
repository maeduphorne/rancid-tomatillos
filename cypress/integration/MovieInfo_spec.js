describe('User Movie Info Page Flows', () => {
  beforeEach(() => {
    cy.loadSingleMovieInfo();
  });

describe('Movie Info is Loading Status', () => {

    it('Should display a loading page while fetching movie data', () => {
      cy.get('div')
        .should('contain', 'Loading')
        .should('be.visible')
    });

    it('Should remove loading message once movie info have loaded', () => {
      cy.get('div').should('not.exist')
    });

  });

  describe('Movie Info Display', () => {

    it('Should render all data for the movie info display', () => {
      
    });

  });


});
