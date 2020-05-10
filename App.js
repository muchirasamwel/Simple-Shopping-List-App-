import React, { Component } from 'react';
import { Dimensions,  } from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import DrawerNavigator from "react-navigation-drawer/src/navigators/createDrawerNavigator";
import SideMenu from './src/components/Menu/SideMenu'
import stackNavigationRouting from './src/components/Menu/StackNavigationRouting';

const NavigationContainer = DrawerNavigator({
  Item1: {
    screen: stackNavigationRouting,
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width - 120,
});
export default createAppContainer(NavigationContainer);