const categoriesResponse = require('../response/categories');
const productsResponse = require('../response/products');

const register = (app) => {
    app.get('/categories/main', categoriesResponse.getMainCategories);
    app.get('/categories/sub', categoriesResponse.getSubCategories);
    app.get('/products', productsResponse.getProducts);
};

module.exports = {
    register
}