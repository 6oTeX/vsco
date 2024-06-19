describe("VSCO App E2E Tests", () => {
  const baseUrl = "http://localhost:3000/";
  const email = "testuser@example.com"; // Use a unique email for testing
  const password = "password123";
  const postContent =
    "https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/662acf7ed965e475858aa118_hp-quality-tools-cover%402x-p-500.jpg";
  const updatedPostContent =
    "https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/662b6e77a24d2246a8d1e050_home-scrolling-asset-02%402x-p-500.jpg";
  const username = "testuser";
  const dateOfBirth = "2000-01-01"; // Format: YYYY-MM-DD

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("should register a new user, fill in user details, log out and log back in", () => {
    // Register new user
    cy.visit(`${baseUrl}auth`);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Fill in user details
    cy.url().should("include", "details");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="dateOfBirth"]').type(dateOfBirth);
    cy.get('button[type="submit"]').contains("Save Details").click();
    cy.url().should("include", "home");

    // Log out
    cy.contains("Logout").click();
    cy.contains("Login").click();
    cy.url().should("include", "login");

    // Log back in
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "home");
  });

  it("should log in an existing user", () => {
    cy.visit(`${baseUrl}login`);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "home");
  });

  it("should create a new post", () => {
    cy.login(email, password);
    cy.visit(`${baseUrl}explore`);
    cy.get('input[name="content"]').type(postContent);
    cy.get('button[type="submit"]').contains("Create Post").click();
    cy.get(`img[src="${postContent}"]`).should("exist");
  });

  it("should edit a post", () => {
    cy.login(email, password);
    cy.visit(`${baseUrl}explore`);
    cy.get(`img[src="${postContent}"]`)
      .parents("div")
      .first()
      .within(() => {
        cy.contains("Edit").click();
      });
    cy.get('input[name="editContent"]').clear().type(updatedPostContent);
    cy.contains("Update").click();
    cy.get(`img[src="${updatedPostContent}"]`).should("exist");
  });

  it("should delete a post", () => {
    cy.login(email, password);
    cy.visit(`${baseUrl}explore`);
    cy.get(`img[src="${updatedPostContent}"]`)
      .parents("div")
      .first()
      .within(() => {
        cy.contains("Delete").click();
      });
    cy.get(`img[src="${updatedPostContent}"]`).should("not.exist");
  });
});

// Helper function to log in
Cypress.Commands.add("login", (email, password) => {
  const baseUrl = "http://localhost:3000/";
  cy.visit(`${baseUrl}login`);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "home");
});
