import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DiscoverScreen from '../screens/Discover';
import MainCategoriesScreen from '../screens/MainCategories';
import SubCategoriesScreen from '../screens/SubCategories';
import PersonalDetailsScreen from '../screens/PersonalDetails';
import ResultProductsScreen from '../screens/ResultProducts';

import Progress from '../components/layout/Progress';

const Navigator = createStackNavigator({
    Discover: {
        screen: DiscoverScreen, 
        navigationOptions: { 
            title: '' 
        },
    },
    MainCategories: {
        screen: MainCategoriesScreen,
        navigationOptions: { 
            title: <Progress curScreen="MainCategories" />, 
        },
    },
    SubCategories: {
        screen: SubCategoriesScreen,
        navigationOptions: { 
            title: <Progress curScreen="SubCategories" />, 
        },
    },
    PersonalDetails: {
        screen: PersonalDetailsScreen,
        navigationOptions: { 
            title: <Progress curScreen="PersonalDetails" />, 
        },
    }, 
    ResultProducts: {
        screen: ResultProductsScreen,
        navigationOptions: { 
            title: ' ', 
        },
    }
});

export default createAppContainer(Navigator);