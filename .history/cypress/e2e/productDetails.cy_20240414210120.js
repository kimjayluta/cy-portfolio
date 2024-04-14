import HomePage from "../page_objects/pages/HomePage";
import ProductDetailsPage from "../page_objects/pages/ProductDetailsPage";
describe("Product Details", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
	});

	it("Verify the product details elements are visible", () => {
		const ProductInfo = {
			prodId: 1,
			name: "Samsung galaxy s6",
			price: "$360",
		};
		HomePage.selectProduct(ProductInfo.prodId);
		ProductDetailsPage.verifyProductDetails(ProductInfo.name, ProductInfo.price);
	});
});
