import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {

    }
});

const SubCategories = (props) => {
    return (
        <ScrollView style={styles.container}>
            <Text>Let's Get More Specific</Text>
        </ScrollView>
    );
};

SubCategories.navigationOptions = navigationData => {
    return {
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Next' iconName="rightcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'SubCategories' })} />
        </HeaderButtons>,
        headerLeft:
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'MainCategories' })} />
        </HeaderButtons>,
    }
}

export default SubCategories;
