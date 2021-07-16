const itemName = document.querySelector('.item_name');
const itemNameItem = [
    'Какой-то товар',
    'Какой-то товар2',
    'Какой-то товар3'
];

//  form inputs

const form = document.getElementById('form')
const userName = form.querySelector('.form__input_name');
const userEmail = form.querySelector('.form__input_email');
const userPhone = form.querySelector('.form__input_phone');

const randomItem = [Math.floor(Math.random() * itemNameItem.length)];

const addItemNameItem = () => {
    itemName.textContent = '';
    return itemName.innerHTML = itemNameItem[randomItem];
}

addItemNameItem();

const getFormValues = () => {
    console.log(`user name: ${ userName.value }`);
    console.log(`user email: ${ userEmail.value }`);
    console.log(`user phone: ${ userPhone.value }`);
    console.log(`user item: ${ addItemNameItem() }`);
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormValues();
})
