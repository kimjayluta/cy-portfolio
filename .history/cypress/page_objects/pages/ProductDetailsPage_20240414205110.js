class ProductDetailsPage {
	elements = {
		productName: () => cy.get(".name"),
		productPrice: () => cy.get(".price-container"),
		productDescription: () => cy.get("#more-information"),
		addToCartButton: () => cy.contains("Add to cart"),
	};

	verifyProductDetails = (name, price, description) => {
		this.elements.productName().contains(name).should("be.visible");
		this.elements.productPrice().price(price).should("be.visible");
		this.elements.productDescription().price(description).should("be.visible");
	};

	addToCart = () => {
		this.elements.addToCartButton().should("be.visible").click();
	};
}

module.exports = new ProductDetailsPage();
