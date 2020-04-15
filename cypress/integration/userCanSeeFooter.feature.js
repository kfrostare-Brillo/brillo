describe("User can se footer and it", () => {
  it("shows the name of the creator", () => {
    cy.exec("yarn start");
    cy.visit("/");
    cy.get("#copyright").should("contain", "Kfrostare");
  });
  it("shows the current year", () => {
    cy.get("#copyright").should("contain", "2020")
  })
  
  it("does not show the header", () => {
    cy.get("#copyright").should("not.contain", "Brillo");
  });
});