//для правильного форматирования кредитной карты

const cardNum = document.getElementById('card-number');
const errorCard = document.querySelector('.error-card');

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
    function checkCard(){

    if(cardNum.value.length === 19){
        cardNum.style.background = 'green';
        errorCard.style.display = 'none';
    }else {
        cardNum.style.background = 'red';
        errorCard.innerHTML = 'Error';
        errorCard.style.display = 'block';
    }
    }

    cardNum.addEventListener('input', checkCard);
    button.addEventListener('click', checkCard);
}

//валидация email инпута
//из ТЗ - "E-mail". Валидация: проверяется, является ли введенный текст электронной почтой
const inputEmail = document.querySelector('.input_email');
const button = document.querySelector('.btn_confirm');

const errorName = document.querySelector('.error-name');
const errorTel = document.querySelector('.error-telephone');
const errorAddress = document.querySelector('.error-address');
const errorEmail = document.querySelector('.error-email');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

function onInput() {
    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.background = 'green';
        errorEmail.style.display = 'none';
    } else {
        inputEmail.style.background = 'red';
        errorEmail.innerHTML = 'Error';
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
        errorName.innerHTML = 'Error';
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
    return name.split(' ').every(el => el.length >= 3)
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
        errorTel.innerHTML = 'Error';
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
        errorAddress.innerHTML = 'Error';
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
function messageOrderIsProcessed(){
    alert('Заказ оформлен!');
    localStorage.clear();
    setTimeout(() => window.location.href = 'index.html', 3000);
}

// messageOrderIsProcessed()