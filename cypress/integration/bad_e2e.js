describe("Registration form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shoud register the user", () => {
    cy.get("button[type=submit]").should("be.disabled");

    cy.get("input#email").type("john.doe@email.com");
    cy.get("button[type=submit]").should("be.disabled");

    cy.get("input#username").type("john_doe");
    cy.get("button[type=submit]").should("be.disabled");

    cy.get("input#password").type("my-password");
    cy.get("button[type=submit]").should("be.disabled");

    cy.get("input#password-confirmation").type("my-pass");
    cy.get("button[type=submit]").should("be.disabled");

    cy.get("input#password-confirmation").type("word");
    cy.get("button[type=submit]").should("be.enabled");

    cy.get("form").submit();
  });
});
