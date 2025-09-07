// Coding Challenge 00

// Code goes here

let itemName = "Xbox Series X/S Controller";
let unitCost = 30.00;
let currentStock = 200.00;
let reorderLevel = 350.00;
let targetStock = 700.00; 
let weeklyDemand = 70.00;
let supplierLeadTimeWeeks = 2.00;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) :0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item Name:" +  itemName);
console.log("Weeks of Cover:" +  weeksOfCover.toFixed(2));
console.log(reorderNow);
console.log("Recommended Reorder Quantity" +  reorderQuantity);
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));
