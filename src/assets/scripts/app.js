import { apiURL } from './DB';

let products = await getUsers();

async function getUsers() {
    return (await fetch(apiURL)).json();
}

const mainSelector = document.querySelector('.main');
const cartsTable = document.createElement('div');
cartsTable.classList = 'carts__table';

async function getRenderedTableBody(products) {
    console.log(products.products);
    console.log(products);
    // console.log(Array.from(products.products));
    // return console.log(await products.products.map(({ id, title, description }) => `${id}, ${title}, ${description}`));
    return await products.products.map(({ id, title, description }) => `${id}, ${title}, ${description}`);
}
cartsTable.innerHTML = getRenderedTableBody(products);
mainSelector.appendChild(cartsTable);
