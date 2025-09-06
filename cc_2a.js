
const productName = "Jordan Sneakers";
let costPerUnit = 150.00;
let basePrice = 300.00;
let discountRate = 0.25;
let salesTaxRate = 0.10;
let fixedMonthlyCosts = 1000

let discountedPrice = basePrice * (1-discountRate);
let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Jordan Sneakers");
console.log ("Discounted Price: $" + discountedPrice);
console.log ("Final Price with Tax: $" + finalPriceWithTax);
console.log ("Profit Per Unit: $" + profitPerUnit);
console.log ("Break-Even Units (Sneakers):" + breakEvenUnits);

console.log (isProfitablePerUnit || 0);
