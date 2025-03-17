describe("Login Test", () => {
  beforeEach(() => {
    // cy.log("Base URL:", Cypress.config("baseUrl")); // Log baseUrl ke Cypress UI
    cy.visit("/login"); // Gunakan baseUrl otomatis dari Cypress.config
  });

  // it("should successfully log in with valid user credentials", () => {
  //   cy.contains('No. Telepon').should('be.visible')
  //   cy.get('input[name="username"]').type(Cypress.env("user").email);
  //   cy.get('input[name="password"]').type(Cypress.env("user").password);
  //   cy.get('button[type="submit"]').click();
  //   cy.url().should("include", "/");
  // });
  it("log in blockerd with invalid user credentials", () => {
    cy.contains('No. Telepon').should('be.visible')
    cy.get('input[name="username"]').type(Cypress.env("admin").email);
    cy.get('input[name="password"]').type(Cypress.env("admin").password);
    cy.get('button[type="submit"]').click();
    cy.wait(3000);  // Tunggu 3 detik
    cy.get('div.snackbar.show.error')
  .should('be.visible'); // Pastikan elemen terlihat di UI

  });
});