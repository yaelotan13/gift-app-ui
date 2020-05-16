const categoriesResponse = require('../response/categories');

const register = (app) => {
    app.get('/categories/main', categoriesResponse.getMainCategories);
    app.get('/categories/sub', categoriesResponse.getSubCategories);
};

module.exports = {
    register
}