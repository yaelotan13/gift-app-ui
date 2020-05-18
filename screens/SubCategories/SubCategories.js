import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from '../../hooks';
import { categoriesSelector, filteredSubCategoriesSelector } from '../../store/selectors/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header, Search } from '../../components/layout';
import { storeReleventSubCategories, searchSubCategories } from '../../store/categories/actions';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    noMainCategoriesSelected: {
        
    },
    categoriesList: {
        height: '100%',
    },
    header: {
        marginBottom: 30
    },
    footer: {
        paddingBottom: 50
    },
    spinner: {
        marginTop: '20%'
    },
    subCategoriesContainer: {
        marginTop: '10%'
    },
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
    subCategoryTitle: {
        fontSize: 14,
        fontFamily: 'muli-extra-light'
    }
});

const SubCategories = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const categoriesState = useSelector(categoriesSelector);
    const filteredSubCategories = useSelector(filteredSubCategoriesSelector);
    const { selectedMainCategories, allSubCategories } = categoriesState;

    useEffect(() => {
        const mainCategoriesIds = Array.from(selectedMainCategories, category => category.main_category_id);
        setSubCategories([...allSubCategories.filter(subCategory => mainCategoriesIds.indexOf(subCategory.main_category_id) > -1)]);
    }, []);

    useEffect(() => {
        dispatch(storeReleventSubCategories(subCategories));
    }, [subCategories]);

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

    const getStyle = (subCategoryId) => selected.indexOf(subCategoryId) > 0 ? [styles.subCategory, styles.heighlight] : styles.subCategory;

    const renderSubCategory = (itemData) => (
        <TouchableOpacity onPress={() => categoryPressed(itemData.item.sub_category_id)}>
            <View style={getStyle(itemData.item.sub_category_id)}>
                <Text style={styles.subCategoryTitle}>{itemData.item.sub_category_name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderSubCategories = (itemData) => {
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

    const renderNoMainCategoriesSelectedMessgae = () => {
        return (
            <View style={styles.noMainCategoriesSelected}>
                <Text>You didn't select any categories...</Text>
            </View>
        )
    };

    const handleSearchTextChange = (text) => {
        setSearchText(text);
        dispatch(searchSubCategories(text));
    };

    return (
        <View style={styles.container}>
            {selectedMainCategories.length === 0 ? 
            renderNoMainCategoriesSelectedMessgae()
            :
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Header header="Let's Get More Specific" subHeader="Choose sub-categories that intests you the most." />
                        <Search placeholder="Search for categories" value={searchText} onChange={handleSearchTextChange} />
                    </View>
                }
                ListHeaderComponentStyle={styles.header}
                style={styles.categoriesList}
                data={selectedMainCategories}
                renderItem={renderSubCategories}
                keyExtractor={itemData => itemData.main_category_id.toString()}
                numColumns={1}
                ListFooterComponent={<Text></Text>}
                ListFooterComponentStyle={styles.footer}
            />}
        </View>

    );
};

SubCategories.navigationOptions = navigationData => {
    return {
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Next' iconName="rightcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })} />
        </HeaderButtons>,
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'MainCategories' })} />
        </HeaderButtons>,
    }
}

export default SubCategories;
