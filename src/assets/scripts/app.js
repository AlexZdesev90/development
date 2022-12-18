import { apiURL } from './DB';

let products = await getProducts();

async function getProducts() {
    return (await fetch(apiURL)).json();
}

const mainSelector = document.querySelector('.main');
mainSelector.classList = 'main d-flex';

// left menu - product filter
const productFilter = document.createElement('div');
productFilter.classList = 'wrapper filter';

// button filter
const buttonFilter = document.createElement('div');
buttonFilter.classList = 'button-filter';

const buttonReset = document.createElement('button');
buttonReset.classList = 'btn reset';
buttonReset.innerHTML = 'Reset';

const buttonCopy = document.createElement('button');
buttonCopy.classList = 'btn copy';
buttonCopy.innerHTML = 'Copy';

buttonFilter.appendChild(buttonReset);
buttonFilter.appendChild(buttonCopy);

// filter category
const filterCategory = document.createElement('div');
filterCategory.classList = 'filter-block category-block';

const filterCategoryTitle = document.createElement('div');
filterCategoryTitle.classList = 'filter-title category-title';
filterCategoryTitle.innerHTML = 'Category';

function uniqueCategoryBody(arr) {
    return Array.from(new Set(arr.map((item) => item.category)));
}

const filterCategoryBody = document.createElement('div');
filterCategoryBody.classList = 'filter-body category-body';
function getRenderedFilterCategoryBody(products) {
    return uniqueCategoryBody(products.products)
        .map((products) => {
            return `<div class = "filter-item">
                        <input type="checkbox" name="${products}">
                        <label for="${products}">${products}</label>
                    </div>`;
        })
        .join('');
}
filterCategoryBody.innerHTML = getRenderedFilterCategoryBody(products);

filterCategory.appendChild(filterCategoryTitle);
filterCategory.appendChild(filterCategoryBody);

// filter brand
const filterBrand = document.createElement('div');
filterBrand.classList = 'filter-block brand-block';

const filterBrandTitle = document.createElement('div');
filterBrandTitle.classList = 'filter-title brand-title';
filterBrandTitle.innerHTML = 'Brand';

function uniqueBrandBody(arr) {
    return Array.from(new Set(arr.map((item) => item.brand)));
}

const filterBrandBody = document.createElement('div');
filterBrandBody.classList = 'filter-body brand-body';
function getRenderedFilterBrandBody(products) {
    return uniqueBrandBody(products.products)
        .map((products) => {
            return `<div class = "filter-item">
                        <input type="checkbox" name="${products}">
                        <label for="${products}">${products}</label>
                    </div>`;
        })
        .join('');
}
filterBrandBody.innerHTML = getRenderedFilterBrandBody(products);

filterBrand.appendChild(filterBrandTitle);
filterBrand.appendChild(filterBrandBody);

// filter price
const filterPrice = document.createElement('div');
filterPrice.classList = 'filter-block price-block';

const filterPriceTitle = document.createElement('div');
filterPriceTitle.classList = 'filter-title price-title';
filterPriceTitle.innerHTML = 'Price';

const filterPriceBody = document.createElement('div');
filterPriceBody.classList = 'price-body';
// function getRenderedFilterBrandBody(products) {
//     return products.products
//         .map((products) => {
//             return `<div class = "filter-item">
//                     <input type="checkbox" data-uid="${products.id}" name="${products.brand}">
//                     <label for="${products.brand}">${products.brand}</label>
//                     </div>`;
//         })
//         .join('');
// }
filterPriceBody.innerHTML = 'input range';

filterPrice.appendChild(filterPriceTitle);
filterPrice.appendChild(filterPriceBody);

// filter stock
const filterStock = document.createElement('div');
filterStock.classList = 'filter-block price-block';

const filterStockTitle = document.createElement('div');
filterStockTitle.classList = 'filter-title price-title';
filterStockTitle.innerHTML = 'Stoke';

const filterStokeBody = document.createElement('div');
filterStokeBody.classList = 'price-body';
// function getRenderedFilterBrandBody(products) {
//     return products.products
//         .map((products) => {
//             return `<div class = "filter-item">
//                     <input type="checkbox" data-uid="${products.id}" name="${products.brand}">
//                     <label for="${products.brand}">${products.brand}</label>
//                     </div>`;
//         })
//         .join('');
// }
filterStokeBody.innerHTML = 'input range';

filterStock.appendChild(filterStockTitle);
filterStock.appendChild(filterStokeBody);

productFilter.appendChild(buttonFilter);
productFilter.appendChild(filterCategory);
productFilter.appendChild(filterBrand);
productFilter.appendChild(filterPrice);
productFilter.appendChild(filterStock);

mainSelector.appendChild(productFilter);

// right menu - cards
const cards = document.createElement('div');
cards.classList = 'wrapper cards';

const cardsMenu = document.createElement('div');
cardsMenu.classList = 'cards-menu';

const cardsSorts = document.createElement('div');
cardsSorts.classList = 'cards-sort';
function getRenderedSortCards() {
    return `<select class="select-sort">
                <option class="select-item" value="0">Sort option:</option>
                <option class="select-item" value="1">Sort by 1</option>
                <option class="select-item" value="2">Sort by 2</option>
                <option class="select-item" value="3">Sort by 3</option>
                <option class="select-item" value="4">Sort by 4</option>
            </select>`;
}
cardsSorts.innerHTML = getRenderedSortCards();

const cardsFound = document.createElement('div');
cardsFound.classList = 'cards-found';
cardsFound.innerHTML = 'Found:';

const cardsSearch = document.createElement('input');
cardsSearch.classList = 'cards-search';
cardsSearch.placeholder = 'Search';

const cardsSwitch = document.createElement('div');
cardsSwitch.classList = 'cards-switch';
cardsSwitch.innerHTML = `
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>`;

const cardsTable = document.createElement('div');
cardsTable.classList = 'cards-table';

function getRenderedTableBody(products) {
    return products.products
        .map((products) => {
            return `<div class="card-container" data-id="${products.id}">
                        <div class="img-container">
                            <img class="card-image" src="${products.images[0]}"   alt="card-image">
                            <div class="card-price">Price: &#8364;${products.price}</div>

                            <div class="card-name">${products.title}</div>

                            <div class="card-description">${products.description}</div>

                            <div>
                                <button class="btn btn-add">Add to cart</button>
                                <button class="btn btn-details">Details</button>
                            </div>
                        </div>
                    </div>`;
        })
        .join('');
}
cardsTable.innerHTML = getRenderedTableBody(products);

mainSelector.appendChild(cards);

cards.appendChild(cardsMenu);
cards.appendChild(cardsTable);

cardsMenu.appendChild(cardsSorts);
cardsMenu.appendChild(cardsFound);
cardsMenu.appendChild(cardsSearch);
cardsMenu.appendChild(cardsSwitch);

let cardsContainer = document.querySelectorAll('.card-container');
cardsContainer.forEach((el) => {
    let image = el.childNodes[1].childNodes[1].src;
    let price = el.childNodes[1].childNodes[3].innerHTML;
    let title = el.childNodes[1].childNodes[5].innerHTML;
    let btn = el.childNodes[1].childNodes[9].childNodes[1];

    btn.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        let card = {title, price, image};
        localStorage.setItem('cart', JSON.stringify([...cart, card]));
    });
});
