import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i =0; i<5 ; i++ ) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}
/**
 * Context/Situation 1
 * We are running this file in development in isolation
 * we are using our local index.html file
 * which has an element with an id of dev-products
 * when this package is executed in isolation it will use the id to load the contents in the DOM
 */
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming our container doesn't have an element
    // with id 'dev-products'...
    if (el) {
        // we are probably running in isolation
        mount(el);
    }
}

/**
 * Context/Situation 2
 * We are running this file in development or production
 * through the CONTAINER app.
 * when we run the container app and the required sub modules are not ready and also the container app
 * might not have the 'dev-products' id and this will cause the error
 */
export { mount }