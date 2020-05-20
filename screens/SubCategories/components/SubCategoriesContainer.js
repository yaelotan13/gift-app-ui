import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import SubCategory from './SubCategory';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    subCategoryContainer: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: 15,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.36,
        shadowRadius: 6,
        backgroundColor: 'white'
    },
    mainCategoryTitle: {
        fontFamily: 'muli-bold',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    subCategoriesItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

const SubCategoriesContainer = (props) => {
    const { filteredSubCategories, itemData, selected, setSelected } = props;

    const renderSubCategory = itemData => <SubCategory itemData={itemData} selected={selected} setSelected={setSelected} />

    const releventSubCategories = filteredSubCategories.filter(subCategory => subCategory.main_category_id === itemData.item.main_category_id);

    return (
        <View style={styles.subCategoryContainer}>                
            <Text style={styles.mainCategoryTitle}>{itemData.item.main_category_name}</Text>
            <FlatList
                style={styles.subCategoriesItemsContainer}
                data={releventSubCategories}
                renderItem={renderSubCategory}
                keyExtractor={itemData => itemData.sub_category_id.toString()}
            />
        </View>
    )
};

export default SubCategoriesContainer;
