import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import bubble from '../../assets/images/bubble.png';
import bike from '../../assets/images/bike.png';
import colors from '../../constants/colors';
import { Header } from '../../components/layout';
import { fetchAllCategories } from '../../store/categories/actions';

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
        marginTop: 36,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'roboto-bold',
    },
    paragraph: {
        marginTop: 16,
        fontSize: 16,
        color: colors.grey,
        fontFamily: 'muli-light',
    },
    buttonAreaContainer: {
        height: '30%',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginLeft: '22%' 
    },
    button: {
        width: 212,
        height: 50,
        borderRadius: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    discoverText: {
        color: colors.white,
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
        color: colors.lightGrey,
        marginRight: 3
    },
    signIn: {
        textDecorationLine: 'underline',
        color: colors.lightGrey
    }
});

const Discover = (props) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllCategories());
    }, []);

    const handlePress = () => {
        props.navigation.navigate({ routeName: 'MainCategories' })
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={bubble} style={styles.bubbleImg} />
                <Image source={bike} style={styles.bikeImg} />
            </View>
            <Header header="Discover Your Next Gift" subHeader="This is a paragraph that would explain more about why this app is so amazing and why you should use it every day" />
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
