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

const filterCategoryBody = document.createElement('div');
filterCategoryBody.classList = 'filter-body category-body';
function getRenderedFilterCategoryBody(products) {
    return products.products
        .map((products) => {
            return `<div class = "filter-item">
            <input type="checkbox" data-uid="${products.id}" name="${products.category}">
            <label for="${products.category}">${products.category}</label>
            </div>
            `;
        })
        .join('');
}
filterCategoryBody.innerHTML = getRenderedFilterCategoryBody(products);

filterCategory.appendChild(filterCategoryTitle);
filterCategory.appendChild(filterCategoryBody);

// filter brand
const filterBrand = document.createElement('div');
filterBrand.classList = 'filter-block brand';

const filterBrandTitle = document.createElement('div');
filterBrandTitle.classList = 'filter-title brand';
filterBrandTitle.innerHTML = 'Brand';

const filterBrandBody = document.createElement('div');
filterBrandBody.classList = 'filter-body brand-body';
function getRenderedFilterBrandBody(products) {
    return products.products
        .map((products) => {
            return `<div class = "filter-item">
                    <input type="checkbox" data-uid="${products.id}" name="${products.brand}">
                    <label for="${products.brand}">${products.brand}</label>
                    </div>`;
        })
        .join('');
}
filterBrandBody.innerHTML = getRenderedFilterBrandBody(products);

filterBrand.appendChild(filterBrandTitle);
filterBrand.appendChild(filterBrandBody);

productFilter.appendChild(buttonFilter);
productFilter.appendChild(filterCategory);
productFilter.appendChild(filterBrand);

mainSelector.appendChild(productFilter);

// right menu - cards
const cards = document.createElement('div');
cards.classList = 'wrapper cards';

const cardsMenu = document.createElement('div');
cardsMenu.classList = 'cards-menu';

const cardsSorts = document.createElement('div');
cardsSorts.classList = 'cards-sort';
cardsSorts.innerHTML = 'sort';

const cardsFound = document.createElement('div');
cardsFound.classList = 'cards-found';
cardsFound.innerHTML = 'Found:';

const cardsSearch = document.createElement('div');
cardsSearch.classList = 'cards-search';
cardsSearch.innerHTML = 'search';

const cardsSwitch = document.createElement('div');
cardsSwitch.classList = 'cards-switch';
cardsSwitch.innerHTML = 'switch';

const cardsTable = document.createElement('div');
cardsTable.classList = 'cards-table';

function getRenderedTableBody(products) {
    console.log(products.products);
    return products.products
        .map((products) => {
            return `<div class="card-container" data-id="${products.id}">
        <div class="img-container">
        <img class="card-image" src="${products.images[0]}" width="300" alt="card-image">
        <div class="card-price">${products.price}</div>
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
