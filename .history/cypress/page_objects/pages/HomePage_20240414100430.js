class HomePage {
	elements = {
		carouselNextButton: () => cy.get("carousel-control-next"),
		carouselPrevButton: () => cy.get("carousel-control-prev"),

		categoriesCard: () => cy.get("list-group"),
	};

	clickNextCarouselButton = () => {
		this.elements.carouselNextButton().click();
	};

	clickPrevCarouselButotn = () => {
		this.elements.carouselPrevButton().click();
	};
}

module.exports = new HomePage();
