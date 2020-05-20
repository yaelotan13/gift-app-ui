import * as utilData from './utilData';
import * as dataTypes from './dataTypes';

export const getRecipients = (gender) => {
    switch (gender) {
        case dataTypes.Female : {
            return utilData.femaleRecipients
        }
        case dataTypes.Male : {
            return utilData.maleRecipients
        }
        default : {
            return utilData.getBothGenderRecipients
        }
    }
};

export const getOccasion = (recipient) => {
    switch (recipient) {
        case dataTypes.Mom: {
            return utilData.getMomOccasions;
        }
        case dataTypes.Dad: {
            return utilData.getDadOccasions;
        }
        case dataTypes.Sister: {
            return utilData.getSiblingsOccasions;
        }
        case dataTypes.Brother: {
            return utilData.getSiblingsOccasions;
        }
        case dataTypes.Grandma: {
            return utilData.getGrandParantsOccasions;
        }
        case dataTypes.Grandpa: {
            return utilData.getGrandParantsOccasions;;
        }            
        case dataTypes.Girlfriend: {
            return utilData.getPartnerOccasions;
        }
        case dataTypes.Boyfriend: {
            return utilData.getPartnerOccasions;
        }
        case dataTypes.Husband: {
            return utilData.getPartnerOccasions;
        }
        case dataTypes.Wife: {
            return utilData.getPartnerOccasions;
        }
        case dataTypes.Friend: {
            return utilData.getFriendOccasions;
        }
        case dataTypes.Child: {
            return utilData.getChildOccasions;
        }
    }
};

export const shouldAskAboutAge = recipient => recipient === dataTypes.Sister || recipient === dataTypes.Brother || recipient === dataTypes.Friend || recipient === dataTypes.Child;

export const enabled = recipentState => recipentState.gender && recipentState.relationship && recipentState.ocassion;