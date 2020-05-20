import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    subCategoryTitle: {
        fontSize: 14,
        fontFamily: 'muli-extra-light'
    },
    subCategory: {
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 10,
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 12,
        borderColor: colors.lightGrey
    },
    heighlight: {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary
    },
});

const SubCategory = (props) => {
    const { itemData, selected, setSelected } = props;

    const getStyle = subCategoryId => selected.indexOf(subCategoryId) > -1 ? [styles.subCategory, styles.heighlight] : styles.subCategory;

    const categoryPressed = (subCategoryId) => {
        if (selected.indexOf(subCategoryId) < 0) {
            setSelected(selected => selected.concat(subCategoryId));
            console.log('adding the sub category');
            console.log(subCategoryId);
        } else {
            setSelected(selected => selected.filter(categoryId => categoryId !== subCategoryId));
            console.log('removing the sub category');
            console.log(subCategoryId);
        }
    };

    console.log(selected);

    return (
        <TouchableOpacity onPress={() => categoryPressed(itemData.item.sub_category_id)}>
            <View style={getStyle(itemData.item.sub_category_id)}>
                <Text style={styles.subCategoryTitle}>{itemData.item.sub_category_name}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default SubCategory;
