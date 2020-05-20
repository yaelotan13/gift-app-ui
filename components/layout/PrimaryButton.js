import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: '22%' 
    },
    smallButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '4%',
    },
    button: {
        width: 212,
        height: 50,
        borderRadius: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    disabled: {
        backgroundColor: colors.superLightGrey,
    },
    smallButton: {
        width: '33%',
        height: 40,
    },
    buttonTitle: {
        color: colors.white,
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
    },
});

const PrimaryButton = (props) => {
    const { handlePress, accessibilityLabel, buttonTitle, small, disabled } = props;

    return (
        <View style={small ? [styles.buttonContainer, styles.smallButtonContainer] : styles.buttonContainer}>
            <TouchableOpacity
                style={small ? [styles.button, styles.smallButton] : disabled ? styles.disabled : styles.button}
                onPress={handlePress}
                underlayColor='#fff'
                accessibilityLabel={accessibilityLabel}
            >
                <Text style={styles.buttonTitle}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PrimaryButton;
