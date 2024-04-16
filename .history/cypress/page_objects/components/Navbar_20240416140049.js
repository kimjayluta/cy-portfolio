class Navbar {
	elements = {
		cartLink: () => cy.get("#cartur"),
	};
}

module.exports = new Navbar();
