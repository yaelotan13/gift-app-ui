const categoriesResponse = require('../response/categories');

const register = (app) => {
    app.get('/categories', categoriesResponse.getMainCategories);
};

module.exports = {
    register
}