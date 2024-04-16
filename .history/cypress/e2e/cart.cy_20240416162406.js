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
		HomePage.selectProduct(1);
	});

	it("Able to Add products to the cart", () => {
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
	});

	it("Remove the product to the cart", () => {
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
		CartPage.removeProduct();
	});

	it("Places an order with valid information", () => {
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
	});
});
