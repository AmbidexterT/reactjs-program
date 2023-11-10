describe('GenreList Component', () => {
  let movieTitle: string;
  beforeEach(() => {
    movieTitle = 'Blockers';
    cy.visit('http://localhost:3000');
  });

  it('should select a genre when clicked', () => {
    cy.get('.default-tab').eq(0).click();
    cy.get('.default-tab.primary-border').should('have.text', 'Genre1');
  });

  it('should change sorting when a different option is selected', () => {
    cy.get('select').select('Date');
    cy.get('select').should('have.value', 'Date');
  });

  it('should change genre when a different genre is selected', () => {
    cy.get('.default-tab').eq(0).click();
    cy.get('.default-tab').eq(1).click();
    cy.get('.default-tab.primary-border').should('have.text', 'Genre2');
  });

  it('should search for a movie', () => {
    cy.get('.search-input').type(movieTitle);
    cy.get('.search-button').click();
    cy.get('.movie-title').should('contain', movieTitle);
  });

  it('should select a movie and return back to search', () => {
    cy.get('.search-input').type(movieTitle);
    cy.get('.search-button').click();

    cy.get('.movie-title').click();
    cy.get('.movie-details').should('be.visible');

    cy.get('.back-button').click();
    cy.get('.search-input').should('have.value', 'movieTitle');
  });
});
