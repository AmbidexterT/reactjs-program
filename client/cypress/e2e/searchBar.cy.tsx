
describe('SearchBar Component', () => {
    let initialQuery: string;
    beforeEach(() => {
        cy.visit('http://localhost:3000');


        initialQuery = 'Titanic';
    });

    it('should render with initial query', () => {
        cy.get('.search-input').should('have.value', initialQuery);
    });

    it('should update the query input', () => {
        const newQuery = '2';
        cy.get('.search-input')
            .type(newQuery)
            .should('have.value', initialQuery+newQuery);
    });
});
