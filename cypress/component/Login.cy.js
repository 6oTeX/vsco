// Import necessary modules and components
import React from 'react';
import { mount } from 'cypress/react18';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../../src/login'; // Adjust the path as necessary
import * as firebaseAuth from 'firebase/auth'; // Adjust the path as necessary

describe('Login Component', () => {
  beforeEach(() => {
    // Mock Firebase auth functions
    cy.stub(firebaseAuth, 'signInWithEmailAndPassword').callsFake((auth, email, password) => {
      if (email === 'testuser@example.com' && password === 'password123') {
        return Promise.resolve({
          user: {
            uid: 'testuid',
            email,
          },
        });
      } else {
        return Promise.reject(new Error('Invalid credentials'));
      }
    });
  });

  it('should log in a user with valid credentials', () => {
    // Mount the Login component
    mount(
      <Router>
        <Login />
      </Router>
    );

    // Fill in the login form
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to the home page
    cy.url().should('include', '/home');
  });

  it('should display an error message for invalid credentials', () => {
    // Mount the Login component
    mount(
      <Router>
        <Login />
      </Router>
    );

    // Fill in the login form with invalid credentials
    cy.get('input[name="email"]').type('invaliduser@example.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();

    // Assert that the error message is displayed
    cy.contains('Invalid email or password. Please try again.').should('be.visible');
  });
});
