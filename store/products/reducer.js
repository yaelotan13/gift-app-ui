import * as actionTypes from './acionTypes';

const initialState = {
    loading: false,
    hasError: false,
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS : {
            return {
                ...state,
                loading: true,
                hasError: false,
            }
        }
        case actionTypes.FETCH_PRODUCTS_SUCCESS : {
            return {
                ...state, 
                hasError: false,
                loading: false,
                products: action.payload
            }
        }
        case actionTypes.FETCH_PRODUCTS_FAILURE : {
            return {
                ...state,
                loading: false,
                hasError: true,
            }
        }
        default : {
            return state;
        }
    }
};

export default reducer;
