import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from '../../hooks';
import { mainCategoriesSelector } from '../../store/selectors/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header, Search } from '../../components/layout';

import { subCategories as allSubCategories } from '../../mock-api/data/categories';

const styles = StyleSheet.create({
    container: {
        height: '100%'
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
    const [selected, setSelected] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const mainCategories = useSelector(mainCategoriesSelector);

    useEffect(() => {
        const mainCategoriesIds = Array.from(mainCategories, category => category.main_category_id);
        setSubCategories([...allSubCategories.filter(subCategory => mainCategoriesIds.indexOf(subCategory.main_category_id) > -1)]);
    }, []);

    const categoryPressed = (subCategory) => {
        if (selected.indexOf(subCategory) < 0) {
            console.log('adding the sub category');
            console.log(subCategory);
            console.log(selected);
            setSelected(selected => selected.concat(subCategory))
        } else {
            console.log('deleting the sub category');
            console.log(subCategory);
            console.log(selected);
            setSelected(selected => selected.filter(category => category !== subCategory));
        }
    };

    const renderSubCategory = (itemData) => (
        <TouchableOpacity onPress={() => categoryPressed(itemData.item.sub_category_id)}>
            <View style={selected.indexOf(itemData.item.sub_category_id) > 0 ? [styles.subCategory, styles.heighlight] : styles.subCategory}>
                <Text style={styles.subCategoryTitle}>{itemData.item.sub_category_name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderSubCategories = (itemData) => {
        const releventSubCategories = subCategories.filter(subCategory => subCategory.main_category_id === itemData.item.main_category_id);

        return (
            <View style={styles.subCategoryContainer}>                
                <Text style={styles.mainCategoryTitle}>{itemData.item.main_category_name}</Text>
                <FlatList
                    style={styles.subCategoriesItemsContainer}
                    data={releventSubCategories}
                    renderItem={renderSubCategory}
                    keyExtractor={itemData => itemData.sub_category_id}
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

    return (
        <View>
                {
                    mainCategories.length === 0 ? 
                    renderNoMainCategoriesSelectedMessgae()
                    :
                            <FlatList
                                ListHeaderComponent={<Header header="Let's Get More Specific" subHeader="Choose sub-categories that intests you the most." />}
                                ListHeaderComponentStyle={styles.header}
                                style={styles.categoriesList}
                                data={mainCategories}
                                renderItem={renderSubCategories}
                                keyExtractor={itemData => itemData.main_category_id}
                                numColumns={1}
                                ListFooterComponent={<Text></Text>}
                                ListFooterComponentStyle={styles.footer}
                            />
                }
        </View>

    );
};

SubCategories.navigationOptions = navigationData => {
    return {
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Next' iconName="rightcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })} />
        </HeaderButtons>,
        headerLeft:
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'MainCategories' })} />
        </HeaderButtons>,
    }
}

export default SubCategories;
