import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import bubble from '../../assets/images/bubble.png';
import bike from '../../assets/images/bike.png';

const styles = StyleSheet.create({
    container: {
        marginTop: 56,
        height: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        height: '40%'
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
    contentContainer: {
        paddingLeft: 42,
        paddingRight: 36,
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
    },
    header: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    paragraph: {
        fontSize: 16,
        color: '#4F4F4F'
    },
    buttonAreaContainer: {
        height: '20%',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginLeft: '22%' // TODO center
    },
    button: {
        width: 212,
        height: 50,
        borderRadius: 60,
        backgroundColor: '#D04460',
        justifyContent: 'center'
    },
    discoverText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
    },
    haveAnAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },  
    haveAnAccount: {
        color: '#828282',
        marginRight: 3
    },
    signIn: {
        textDecorationLine: 'underline',
        color: '#4F4F4F'
    }
});

const Discover = (props) => {
    console.log(props);
    const handlePress = () => {
        props.navigation.navigate({ routeName: 'MainCategories' })
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={bubble} style={styles.bubbleImg} />
                <Image source={bike} style={styles.bikeImg} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Discover Your Next Gift</Text>
                <Text style={styles.paragraph}>This is a paragraph that would explain more about why this app is so amazing and why you should use it every day</Text>
            </View>
            <View style={styles.buttonAreaContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlePress}
                        underlayColor='#fff'
                        accessibilityLabel="Discover our gifts"
                    >
                        <Text style={styles.discoverText}>Discover</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.haveAnAccountContainer}>
                    <Text style={styles.haveAnAccount}>Already have an account?</Text>
                    <Text style={styles.signIn}>sign in</Text>
                </View>
            </View>
        </View>
    )
};

export default Discover;
