import { takeLatest } from 'redux-saga/effects'

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionTypes from '../products/acionTypes';
import { FetchAllCategories, FetchProducts } from './api';

function* rootSaga() {
    yield takeLatest(categoriesActionTypes.FETCH_ALL_CATEGORIES, FetchAllCategories);
    yield takeLatest(productsActionTypes.FETCH_PRODUCTS, FetchProducts);
};

export default rootSaga;
