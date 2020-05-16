import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
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
});

const Header = (props) => {
    const { header, subHeader } = props;

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.subHeader}>{subHeader}</Text>
        </View>
    );
};

export default Header;
