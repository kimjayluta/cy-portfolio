import Navbar from "../page_objects/components/Navbar";
import CartPage from "../page_objects/pages/CartPage";
import HomePage from "../page_objects/pages/HomePage";
import ProductDetailsPage from "../page_objects/pages/ProductDetailsPage";

describe("Cart", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
	});

	it("Able to Add products to the cart", () => {
		HomePage.selectProduct(1);
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
	});

	it.only("Remove the product to the cart", () => {
		HomePage.selectProduct(1);
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
		CartPage.removeProduct();
	});
});
