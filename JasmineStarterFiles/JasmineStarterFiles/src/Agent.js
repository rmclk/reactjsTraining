class Agent {
	factor(numberOfPoliciesSold){
		if(numberOfPoliciesSold>999)
			return 10;
		else
			return 5;
	};
	
	commissionEarned(numberOfPoliciesSold, factor, agentRateCode){
		return numberOfPoliciesSold*factor*agentRateCode
	};
	
	taxAmountDue(commissionAmount){
		if(commissionAmount > 30000)
			return commissionAmount*0.3;
		else
			return commissionAmount*0.2;
	};
	
	quarterlySales(){
		let recordSales =[];
		
		let saleJan = prompt('Enter January sales')
		let saleFeb = prompt('Enter February sales')
		let saleMar = prompt('Enter March sales')
		
		let totalSales = parseInt(saleJan) + parseInt(saleFeb) + parseInt(saleMar);
		
		recordSales.push('sales Jan ' + saleJan);
		recordSales.push('sales Feb ' + saleFeb);
		recordSales.push('sales Mar ' + saleMar);
		recordSales.push('Total sales ' + totalSales);
		
		return recordSales
	};
}