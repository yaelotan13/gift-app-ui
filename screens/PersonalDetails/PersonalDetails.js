import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../navigation/HeaderButton';
import { Header } from '../../components/layout';
import colors from '../../constants/colors';

const PersonalDetails = (props) => {
    return (
        <Header header="Let’s Get Personal" subHeader="Please answer a few more questions, so we could make it more personal." />
    )
};

PersonalDetails.navigationOptions = navigationData => {
    return {
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Next' iconName="rightcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })} />
        </HeaderButtons>,
        headerLeft:
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'SubCategories' })} />
        </HeaderButtons>,
    }
}

export default PersonalDetails;
