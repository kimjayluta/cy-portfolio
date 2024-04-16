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
			cy.get("td").eq(3).should("contain", "Delete");
		});
	};

	removeProduct = () => {
		cy.get("#tbodyid").within(() => {
			cy.get("td").eq(3).should("contain", "Delete");
			cy.get("td").eq(3).contains("Delete").click();
			cy.contains("Delete").should("not.exist");
		});

		// cy.get("#tbodyid").within(() => {
		// });
	};
}

module.exports = new CartPage();
