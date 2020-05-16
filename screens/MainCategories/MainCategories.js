import React, { useState } from 'react';
import { Text, FlatList, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { mainCategories } from '../../mock-api/data/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },  
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 16,
        marginTop: 36,
      },
      headerContainer: {
        marginTop: 26,
      },
      header: {
        fontFamily: 'roboto-bold',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      },
      subHeader: {
        fontSize: 16,
        color: colors.grey,
        marginTop: 16,
        marginHorizontal: 46,
        textAlign: 'center',
        fontFamily: 'muli'
      },
      mainCategoriesContainer: {

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
        backgroundColor: 'rgba(0, 0, 0, .3)', 
        justifyContent: 'center'
      },
      checkmark: {
          zIndex: 2,
          width: 30,
          height: 30,
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
    </View>;

const MainCategories = (props) => {
    const [selected, setSelected] = useState([]);

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
        <ScrollView style={styles.conatiner}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Let's Get You Started</Text>
                <Text style={styles.subHeader}>Select a few hobbies and interests to get started.</Text>
            </View>
            <SafeAreaView style={styles.listContainer}>
                <FlatList 
                    data={mainCategories}
                    renderItem={renderMainCategory}
                    numColumns={3}
                    keyExtractor={itemData => itemData.main_category_id}
                    style={styles.mainCategoriesContainer}
                />
            </SafeAreaView>
        </ScrollView>
    )
};

MainCategories.navigationOptions = navigationData => {
    return {
        headerTitle: 'o  o  o',
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Next' iconName='arrow-forward-outline' onPress={() => {console.log(navigationData.navigation)}} />
        </HeaderButtons>,
        headerStyle: {
        //   backgroundColor: '#f4511e',
        },
    }
}

export default MainCategories;
