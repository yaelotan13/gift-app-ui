import React from 'react';
import { Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DiscoverScreen from '../screens/Discover';
import MainCategoriesScreen from '../screens/MainCategories';
import SubCategoriesScreen from '../screens/SubCategories';

const Navigator = createStackNavigator({
    Discover: {
        screen: DiscoverScreen, 
        navigationOptions: { title: '' },
    },
    MainCategories: {
        screen: MainCategoriesScreen,
        navigationOptions: { 
            // title: 'o  o  o', 
            // headerRight: <Button onPress={() => {}} title="Next" />, 
        },
    },
    SubCategoriesScreen: {
        screen: SubCategoriesScreen,
        navigationOptions: { title: '' },
    }
});

export default createAppContainer(Navigator);