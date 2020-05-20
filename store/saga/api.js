import { call, put } from "@redux-saga/core/effects";

import * as categoriesActionTypes from '../categories/actionTypes';
import * as productsActionTypes from '../products/acionTypes';

import { categoriesService, productsService } from '../../services';

export function* FetchAllCategories() {
    try {
        const result = yield call(categoriesService.getAllCategories);
        yield put({
            type: categoriesActionTypes.FETCH_ALL_CATEGORIES_SUCCESS, 
            payload: result
        });
    } catch (error) {
        yield put({
            type: categoriesActionTypes.FETCH_ALL_CATEGORIES_FAILURE, 
            payload: error
        });
    }
}

export function* FetchProducts() {
    try {
        const result = yield call(productsService.fetchProducts);
        yield put({
            type: productsActionTypes.FETCH_PRODUCTS_SUCCESS, 
            payload: result
        });
    } catch (error) {
        yield put({
            type: productsActionTypes.FETCH_PRODUCTS_FAILURE, 
            payload: error
        });
    }
}