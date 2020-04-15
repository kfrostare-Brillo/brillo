describe("User can se header and", () => {
  it("shows the title", () => {
    cy.exec("yarn start");
    cy.visit("/");
    cy.get("#header").should("contain", "Brillo");
  });
  it("does not show the footer", () => {
    cy.get("#header").should("not.contain", "copyright");
  });
});
