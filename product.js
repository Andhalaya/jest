
let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Both name and price must be defined');
    }
    if (products.some(product => product.name === name)) {
        throw new Error('Product already exists');
    }
    id++;
    products.push({ id, name, price });
}

function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('Product does not exist');
    }
    products.splice(index, 1);
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('Product does not exist');
    }
    return product;
}

function updateProduct(productId, name, price) {
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        throw new Error('Product does not exist');
    }
    if (name) {
        products[productIndex].name = name;
    }
    if (price) {
        products[productIndex].price = price;
    }
}

function getProducts() {
    return products;
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProduct,
    updateProduct,
    getProducts
};
