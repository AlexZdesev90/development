const cartStore = document.querySelector(".cart-item-content");
let cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");

if(cartStorage.length){
    cartStorage.forEach(el => {
        const {title, price, image, description} = el;
        console.log(image)
        const newCard = document.createElement("div");
        cartStore.append(newCard);
        newCard.innerHTML = `
        <div class='cart-store-container'>
            <span class='cart-item-number'>1</span><img class='image-store-cart' src='${image}' alt='product'>
            <div class='cart-item-title'>${title}<div>
            <div class='cart-item-price'>${price}</div>
            <div class='cart-item-description'>${description}</div>
            <div class='buttons-container'>
            </div>
            <span class='text-items'>Items: 1</span><button class='btn-add button-item'>+</button><button class='btn-delete button-item'>-</button></div>`;
    });
}
