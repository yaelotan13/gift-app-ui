import * as actionTypes from './actionTypes';

export const storeSelecedMainCategories = (mainCategories) => {
    return {
        type: actionTypes.STORE_SELECTED_MAIN_CATEGORIES,
        mainCategories
    }
};

export const storeReleventSubCategories = (subCategories) => {
    return {
        type: actionTypes.STORE_RELEVENT_SUB_CATEGORIES,
        subCategories
    }
};

export const fetchAllCategories = () => {
    return {
        type: actionTypes.FETCH_ALL_CATEGORIES
    }
};

export const searchMainCategories = (value) => {
    return {
        type: actionTypes.SEARCH_MAIN_CATEGORIES,
        payload: value
    }
};

export const searchSubCategories = (value) => {
    return {
        type: actionTypes.SEARCH_SUB_CATEGORIES,
        payload: value
    }
};
