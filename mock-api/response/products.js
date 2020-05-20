const productsMock = require('../data/categories');

const getProducts = (req, res) => {
    console.log('[GET] /products');
    res.status(200).send(productsMock.products)
};

module.exports = {
    getProducts,
}