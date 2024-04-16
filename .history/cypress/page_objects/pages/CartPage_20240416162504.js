class CartPage {
	elements = {
		cartTable: () => cy.get(".table-responsive"),
		placeOrderButton: () => cy.contains("Place Order"),

		cartTableBody: () => cy.get("#tbodyid"),
		cartTableData: () => cy.get("td"),
	};

	verifyCartElements = () => {
		this.elements.cartTable().should("be.visible");
		this.elements.placeOrderButton().should("be.visible");

		this.elements.cartTableBody().within(() => {
			this.elements.cartTableData().eq(1).should("contain", "Samsung galaxy s6");
			this.elements.cartTableData().eq(3).should("contain", "Delete");
		});
	};

	removeProduct = () => {
		this.elements.cartTableBody().within(() => {
			this.elements.cartTableData().eq(3).should("contain", "Delete");
			this.elements.cartTableData().eq(3).contains("Delete").click();
			cy.contains("Delete").should("not.exist");
		});
	};

	clickPlaceOrderBtn = () => {
		this.elements.placeOrderButton().should("be.visible");
		this.elements.placeOrderButton().click();
	};
}

module.exports = new CartPage();
