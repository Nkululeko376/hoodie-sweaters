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


