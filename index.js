//=====Generating the html codes with javaScript=========


let generateHtml = '';
products.forEach( (product) => {
    generateHtml += `
        <div class="product-container">
                <div class="product-image-container">
                    <img src="${product.image}" alt="">
                    <div class="on-sales-new">New</div>
                </div>
                <div class="product-name-container">
                    ${product.name}
                </div>
                <div class="price-cart-btn">
                    <div class="product-price">$${(product.priceCents/100)}</div>
                    <button class="add-to-cart-btn"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
    `;
    
});
document.querySelector('.product-grid').innerHTML = generateHtml;


//=========== all about cart ============================================
//================== open cart section ==================================
let viewCart = document.querySelector('.js-add-to-cart');
viewCart.addEventListener('click', () => {
    document.querySelector('main').classList.add('open-cart-section');
});
//================= close cart section ======================================
let hideCart = document.querySelector('.js-remove-cart-section');
hideCart.addEventListener('click', () => {
    document.querySelector('main').classList.remove('open-cart-section');
});

//================ remove product from cart ==========================================
/*
if( document.readyState == 'loading' ){
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready(){
    //========to remove product item
    var removeCartButtons = document.getElementsByClassName('fa-trash');
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.closest('.cart-item').remove();
}
*/



//==============Codes of adding product items to cart


let cartContainer = document.querySelector('.cart-product-container-main-section');
let totalPriceEl = document.querySelector('.price');
let total = 0;



// Select all add-to-cart buttons (after generating HTML)
document.querySelectorAll('.add-to-cart-btn').forEach((button, i) => {
  button.addEventListener('click', () => {
    const product = products[i];

   // Create cart item
const cartItem = document.createElement('div');
cartItem.classList.add('cart-product-container');

// Track the quantity and product price
let quantity = 1;
const productPrice = product.priceCents / 100;

cartItem.innerHTML = `
  <div class="cart-image-container">
    <img src="${product.image}" alt="">
  </div>
  <div class="cart-product-details">
    <div class="product-details-name">${product.name}</div>
    <div class="name-and-delete-bn">
      <div class="pricing">$${(productPrice * quantity).toFixed(2)}</div>
      <button class="remove-cart-product js-remove-cart-item">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    <div class="select-quantity">
      <input type="number" class="js-quantity-input" value="${quantity}" min="1">
    </div>
  </div>
`;

cartContainer.appendChild(cartItem);

// Update total price
total += productPrice * quantity;
totalPriceEl.textContent = `$${total.toFixed(2)}`;

// Remove item from cart
cartItem.querySelector('.js-remove-cart-item').addEventListener('click', () => {
  total -= productPrice * quantity;
  totalPriceEl.textContent = `$${total.toFixed(2)}`;
  cartContainer.removeChild(cartItem);
});

// Quantity input logic
const quantityInput = cartItem.querySelector('.js-quantity-input');
const itemPriceDisplay = cartItem.querySelector('.pricing');

quantityInput.addEventListener('input', () => {
  const newQuantity = parseInt(quantityInput.value);

  // Prevent invalid or empty inputs
  if (isNaN(newQuantity) || newQuantity < 1) {
    quantityInput.value = 1;
    return;
  }

  // Update total price
  total -= productPrice * quantity; // subtract old amount
  quantity = newQuantity;
  total += productPrice * quantity; // add new amount

  // Update displays
  itemPriceDisplay.textContent = `$${(productPrice * quantity).toFixed(2)}`;
  totalPriceEl.textContent = `$${total.toFixed(2)}`;
});
  });
});



//==========Placing the order
const buyNowBtn = document.querySelector('.buy-now-btn');

buyNowBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty. Add some products first!');
    return;
  }

  // Optional: show a confirmation popup
  alert('🎉 Thank you for your purchase!');


});



