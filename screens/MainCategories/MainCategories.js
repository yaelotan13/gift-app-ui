import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header, Search } from '../../components/layout';
import { storeSelecedMainCategories, searchMainCategories } from '../../store/categories/actions';
import { categoriesSelector, filteredMainCategoriesSelector } from '../../store/selectors/categories';
import { useSelector } from '../../hooks';
import { MainCategory } from './components';

const styles = StyleSheet.create({ 
    listContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    headerContainer: {
        marginBottom: 46,
    },
    footer: {
        marginBottom: 10
    },
    mainCategoriesContainer: {
        paddingLeft: 16,
        paddingRight: 12
    },  
});

const MainCategories = (props) => {
    const [selected, setSelected] = useState([]);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const categoriesState = useSelector(categoriesSelector);
    const filteredMainCategories = useSelector(filteredMainCategoriesSelector);

    useEffect(() => {
        dispatch(storeSelecedMainCategories([...selected]))
    }, [selected]);

    const renderMainCategory = itemData => <MainCategory itemData={itemData} selected={selected} setSelected={setSelected} />

    const handleSearchTextChange = (text) => {
        setSearchText(text);
        dispatch(searchMainCategories(text));
    };

    return (
        <View style={styles.listContainer}>
            {categoriesState.loading ?
            <ActivityIndicator size="large" color="#0000ff" />
            :
            <FlatList 
                ListHeaderComponent={
                    <View>
                        <Header header="Let's Get You Started" subHeader="Select a few hobbies and interests to get started." />
                        <Search placeholder="Search for categories" value={searchText} onChange={handleSearchTextChange} />
                    </View>
                }
                ListHeaderComponentStyle={styles.headerContainer}
                data={filteredMainCategories}
                renderItem={renderMainCategory}
                numColumns={3}
                keyExtractor={itemData => itemData.main_category_id + " "}
                style={styles.mainCategoriesContainer}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={styles.footer}
            />}
        </View>
    )
};

MainCategories.navigationOptions = navigationData => {
    return {
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Next' 
                iconName="rightcircle" 
                color={colors.primary} 
                onPress={() => {
                    navigationData.navigation.navigate({ routeName: 'SubCategories' })
                }} />
        </HeaderButtons>,
        headerLeft: () => ''
    }
}

export default MainCategories;
