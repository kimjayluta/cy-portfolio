class CartPage {
	elements = {
		cartTable: () => cy.get(".table-responsive"),
		placeOrderButton: () => cy.contains("Place Order"),
	};

	verifyCartElements = () => {
		this.elements.cartTable().should("be.visible");
	};
}

module.exports = new CartPage();
