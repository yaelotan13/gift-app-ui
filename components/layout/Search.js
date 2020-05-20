import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: '5%',
        marginTop: '5%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        width: '90%',
        paddingLeft: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6, 
        backgroundColor: 'white'
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 12,
    },
    input: {
        flex: 1,
        paddingTop: 12,
        paddingLeft: 0,
        color: colors.superLightGrey,
        paddingLeft: 15,
    }
});

const Search = (props) => {
    const { value, onChange, placeholder } = props;

    return (
        <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="search1" size={20} color={colors.superLightGrey} />
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChange} />
        </View>
    );
};

export default Search;
