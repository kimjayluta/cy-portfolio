class HomePage {
	elements = {
		carouselNextButton: () => cy.get("carousel-control-next"),
		carouselPrevButton: () => cy.get("carousel-control-prev"),
	};
}

module.exports = new HomePage();
