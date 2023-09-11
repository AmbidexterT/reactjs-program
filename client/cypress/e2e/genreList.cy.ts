import React from 'react';
import { mount } from '@cypress/react18';
import GenreList, { GenreListProps } from '../../src/components/GenreList/GenreList';

describe('GenreList Component', () => {
  const genreNames = ['Action', 'Adventure', 'Comedy', 'Drama'];
  const selectedGenre = 'Action';

  beforeEach(() => {
    mount(
      <GenreList
        genreNames={genreNames}
        selectedGenre={selectedGenre}
        onSelect={() => {}}
      />
    );
  });

  it('should select a genre when clicked', () => {
    cy.contains(selectedGenre).click();
    cy.contains(selectedGenre).should('have.class', 'border-primary text-primary');
  });

  it('should trigger sort change event', () => {
    const selectedSortOption = 'Rating';
    cy.get('select').select(selectedSortOption);
    cy.get('@onSortChange').should('have.been.calledWith', selectedSortOption);
  });

  it('should have the default sort option selected', () => {
    const defaultSortOption = 'Genres';
    cy.get('select').should('have.value', defaultSortOption);
  });
});
