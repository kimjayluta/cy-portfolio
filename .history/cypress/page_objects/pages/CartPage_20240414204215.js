class CartPage {
    elements = {
        productName: () => cy.get('.name'),
        productPrice: () => cy.get('.price-container'),
        productDescription: () => cy.get('#more-information')

        addToCartButton: () => cy.contains("Add to cart")
    }
}

module.exports = new CartPage();