import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: '22%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '4%',
    },
    button: {
        width: '33%',
        height: 40,
        borderRadius: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    buttonTitle: {
        color: colors.white,
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
    },
});

const SecondaryButton = (props) => {
    const { handlePress, accessibilityLabel, buttonTitle } = props;

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
                underlayColor='#fff'
                accessibilityLabel={accessibilityLabel}
            >
                <Text style={styles.buttonTitle}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SecondaryButton;
