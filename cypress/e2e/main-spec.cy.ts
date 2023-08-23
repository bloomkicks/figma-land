describe("The entire FigmaLand website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a working mobile nav drawer", () => {
    cy.viewport(412, 700);

    cy.get("header .MuiDrawer-root > .MuiPaper-root").should(
      "not.be.visible"
    );
    cy.get(`button[aria-label="toggle-mobile-menu-button"]`).click();
    cy.get("header .MuiDrawer-root > .MuiPaper-root").should(
      "be.visible"
    );
  });
});

export default {};
