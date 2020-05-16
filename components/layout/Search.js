import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginLeft: '5%',
        marginTop: '5%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.superLightGrey,
        width: '70%',
        paddingLeft: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 4, 
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 24
    },
    input: {
        flex: 1,
        paddingTop: 24,
        paddingLeft: 0,
        color: colors.superLightGrey,
        paddingLeft: 15,
    }
});

const Search = (props) => {
    const { value, onChange, placeholder } = props;
    console.log(placeholder);
    return (
        <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="search1" size={20} color={colors.superLightGrey} />
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChange} />
        </View>
    );
};

export default Search;
