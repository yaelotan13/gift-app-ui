import * as dataTypes from './dataTypes';

export const questions = [
    {
        title: 'Price Range',
        data: [
            { value: "All Prices" }, 
            { value: "Up to $10" }, 
            { value: "Up to $20" }, 
            { value: "Up to $30" }, 
            { value: "$30 to $50" }, 
            { value: "$50 to $100" }, 
            { value: "$100 to $200" }, 
            { value: "Over $200" }
        ]
    },
    {
        title: 'Gender',
        data: [
            { value: dataTypes.Female }, 
            { value: dataTypes.Male }
        ]
    },
    {
        title: 'Who is the present for?',
    },
    {
        title: "What's the occasion?",
    },
    {
        title: 'Age',
        data: [
            { value: 'All' }, 
            { value: 'Baby' }, 
            { value: 'Toddler' }, 
            { value: 'Kid 4-7' }, 
            { value: 'Kid 8-12' }, 
            { value: 'Teen' }, 
            { value: 'Adult' }
        ]
    }
];

export const femaleRecipients = [
    { value: dataTypes.Mom }, 
    { value: dataTypes.Grandma }, 
    { value: dataTypes.Sister },  
    { value: dataTypes.Girlfriend }, 
    { value: dataTypes.Wife }, 
    { value: dataTypes.Friend }, 
    { value: dataTypes.Child }
];

export const maleRecipients = [
    { value: dataTypes.Dad }, 
    { value: dataTypes.Grandpa }, 
    { value: dataTypes.Brother },  
    { value: dataTypes.Boyfriend }, 
    { value: dataTypes.Husband }, 
    { value: dataTypes.Friend }, 
    { value: dataTypes.Child }
];

export const getBothGenderRecipients = [
    { value: dataTypes.Friend }, 
    { value: dataTypes.Child }
];

export const getMomOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.MotherDay}, 
    { value: dataTypes.Holiday}, 
    { value: dataTypes.ToSayThanks}, 
    { value: dataTypes.NoSpecialOccasion}
];

export const getDadOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.FatherDay }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }
];

export const getSiblingsOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.FamilyDay }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }, 
    { value: dataTypes.Graduation }, 
    { value: dataTypes.NewChild }
];

export const getGrandParantsOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.FamilyDay }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }
];

export const getPartnerOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.Anniversary }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }
];

export const getFriendOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.NewHouse }, 
    { value: dataTypes.NewChild }, 
    { value: dataTypes.Graduation }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }
];

export const getChildOccasions = [
    { value: dataTypes.Birthday }, 
    { value: dataTypes.Holiday }, 
    { value: dataTypes.NewHouse }, 
    { value: dataTypes.NewChild }, 
    { value: dataTypes.Graduation }, 
    { value: dataTypes.ToSayThanks }, 
    { value: dataTypes.NoSpecialOccasion }
];
