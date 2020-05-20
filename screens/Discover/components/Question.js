import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    haveAnAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },  
    haveAnAccount: {
        color: colors.lightGrey,
        marginRight: 3
    },
    signIn: {
        textDecorationLine: 'underline',
        color: colors.lightGrey
    }
});

const Question = (props) => {
    const { question, actionTitle } = props;

    return (
        <View style={styles.haveAnAccountContainer}>
            <Text style={styles.haveAnAccount}>{question}</Text>
            <Text style={styles.signIn}>{actionTitle}</Text>
        </View>
    );
};

export default Question;
