import * as actionTypes from './actionTypes';

const initialState = {
    mainCategories: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SELECTED_MAIN_CATEGORIES : {
            return {
                mainCategories: action.mainCategories
            }
        }
        default : {
            return state;
        }
    }
};

export default reducer;
