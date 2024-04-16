class CartPage {
	elements = {
		cartTable: () => cy.get(".table-responsive"),
		placeOrderButton: () => cy.contains("Place Order"),
	};

	verifyCartElements = () => {
		this.elements.cartTable().should("be.visible");
		this.elements.placeOrderButton().should("be.visible");

		cy.get("#tbodyid").within(() => {
			cy.get("td").eq(1).should("contain", "Samsung galaxy s6");
		});
	};
}

module.exports = new CartPage();
