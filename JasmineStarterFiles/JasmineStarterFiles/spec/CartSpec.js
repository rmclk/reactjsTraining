describe("Travel Insurance Cart", ( ) =>  
{ 
    it("should create a new cart with no products in it", ( ) => {    
		let cart = new Cart(); 
		expect(cart.getProductCount()).toBe(0); 
    })
	it("should show the count is 1 when a product is added", () => {    
		let cart = new Cart(); 
		let product = new Product("Single", 1, 50.0);
		cart.addProduct(product);       
		expect(cart.getProductCount()).toBe(1);
    })
  });
