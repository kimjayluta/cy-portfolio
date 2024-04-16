import Navbar from "../page_objects/components/Navbar";
import CartPage from "../page_objects/pages/CartPage";
import HomePage from "../page_objects/pages/HomePage";
import ProductDetailsPage from "../page_objects/pages/ProductDetailsPage";
import purchaseDetails from "../fixtures/purchaseDetails.json";

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

	it.only("Places an order with valid information", () => {
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
		CartPage.clickPlaceOrderBtn();
		CartPage.purchaseModalIsVisible();

		cy.fixture("purchaseDetails").then((purchaseDetails) => {
			CartPage.fillPurchaseModal(purchaseDetails);
		});
	});
});
