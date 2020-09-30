function addMoney (){
	let totalBudget = parseInt(document.getElementById('totalBudget').innerHTML);
	let currentBudget = parseInt(document.getElementById('currentBudget').innerHTML);
	let money = parseInt(document.getElementById('money').value);
	 if (money == " " || isNaN(money)) {
	 	alert('Enter valid Number');

	 }else{
	 	totalBudget += money;
	 	currentBudget += money;
	 	document.getElementById('totalBudget').innerHTML= totalBudget;
	 	document.getElementById('currentBudget').innerHTML = currentBudget;
	 }
 }

 function addEpense(){
 	let totalBudget = parseInt(document.getElementById('totalBudget').innerHTML);
	let currentBudget = parseInt(document.getElementById('currentBudget').innerHTML);
	let item = document.getElementById('item').value;
	let amount = parseInt(document.getElementById('amount').value);

	if (item == " ") {
		alert("please enter an expense name")
	}else if (amount == " " || isNaN(amount)){

	}else{
		if (amount <= currentBudget) {
			currentBudget -= amount;
			document.getElementById('currentBudget').innerHTML= currentBudget;
			var para = document.createElement('P');
			para.innerHTML = `item : ${item} <br> amount : ${amount}`
			document.getElementById("addExpense").appendChild(para);
		}else{
			alert("sorry Your expense amount is higer than your current balance ")
		}
	}

 }