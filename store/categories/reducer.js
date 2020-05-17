import * as actionTypes from './actionTypes';

const initialState = {
    loading: false,
    hasError: false,
    selectedMainCategories: [],
    selectedSubCategories: [],
    allMainCategories: [],
    allSubCategories: [],
    mainCategoriesSearchText: '',
    subCategoriesSearchText: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SELECTED_MAIN_CATEGORIES : {
            return {
                ...state, 
                selectedMainCategories: action.mainCategories
            }
        }
        case actionTypes.STORE_RELEVENT_SUB_CATEGORIES : {
            return {
                ...state,
                selectedSubCategories: action.subCategories
            }
        }
        case actionTypes.FETCH_ALL_CATEGORIES : {
            return {
                ...state, 
                laoding: true,
                hasError: false
            }
        }
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS : {
            return {
                ...state,
                loading: false,
                hasError: false,
                allMainCategories: action.payload.mainCategories,
                allSubCategories: action.payload.subCategories
            }
        }
        case actionTypes.FETCH_ALL_CATEGORIES_FAILURE : {
            return {
                ...state,
                loading: false,
                hasError: true,
            }
        }
        case actionTypes.SEARCH_MAIN_CATEGORIES: {
            return {
                ...state,
                mainCategoriesSearchText: action.payload
            }
        }
        case actionTypes.SEARCH_SUB_CATEGORIES: {
            return {
                ...state,
                subCategoriesSearchText: action.payload
            }
        }
        default : {
            return state;
        }
    }
};

export default reducer;
