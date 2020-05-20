import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import colors from '../../constants/colors';
import { Header, PrimaryButton } from '../../components/layout';
import { fetchAllCategories } from '../../store/categories/actions';
import { BgImage } from './components';

const styles = StyleSheet.create({
    container: {
        paddingTop: 56,
        height: '100%',
        backgroundColor: 'white',
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
        height: '25%',
        justifyContent: 'center',
    },
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
            <BgImage />
            <Header header="Discover Your Next Gift" subHeader="By following just a few short steps we can help you find the most awasome gift for your loved one" />
            <View style={styles.buttonAreaContainer}>
                <PrimaryButton handlePress={handlePress} accessibilityLabel='Discover our gifts' buttonTitle="Lat's Start" />
            </View>
        </View>
    )
};

export default Discover;
