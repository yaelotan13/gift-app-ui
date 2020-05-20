import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native'; 

import colors from '../../../constants/colors';
import Star from './Star';

const styles = StyleSheet.create({
    container: {
        width: '45%',
        borderRadius: 20,
        margin: '2%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 0
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        paddingBottom: 0,
        padding: 3
    },
    imageContainer: {
        borderTopEndRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        height: 150,
        width: '85%',
        marginLeft: '7%',
        resizeMode: 'contain',
    },
    productInfo: {
        marginHorizontal: '6%',
        marginTop: '3%',
        paddingBottom: 6,
    },
    productTitle: {
        marginTop: '3%',
        fontFamily: 'muli',
        fontSize: 14
    },
    starsContainer: {
        marginTop: '6%'
    },
    stars: {
        flexDirection: 'row'
    },
    separator: {
        height: 22
    },
    storeNameAndPriceContainerWrapper: {
        width: '100%',
        justifyContent: 'space-around'
    },
    storeNameAndPriceContainer: {
        paddingBottom: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    storeName: {
        fontFamily: 'muli-light',
        fontSize: 12
    },
    price: {
        fontFamily: 'muli-bold',
        fontSize: 14
    }
});

const getStars = (numOfStars) => {
    const NUM_STARS = 5;
    const stars = new Array(NUM_STARS);
    stars.fill(' ');

    for (let i = 0; i < numOfStars; i++) {
        stars[i] = 'filled'
    }
    
    return (
        <View style={styles.stars}>
            {stars.map((star, index) => <Star key={index} filled={star === 'filled'} />)}
        </View>
    )
};

const Product = (props) => {
    const { image, product_name: name, stars, store, price, link } = props.product;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.productInfo}>
                <TouchableOpacity onPress={() => Linking.openURL(link)}>
                    <Text style={styles.productTitle}>{name}</Text>
                </TouchableOpacity>
                <View style={styles.starsContainer}>
                    {getStars(stars)}
                </View>
                <View style={styles.separator} />
                <View style={styles.storeNameAndPriceContainerWrapper}>
                    <View style={styles.storeNameAndPriceContainer}>
                        <Text style={styles.storeName}>{store}</Text>
                        <Text style={styles.price}>{`${price}$`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Product;
