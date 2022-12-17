import { apiURL } from './DB';

let products = await getProducts();

async function getProducts() {
    return (await fetch(apiURL)).json();
}

const mainSelector = document.querySelector('.main');
mainSelector.classList = 'main d-flex';

const cards = document.createElement('div');
cards.classList = 'cards';

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
