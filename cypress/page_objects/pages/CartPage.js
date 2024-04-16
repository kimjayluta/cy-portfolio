class CartPage {
	elements = {
		cartTable: () => cy.get(".table-responsive"),
		placeOrderButton: () => cy.contains("Place Order"),

		cartTableBody: () => cy.get("#tbodyid"),
		cartTableData: () => cy.get("td"),

		nameField: () => cy.get("#name"),
		country: () => cy.get("#country"),
		city: () => cy.get("#city"),
		creditCard: () => cy.get("#card"),
		month: () => cy.get("#month"),
		year: () => cy.get("#year"),

		purchaseButton: () => cy.contains("Purchase"),
		successMsg: () => cy.get(".sweet-alert > h2"),
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

	purchaseModalIsVisible = () => {
		const Elements = [
			this.elements.nameField,
			this.elements.country,
			this.elements.city,
			this.elements.creditCard,
			this.elements.month,
			this.elements.year,
			this.elements.purchaseButton,
		];

		Elements.forEach((el) => {
			el().should("be.visible");
		});
	};

	fillPurchaseModal = (purchaseData) => {
		this.elements.nameField().type(purchaseData.name);
		this.elements.country().type(purchaseData.country);
		this.elements.city().type(purchaseData.city);
		this.elements.creditCard().type(purchaseData.creditCard);
		this.elements.month().type(purchaseData.month);
		this.elements.year().type(purchaseData.year);

		this.elements.purchaseButton().click();
	};

	verifySuccessMsg = () => {
		this.elements
			.successMsg()
			.contains("Thank you for your purchase!")
			.should("be.visible");
	};
}

module.exports = new CartPage();
