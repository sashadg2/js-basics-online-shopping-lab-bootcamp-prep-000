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
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var items = [];
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }}
     console.log("In your cart, you have " + items.join(", ") + ".");
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
