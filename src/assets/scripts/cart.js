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
            <img src='${image}' width='100' height='100' alt='product'>
            <div>${title} - ${price}</div>
            <div>${description}</div>
            <button class="dlt-btn">X</button>
        </div>`;
    });
}
