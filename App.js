// import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/pages/HomeScreen';
import AddScreen from './src/pages/AddScreen';

const Navigation = createStackNavigator({
  Home: {screen: HomeScreen},
  AddItem: {screen: AddScreen},
});

const App = createAppContainer(Navigation);
export default App;
