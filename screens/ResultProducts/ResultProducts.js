import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import { useSelector } from '../../hooks';
import { productsSelector } from '../../store/selectors/products';
import { fetchProducts } from '../../store/products/actions';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';
import { Header } from '../../components/layout';
import { Prodcut } from './components';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: '5%',
        height: '100%',
        marginBottom: 100
    }
});

const ResultProducts = (props) => {
    const dispatch = useDispatch();
    const productsState = useSelector(productsSelector);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Header header="Let's See What We Got" />
            <View style={styles.productsContainer}>
                {productsState.products.map(product => 
                    <Prodcut key={product.product_id} product={product} />
                )}
            </View>
        </ScrollView>
    );
};

ResultProducts.navigationOptions = navigationData => {
    return {
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })} />
        </HeaderButtons>,
    }
}

export default ResultProducts;
