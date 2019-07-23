describe("Registration form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shoud register the user", () => {
    cy.contains("Register").should("be.disabled");

    cy.contains("Your email").click();
    cy.focused().type("john.doe@email.com");
    cy.contains("Register").should("be.disabled");

    cy.contains("Your user name").click();
    cy.focused().type("john_doe");
    cy.contains("Register").should("be.disabled");

    cy.contains("Your password").click();
    cy.focused().type("my-password");
    cy.contains("Register").should("be.disabled");

    cy.contains("Confirm your password").click();
    cy.focused().type("my-pass");
    cy.contains("Register").should("be.disabled");

    cy.focused().type("word");
    cy.contains("Register").should("be.enabled");

    cy.contains("Register").click();
  });
});
