<script type="text/javascript">
	
	// 	function calculateFoodTotal(food, tip) {
   	// 	const tipPercentage = tip / 100
   	// 	const tipAmount = food * tipPercentage
   	// 	const total = sum(food, tipAmount)
   	// 	return total
 	// }
 	// const groceries = ['banana', 'apple' , 'peach', 'bashg' , 'kahdf'];
 	// console.log(groceries);
 	// groceries.push('pear');
 	// 	//push method
 	// groceries.slice(0,2);
 	// 	//start from 0 includes 0 upto 2 but not including 2
 	// groceries.slice(2,4);
 	// groceries.length;

 	let person = (name, age, pay, expenses)=>{
 	let pop = {
 		pay: pay,
 		expenses : expenses,
 		 savings: function () {
 			return this.pay - this.expenses;
 		}
 		
 	};
 	let intro = `My name is ${name} and I'm ${age} years old. my savings are ${pop.savings()}`
 	return intro;
 }

 	console.log(person("Trinay", 22, 2000, 500));
 	const numbers= [2,3,4,5,2,6,2,7,9];
 	for(let number of numbers){
 		result.push(number*2)
 	}






</script>