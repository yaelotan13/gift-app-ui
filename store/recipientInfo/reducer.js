import * as actionTypes from './actionTypes';

const initialState = {
    gender: null,
    age: null,
    ocassion: null,
    relationship: null,
    price: 'All Prices'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RECIPIENT_AGE: {
            return {
                ...state,
                age: action.age
            }
        }
        case actionTypes.STORE_RECIPIENT_GENDER: {
            return {
                ...state,
                gender: action.gender
            }
        }
        case actionTypes.STORE_RECIPIENT_OCASSION: {
            return {
                ...state,
                ocassion: action.ocassion
            }
        }
        case actionTypes.STORE_RECIPIENT_RELATIONSHIP: {
            return {
                ...state,
                relationship: action.relationship
            }
        }
        case actionTypes.STORE_RECIPIENT_PRICE: {
            return {
                ...state,
                price: action.price
            }
        }
        default: {
            return state;
        }
    };
};

export default reducer;
