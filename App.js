import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Navigator from './navigation/Navigator';
import categoryReducer from './store/categories/reducer';
import recipientReducer from './store/recipientInfo/reducer';
import productsReducer from './store/products/reducer';
import rootSaga from './store/saga';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};

const rootReducer = combineReducers({
  categories: categoryReducer,
  recipient: recipientReducer, 
  products: productsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
      <NavigationContainer theme={MyTheme}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  )
}
