var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100) +1
 var obj = new Object()
 obj[item] = price
 cart.push(obj)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
   const l = cart.length

   if (!l) {
     return console.log("Your shopping cart is empty.")
   }

   const itemsAndPrices = []

   for (let i = 0; i < l; i++) {
     let itemAndPrice = cart[i]
     let item = Object.keys(itemAndPrice)[0]
     let price = itemAndPrice[item]

     itemsAndPrices.push(`${item} at \$${price}`)
   }

   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
 }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
