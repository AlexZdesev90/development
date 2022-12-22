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
            <img class='image-store-cart' src='${image}' alt='product'>
            <div>${title} - ${price}</div>
            <div class='description'>${description}</div>
        </div>`;
    });
}
