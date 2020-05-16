import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Navigator from './navigation/Navigator';
import categoryReducer from './store/categories/reducer';

const rootReducer = combineReducers({
  categories: categoryReducer, 
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'muli-bold': require('./assets/fonts/Muli-Bold.ttf'),
    'muli-extra-light': require('./assets/fonts/Muli-ExtraLight.ttf'),
    'muli-light': require('./assets/fonts/Muli-Light.ttf'),
    'muli': require('./assets/fonts/Muli-Regular.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
});
