class CartPage {
	elements = {
		cartTable: () => cy.get(".table-responsive"),
		placeOrderButton: () => cy.contains("Place Order"),
	};
}

module.exports = new CartPage();
