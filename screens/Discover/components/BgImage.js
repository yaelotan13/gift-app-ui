import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import bubble from '../../../assets/images/bubble.png';
import bike from '../../../assets/images/bike.png';

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        height: '40%',
        marginBottom: '5%'
    },
    bubbleImg: {
        width: '90%',
        height: '100%',
        zIndex: 0,
    },
    bikeImg: {
        zIndex: 1,
        position: 'absolute',
        top: 0
    },
});

const BgImage = (props) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={bubble} style={styles.bubbleImg} />
            <Image source={bike} style={styles.bikeImg} />
        </View>
    )
};

export default BgImage;
