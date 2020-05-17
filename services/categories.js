import { subCategories, mainCategories } from '../mock-api/data/categories';

export const getAllCategories = () => {
    return {
        mainCategories: mainCategories,
        subCategories: subCategories
    }
}