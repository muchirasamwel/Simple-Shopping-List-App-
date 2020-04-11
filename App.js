// import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import AddScreen from './pages/AddScreen';

const Navigation = createStackNavigator({
  Home: {screen: HomeScreen},
  AddItem: {screen: AddScreen},
});

const App = createAppContainer(Navigation);
export default App;
