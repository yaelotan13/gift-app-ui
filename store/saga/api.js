import { call, put } from "@redux-saga/core/effects";

import * as categoriesActionTypes from '../../store/categories/actionTypes';

import { categoriesService } from '../../services';

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