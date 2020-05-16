const categoriesMock = require('../data/categories');

const getMainCategories = (req, res) => {
    console.log('[GET] /categories/main');
    res.status(200).send(categoriesMock.mainCategories)
};

module.exports = {
    getMainCategories
}