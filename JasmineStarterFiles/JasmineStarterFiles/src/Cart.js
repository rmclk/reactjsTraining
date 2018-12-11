productList = []

class Cart {
	getProductCount(){
		return productList.length;
	}
	
	addProduct(product) { 
		productList.push(product);
	}
}
