describe("Transações", () => {
  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
  });

  it("Cadastrar uma entrada", () => {
    criarTransacao("Salário", 2800);

    // cy.get("tbody tr td.description").should("have.text", "Freela")
  });

  it("Cadastrar uma saída", () => {
    criarTransacao("Cinema", -50);
  });
});

function criarTransacao(description, amount) {
  cy.contains("Nova Transação").click();

  cy.get("#description").type(description);
  cy.get("#amount").type(amount);
  cy.get("#date").type("2024-07-05"); //Data forma

  cy.contains("button", "Salvar").click();

  cy.get("tbody tr td.description").should("have.text", description);
}
