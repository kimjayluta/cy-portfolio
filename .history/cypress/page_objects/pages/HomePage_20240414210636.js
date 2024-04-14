class HomePage {
	elements = {
		carouselNextButton: () => cy.get(".carousel-control-next"),
		carouselPrevButton: () => cy.get(".carousel-control-prev"),

		categoriesCard: () => cy.get("#cat"),
		categoryPhone: () => cy.contains("Phones"),
		categoryLaptops: () => cy.contains("Laptops"),
		categoryMonitors: () => cy.contains("Monitors"),
		productTitle: () => cy.get(".card-title > a"),

		paginationNextButton: () => cy.get("#next2"),
		paginationPrevButton: () => cy.get("#prev2"),

		productCard: (productID) =>
			cy.get(`:nth-child(${productID}) > .card > .card-block > .card-title`),
	};

	clickNextCarouselButton = () => {
		this.elements.carouselNextButton().should("be.visible");
		this.elements.carouselNextButton().click();
	};

	clickPrevCarouselButotn = () => {
		this.elements.carouselPrevButton().should("be.visible");
		this.elements.carouselPrevButton().click();
	};

	clickPhoneCategory = () => {
		this.elements.categoryPhone().should("be.visible");
		this.elements.categoryPhone().click();
	};

	clickLaptopCategory = () => {
		this.elements.categoryLaptops().should("be.visible");
		this.elements.categoryLaptops().click();
	};

	clickMonitorCategory = () => {
		this.elements.categoryMonitors().should("be.visible");
		this.elements.categoryMonitors().click();
	};

	clickPaginationNextButton = () => {
		this.elements.paginationNextButton().should("be.visible").click();
		this.elements.paginationNextButton().click();
	};

	clickPreviousPaginationButton = () => {
		this.elements.paginationPrevButton().click();
	};

	selectProduct = (productID) => {
		this.elements.productCard(productID).should("be.visible");
		this.elements.productCard(productID).click();
	};

	verifyDisplayedProduct = (productName) => {
		this.elements.productTitle().should("contain", productName);
	};
}

module.exports = new HomePage();
