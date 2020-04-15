describe("User can se note and it", () => {
  it("shows the title", () => {
    cy.exec("yarn start");
    cy.visit("/");
    cy.get("#title").should("contain", "Awesome Title");
  });
  it("shows the paragraph", () => {
    cy.get("#paragraph").should("contain", "Awesome Idea");
  });
  it("does not show the footer", () => {
    cy.get("#note").should("not.contain", "copyright");
  });
  it("does not show the header", () => {
    cy.get("#note").should("not.contain", "Brillo");
  });
});
