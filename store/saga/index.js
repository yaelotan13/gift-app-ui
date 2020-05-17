import { takeLatest } from 'redux-saga/effects'

import * as categoriesActionTypes from '../categories/actionTypes';
import { FetchAllCategories } from './api';

function* rootSaga() {
    yield takeLatest(categoriesActionTypes.FETCH_ALL_CATEGORIES, FetchAllCategories);
};

export default rootSaga;
