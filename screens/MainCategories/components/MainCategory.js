import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    mainCategory: {
        marginVertical: 4,
        marginHorizontal: 8,
        width: '29%',
        height: 150,
        overflow: 'hidden',
    },
    image: {
        backgroundColor: colors.secondary,
        height: 96,
        borderRadius: 10,
    },
    checked: {
        height: 96,
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

const MainCategory = (props) => {
    const { selected, setSelected, itemData } = props;

    const categoryPressed = (category) => {
        if (selected.indexOf(category) < 0) {
            setSelected(selected => selected.concat(category));
        } else {
            setSelected(selected => selected.filter(curCategory => curCategory !== category));
        }
    };

    return (
        <TouchableOpacity
            style={styles.mainCategory}
            onPress={() => categoryPressed(itemData.item)}
        >
            <ImageBackground 
                imageStyle={{ borderRadius: 10, width: '60%', height: '60%', marginLeft: '20%', marginTop: '15%'}} 
                style={styles.image} 
                source={itemData.item.main_category_image} 
            >
                { selected.indexOf(itemData.item) > -1 && <CheckMark />} 
            </ImageBackground>
            <Text style={styles.title}>{itemData.item.main_category_name}</Text>
        </TouchableOpacity>
    )
};

export default MainCategory;
