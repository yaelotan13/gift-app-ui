import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    circlesContainer: {
        flexDirection: 'row'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 12,
        backgroundColor: colors.secondary
    },
    heighlight: {
        backgroundColor: colors.primary
    }
});

const Progress = (props) => {
    return (
        <View style={styles.circlesContainer}>
            <View style={ props.curScreen === 'MainCategories' ? [styles.circle, styles.heighlight] : styles.circle } />
            <View style={ props.curScreen === 'SubCategories' ? [styles.circle, styles.heighlight] : styles.circle } />
            <View style={ props.curScreen === 'PersonalDetails' ? [styles.circle, styles.heighlight] : styles.circle } />
        </View>
    )
};

export default Progress;