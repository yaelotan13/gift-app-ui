import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, FlatList, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import { mainCategories } from '../../mock-api/data/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header, Search } from '../../components/layout';
import { storeSelecedMainCategories } from '../../store/categories/actions';

const styles = StyleSheet.create({ 
    listContainer: {
        width: '100%',
      },
      headerContainer: {
        marginBottom: 26,
      },
      footer: {
        marginBottom: 10
      },
      mainCategoriesContainer: {
          paddingLeft: 12,
          paddingRight: 12
      },
      mainCategory: {
        marginVertical: 8,
        marginHorizontal: 8,
        width: '28%',
        height: 150,
        overflow: 'hidden',
      },
      image: {
        height: 126,
        borderRadius: 10,
      },
      checked: {
        height: 126,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, .4)', 
        justifyContent: 'center',
        alignItems: 'center'
      },
      checkmark: {
          zIndex: 2,
      },
      title: {
        fontSize: 14,
        marginTop: 7,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'muli'
      },
      
});

const CheckMark = () => 
    <View style={styles.checked}>
        <AntDesign style={styles.checkmark} name="check" size={54} color="white" />
    </View>;

const MainCategories = (props) => {
    const [selected, setSelected] = useState([]);
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeSelecedMainCategories([...selected]))
    }, [selected]);

    const categoryPressed = (category) => {
        if (selected.indexOf(category) < 0) {
            setSelected(selected => selected.concat(category));
        } else {
            setSelected(selected => selected.filter(curCategory => curCategory !== category));
        }
    };

    const renderMainCategory = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.mainCategory}
                onPress={() => categoryPressed(itemData.item)}
            >
                <ImageBackground imageStyle={{ borderRadius: 6}} style={styles.image} source={itemData.item.main_category_image} >
                    { selected.indexOf(itemData.item) > -1 && <CheckMark />} 
                </ImageBackground>
                <Text style={styles.title}>{itemData.item.main_category_name}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.listContainer}>
            {/* <Search placeholder="Search for hobbies" value={searchText} onChange={() => {}} /> */}
            <FlatList 
                ListHeaderComponent={<Header header="Let's Get You Started" subHeader="Select a few hobbies and interests to get started." />}
                ListHeaderComponentStyle={styles.headerContainer}
                data={mainCategories}
                renderItem={renderMainCategory}
                numColumns={3}
                keyExtractor={itemData => itemData.main_category_id + " "}
                style={styles.mainCategoriesContainer}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={styles.footer}
            />
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
