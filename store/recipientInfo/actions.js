import * as actionTypes from './actionTypes';

export const storeRecipientAge = (age) => {
    return {
        type: actionTypes.STORE_RECIPIENT_AGE,
        age
    }
};

export const storeRecipientGender = (gender) => {
    return {
        type: actionTypes.STORE_RECIPIENT_GENDER,
        gender
    }
};

export const storeRecipientOcassion = (ocassion) => {
    return {
        type: actionTypes.STORE_RECIPIENT_OCASSION,
        ocassion
    }
};

export const storeRecipientRelationship = (relationship) => {
    return {
        type: actionTypes.STORE_RECIPIENT_RELATIONSHIP,
        relationship
    }
};

export const storeRecipientPrice = (price) => {
    return {
        type: actionTypes.STORE_RECIPIENT_PRICE,
        price
    }
};