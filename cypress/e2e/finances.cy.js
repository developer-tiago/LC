describe("Transações", () => {
  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/");
  });

  it("Cadastrar uma entrada", () => {
    criarTransacao("Salário", 2800);
  });

  it("Cadastrar uma saída", () => {
    criarTransacao("Cinema", -50);
  });

  it("Excluir transação", () => {
    criarTransacao("Conta de luz", -110);
    criarTransacao("Cartão de crédito", 473);
    criarTransacao("Gorjeta", -20);

    cy.contains(".description", "Conta de luz").parent().find("img").click();
  });
});

function criarTransacao(description, amount) {
  cy.contains("Nova Transação").click();

  cy.get("#description").type(description);
  cy.get("#amount").type(amount);
  cy.get("#date").type("2024-07-05"); //Data forma

  cy.contains("button", "Salvar").click();

  cy.contains(".description", description).should("have.text", description);
}
