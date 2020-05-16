const categoriesMock = require('../data/categories');

const getMainCategories = (req, res) => {
    console.log('[GET] /categories/main');
    res.status(200).send(categoriesMock.mainCategories)
};

const getSubCategories = (req, res) => {
    console.log('[GET] /categories/main');
    res.status(200).send(categoriesMock.subCategories)
};

module.exports = {
    getMainCategories,
    getSubCategories
}