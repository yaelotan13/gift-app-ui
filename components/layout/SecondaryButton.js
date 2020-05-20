import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        height: 30
    },
});

const SecondaryButton = (props) => {
    const { handlePress, buttonTitle, color } = props;

    return (
        <View style={styles.buttonContainer} >
            <Button title={buttonTitle} color={color} onPress={handlePress} />
        </View>
    );
};

export default SecondaryButton;
