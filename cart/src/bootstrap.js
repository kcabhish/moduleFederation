import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items`;

document.querySelector('#cart-dev').innerHTML = cartText;