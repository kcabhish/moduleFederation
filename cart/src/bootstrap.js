import faker from 'faker';



const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items`;
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    // #cart-dev should be unique to index.html in cart container and should not be used in the main container app
    const el = document.querySelector('#cart-dev');
    if (el) {
        // if the element is found the we are probably running in isolation
        mount(el);
    }
}

export { mount };
