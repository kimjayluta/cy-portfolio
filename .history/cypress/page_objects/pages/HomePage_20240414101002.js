class HomePage {
	elements = {
		carouselNextButton: () => cy.get(".carousel-control-next"),
		carouselPrevButton: () => cy.get(".carousel-control-prev"),

		categoriesCard: () => cy.get("#cat"),
		categoryPhone: () => cy.contains("Phones"),
		categoryLaptops: () => cy.contains("Laptops"),
		categoryMonitors: () => cy.contains("Monitors"),
	};

	clickNextCarouselButton = () => {
		this.elements.carouselNextButton().should("be.visible");
		this.elements.carouselNextButton().click();
	};

	clickPrevCarouselButotn = () => {
		this.elements.carouselPrevButton().should("be.visible");
		this.elements.carouselPrevButton().click();
	};
}

module.exports = new HomePage();
