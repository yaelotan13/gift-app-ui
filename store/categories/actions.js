import * as actionTypes from './actionTypes';

export const storeSelecedMainCategories = (mainCategories) => {
    return {
        type: actionTypes.STORE_SELECTED_MAIN_CATEGORIES,
        mainCategories
    }
};