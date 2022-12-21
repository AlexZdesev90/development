const button = document.querySelector('.btn_confirm');
//для правильного форматирования кредитной карты

const cardNum = document.getElementById('card-number');
const errorCard = document.querySelector('.error-card');
// const cardLogo = document.querySelector(".card-logo");
// const cardLogoContainer = document.querySelector(".logo-card-container");

cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
        let c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;

    function checkCard() {

        if (cardNum.value.length === 19) {
            cardNum.style.background = 'green';
            errorCard.style.display = 'none';
        } else {
            cardNum.style.background = 'red';
            errorCard.innerHTML = 'Error';
            errorCard.style.display = 'block';
        }
    }

    cardNum.addEventListener('input', checkCard);
    button.addEventListener('click', checkCard);
}

// блок ввода срока действия карты
const expInput = document.querySelector('.exp_date');
const errorDate = document.querySelector('.error-date');

function validateExp() {
    if (expInput.value.length === 2) {
        expInput.value += '/';
    }
    if (!validate(expInput.value)) {
        expInput.style.background = 'red';
        errorDate.innerHTML = 'Wrong card expiration date !';
        errorDate.style.display = 'block';
    } else {
        expInput.style.background = 'green';
        errorDate.style.display = 'none';
    }
}

function validate(value) {
    const currentYear = (new Date().getFullYear()).toString().slice(-2);
    let [part1, part2] = value.split('/');
    return (value[2] === '/' && value.length === 5 && part1 <= 12 && part2 >= currentYear);
}



expInput.addEventListener('input', validateExp);
button.addEventListener('click', validateExp);

const inputCVV = document.querySelector('.input_cvv');
const errorCVV = document.querySelector('.error-cvv');

const CVV_REGEXP = /\d{3,3}/;

function validateCVV() {

    if (!valid(inputCVV.value)) {
        inputCVV.style.background = 'red';
        errorCVV.innerHTML = 'Wrong CVV !';
        errorCVV.style.display = 'block';
    } else {
        inputCVV.style.background = 'green';
        errorCVV.style.display = 'none';
    }
}

function valid(value) {
    return CVV_REGEXP.test(value);
}

inputCVV.addEventListener('input', validateCVV);
button.addEventListener('click', validateCVV);

//валидация email инпута
//из ТЗ - "E-mail". Валидация: проверяется, является ли введенный текст электронной почтой
const inputEmail = document.querySelector('.input_email');

const errorName = document.querySelector('.error-name');
const errorTel = document.querySelector('.error-telephone');
const errorAddress = document.querySelector('.error-address');
const errorEmail = document.querySelector('.error-email');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.background = 'green';
        errorEmail.style.display = 'none';
    } else {
        inputEmail.style.background = 'red';
        errorEmail.innerHTML = 'Wrong Email !';
        errorEmail.style.display = 'block';
    }
}

inputEmail.addEventListener('input', onInput);
button.addEventListener('click', onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}


//валидация name инпута
//"Имя и Фамилия". Валидация: содержит не менее двух слов, длина каждого не менее 3 символов 
const inputName = document.querySelector('.input_name');

const handleInput = () => {
    inputName.style.background = '';
}

const handleName = () => {
    handleInput();

    const value = inputName.value.trim();
    if (!checkName(value)) {

        inputName.style.background = 'red';
        errorName.innerHTML = 'Wrong Name !';
        errorName.style.display = 'block';

    } else {

        if (!/\b\w+\b(?:.*?\b\w+\b){1}/.test(value)) {
            inputName.style.background = 'red';
        } else {
            inputName.style.background = 'green';
            errorName.style.display = 'none';
        }

    }
}

function checkName(name) {
    return name.split(' ').every(el => el.length >= 3);
}

inputName.addEventListener('input', handleName);
button.addEventListener('click', handleName);


//валидация phone инпута
//"Номер телефона". Валидация: должно начинаться с '+', содержать только цифры и быть не короче 9 символов 

const phoneInput = document.querySelector('.input_telephone');

const regexPhone = /(\+)\d{9}/;

phoneInput.addEventListener('input', onInputTel);

function onInputTel() {
    if (isTelValid(phoneInput.value)) {
        phoneInput.style.background = 'green';
        errorTel.style.display = 'none';
    } else {
        phoneInput.style.background = 'red';
        errorTel.innerHTML = 'Wrong phone number !';
        errorTel.style.display = 'block';
    }
}

button.addEventListener('click', onInputTel);

function isTelValid(value) {
    return regexPhone.test(value);
}

//валидация adress инпута
//"Адрес доставки". Валидация: содержит не менее трех слов, длина каждого не менее 5 символов
const inputAddress = document.querySelector('.input_address');

const handleAddress = () => {
    inputAddress.style.background = '';
}

const handleForAddress = () => {
    handleAddress();

    const value = inputAddress.value.trim();
    if (!checkAddress(value)) {
        inputAddress.style.background = 'red';
        errorAddress.innerHTML = 'Wrong address !';
        errorAddress.style.display = 'block';
    } else {

        if (!/\b\w+\b(?:.*?\b\w+\b){2}/.test(value)) {
            inputAddress.style.background = 'red';
        } else {
            inputAddress.style.background = 'green';
            errorAddress.style.display = 'none';
        }

    }
}

function checkAddress(name) {
    return name.split(" ").every(el => el.length >= 5);
}

inputAddress.addEventListener('input', handleForAddress);
button.addEventListener('click', handleForAddress);


//логика перехода на главную страницу. После оформления заказа
//Из ТЗ - > при успешном прохождении валидации всех полей и нажатии на кнопку, выводится сообщение, что заказ оформлен. Затем, спустя 3-5 секунд происходит редирект на главную страницу магазина. Корзина при этом очищается
const buttonOrder = document.querySelector(".btn_order");

function checkValid(){

    if (expInput.style.background === 'green' && inputCVV.style.background === 'green' 
    && cardNum.style.background === 'green' && inputEmail.style.background === 'green'
    && inputName.style.background === 'green' && phoneInput.style.background === 'green'
    && inputAddress.style.background === 'green') {
        buttonOrder.removeAttribute('disabled');
    }

}

button.addEventListener('click', checkValid);

function messageOrderIsProcessed() {
    alert('Заказ оформлен!');
    localStorage.clear();
    setTimeout(() => window.location.href = 'index.html', 3000);
}

buttonOrder.addEventListener('click', messageOrderIsProcessed)

// messageOrderIsProcessed()