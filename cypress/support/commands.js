// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import allMoviesData from '../fixtures/movies-data.json';
import movieInfoData from '../fixtures/movie-info-data.json';

const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

Cypress.Commands.add('loadMain', () => {
  cy.intercept(baseURL, allMoviesData)
    .visit('http://localhost:3000/')
})

Cypress.Commands.add('loadSingleMovieInfo', () => {
  cy.intercept(`${baseURL}/694919`, movieInfoData)
    .visit('http://localhost:3000/694919')
});
