export const getRecipients = (gender) => {
    switch (gender) {
        case 'Female' : {
            return [{ value: 'Mom' }, { value: 'Grandma' }, { value: 'Sister' },  { value: 'Girlfriend' }, { value: 'Wife' }, { value: 'Friend'}, { value: 'Child' }]
        }
        case 'Male' : {
            return [{ value: 'Dad' }, { value: 'Grandpa' }, { value: 'Brother' },  { value: 'Boyfriend' }, { value: 'Husband' }, { value: 'Friend'}, { value: 'Child' }]
        }
        default : {
            return [{ value: 'Friend' }, { value: 'Child' }]
        }
    }
};

export const getOccasion = (recipient) => {
    switch (recipient) {
        case 'Mom': {
            return [{ value: 'Birthday' }, { value: "Mother's day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Dad': {
            return [{ value: 'Birthday' }, { value: "Father's day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Sister': {
            return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}, { value: 'Graduation'}, { value: 'New child'}]
        }
        case 'Brother': {
            return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}, { value: 'Graduation'}, { value: 'New child'}]
        }
        case 'Grandma': {
            return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Grandpa': {
            return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }            
        case 'Girlfriend': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversary' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Boyfriend': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversary' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Husband': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversery' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Wife': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversery' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Friend': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'New House' }, { value: 'New Child' }, { value: 'Graduation' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
        case 'Child': {
            return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'New House' }, { value: 'New Child' }, { value: 'Graduation' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
        }
    }
};

export const shouldAskAboutAge = recipient => recipient === 'Sister'|| recipient === 'Brother' || recipient === 'Friend' || recipient === 'Child';