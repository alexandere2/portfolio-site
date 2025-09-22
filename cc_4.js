// Coding Challenge 00

// Code goes here

// Made the arrays for the specific products 
let products = [
            {name: "Bananas", category: "groceries", price: 7.00, inventory: 100.00},
            {name: "PS5 Controller", category: "electronics", price: 60.00, inventory: 40.00},
            {name: "AA Batteries", category: "electronics", price: 10.00, inventory: 50.00},
            {name: "Laundry Detergent", category: "household", price: 15.00, inventory: 25.00},
            {name: "Chrome Heart Glasses", catgeory: "apparel", price: 500.00, inventory: 10.00}
];
// Declared the specific discounts for each category 
for (let p of products) {
    let discount = 0;
    switch (p.category) 
    {
        case "electronics": discount = 0.20; 
        console.log(`${p.category}`);
        break;

        case "apparel": discount = 0.15; 
        console.log(`${p.category}`);
        break;

        case "groceries" && "household": discount = 0.10; 
        console.log(`${p.category}`);
        break;

        break;
        default: discount = 0; 
        console.log(`${p.category}`);
    }
    p.promoPrice = (p.price * (1-discount)).toFixed(2);
}

let customers = [
    {id: 1, type: "student", cart: [{name: "Bananas", quantity: 5.00}, {name: "AA Batteries", quantity: 8.00}]},
    {id: 2, type: "regular", cart: [{name: "PS5 Controller", quantity: 2.00}, {name: "AA Batteries", quantity: 12.00}, {name: "Chrome Heart Glasses", quantity: 1}]},
    {id: 3, type: "senior", cart: [{name: "Laundry Detergent", quantity: 1.00}, {name: "Bananas", quantity: 10.00}]}
];

for (let customer of customers) {
    console.log(`--- Customer ID_${customer.id} (${customer.typeype})---`);

    let subtotal = 0;

for (let item of customer.cart) {
    let product = products.find(product => product.name === item.name);

    if (product && product.inventory >= item.quantity) {
        let itemTotal = parseFloat(product.promoPrice) * item.quantity;
        subtotal += itemTotal;
        product.inventory -= item.quantity;
        console.log(`${product.name} | $${product.promoPrice} * ${item.quantity} =$${itemTotal.toFixed(2)}`);
    } else if (product) {
        console.log(`!Low Inventory! *${product.name}* | Available: ${product.inventory} | Wanted: ${item.quantity}`);
    } else {
            console.log(`${item.name} not found in inventory|`);
    }
}
}

console.log(`Subtotal before discounts: $${subtotal.toFixed(2)}`);

if (customerType === "regular") {
    customerDiscounts = 0; }
    else if (customer.type === "student") {
        customerDiscounts = 0.05; }
    else if (customerType === "senior") {
        customerDiscounts = 0.07; }
        else {
            customerDiscounts = 0 }

let discountedPrice = subtotal * customerDiscounts;
total = subtotal - discountAmount

console.log(`Total after discounts: $${total.toFixed(2)}`);

// Updated Inventory Stock
products.forEach (products => console.log (
    `${products.name} | ${products.inventory} inv.`

// Log all product info after inventory is updated.
for (const product of products) {
  console.log(`Product: ${product.name}`);
  for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }
};
