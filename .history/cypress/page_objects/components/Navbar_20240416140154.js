class Navbar {
	elements = {
		cartLink: () => cy.get("#cartur"),
	};

	clickCartLink = () => {
		this.elements.cartLink().should("be.visible");
		this.elements.cartLink().click();
	};
}

module.exports = new Navbar();
