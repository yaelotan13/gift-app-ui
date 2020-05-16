import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from '../../hooks';
import { mainCategoriesSelector } from '../../store/selectors/categories';
import HeaderButton from '../../navigation/HeaderButton';
import colors from '../../constants/colors';

import { subCategories as allSubCategories } from '../../mock-api/data/categories';

const styles = StyleSheet.create({
    container: {
    }
});

const SubCategories = (props) => {
    const [slected, setSelected] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const mainCategories = useSelector(mainCategoriesSelector);
    const mainCategoriesIds = Array.from(mainCategories, category => category.main_category_id);

    useEffect(() => {
        setSubCategories([...allSubCategories.filter(subCategory => mainCategoriesIds.indexOf(subCategory.main_category_id) > -1)]);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text>Let's Get More Specific</Text>
            <Text>You chose:</Text>
            {
                subCategories.map(category => <Text>{category.sub_category_name}</Text>)
            }
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
