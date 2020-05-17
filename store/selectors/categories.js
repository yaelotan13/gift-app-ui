export const categoriesSelector = (state) => state.categories;
export const selectedMainCategoriesSelector = (state) => state.categories.selectedMainCategories;
export const selectedSubCategoriesSelector = (state) => state.categories.selectedSubCategories;

export const filteredMainCategoriesSelector = (state) => {
    if (state.categories.mainCategoriesSearchText) {
        return (
            state.categories.allMainCategories.filter((mainCategory) => {
                return mainCategory.main_category_name.toLowerCase().indexOf(state.categories.mainCategoriesSearchText.toLowerCase()) >= 0;
            })
        )
    }

    return state.categories.allMainCategories;
}

export const filteredSubCategoriesSelector = (state) => {
    if (state.categories.subCategoriesSearchText) {
        return (
            state.categories.allSubCategories.filter((subCategory) => {
                return subCategory.sub_category_name.toLowerCase().indexOf(state.categories.subCategoriesSearchText.toLowerCase()) >= 0;
            })
        )
    }

    return state.categories.allSubCategories;
}
