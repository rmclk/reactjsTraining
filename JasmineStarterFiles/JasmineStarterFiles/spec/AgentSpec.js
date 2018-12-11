describe("Agent Commission", ()=> {
	beforeEach(()=>{
		myAgentClass = new Agent();
	});
	
	it("should calculate the factor for > 999 policies", ()=> {
		let commissionFactorReturned = myAgentClass.factor(1000);
		expect(commissionFactorReturned).toBe(10);
	})
		it("should calculate the factor for < 999 policies", ()=> {
		commissionRate = 5;
		let commissionFactorReturned = myAgentClass.factor(100);
		expect(commissionFactorReturned).toBe(commissionRate);
	})
	it("should calculate the commission using 1000 policies sold, the factor and the commission rate", ()=> {
		commissionRate = 5;
		let commissionReturned = myAgentClass.commissionEarned(1000,10,commissionRate)
		expect(commissionReturned).toBe(50000);
	})
	it("should calculate the tax to be deducted using the salary > 30000", ()=> {
		let taxReturned = myAgentClass.taxAmountDue(50000)
		expect(taxReturned).toBe(15000);
	})
		it("should calculate the tax to be deducted using the salary < 30000", ()=> {
		let taxReturned = myAgentClass.taxAmountDue(1000)
		expect(taxReturned).toBe(200);
	})
		it("should record the sales over a quarter",()=>{
			let salesReturn = ['sales Jan 2000', 'sales Feb 2500', 'sales Mar 4000', 'Total sales 8500']
			let salesExpected = myAgentClass.quarterlySales();
			expect(salesReturn).toEqual(salesExpected);
		})
})