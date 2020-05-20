import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from '../../hooks';
import { categoriesSelector, filteredSubCategoriesSelector } from '../../store/selectors/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header, Search, SecondaryButton } from '../../components/layout';
import { storeReleventSubCategories, searchSubCategories } from '../../store/categories/actions';
import { SubCategoriesContainer, NoSubCategories } from './components';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
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

    const renderSubCategories = itemData => <SubCategoriesContainer filteredSubCategories={filteredSubCategories} itemData={itemData} selected={selected} setSelected={setSelected} />

    const handleSearchTextChange = (text) => {
        setSearchText(text);
        dispatch(searchSubCategories(text));
    };

    return (
        <View style={styles.container}>
            {selectedMainCategories.length === 0 ? 
            <NoSubCategories content="You didn't select any categories..." />
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
                ListFooterComponent={<SecondaryButton handlePress={() => props.navigation.navigate({ routeName: 'PersonalDetails' })} accessibilityLabel="Next" buttonTitle="Next" />}
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
