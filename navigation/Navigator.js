import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DiscoverScreen from '../screens/Discover';
import MainCategoriesScreen from '../screens/MainCategories'

const Navigator = createStackNavigator({
    Discover: DiscoverScreen,
    MainCategories: MainCategoriesScreen
});

export default createAppContainer(Navigator);