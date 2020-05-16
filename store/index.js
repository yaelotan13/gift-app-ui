import { combineReducers, createStore } from 'redux';

import categoryReducer from './categories/reducer';

const rootReducer = combineReducers({
    categories: categoryReducer, 
});

export const store = createStore(rootReducer);