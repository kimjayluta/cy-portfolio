class CartPage {
	elements = {
		productName: () => cy.get(".name"),
		productPrice: () => cy.get(".price-container"),
		productDescription: () => cy.get("#more-information"),
		addToCartButton: () => cy.contains("Add to cart"),
	};

	verifyProductDetails = (name, price, description) => {
		this.elements.productName().contains(name).should("be.visible");
	};
}

module.exports = new CartPage();
