import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/pages/HomeScreen';
import AddScreen from './src/pages/AddScreen';

// const Navigation = createStackNavigator({
//   Home: {screen: HomeScreen},
//   AddItem: {screen: AddScreen},
// });

// const App = createAppContainer(Navigation);
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
                source={require('./src/components/assets/images/drawer.png')}
                style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
    );
  }
}

const HomeScreen_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Shopping List',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const AddScreen_StackNavigator = createStackNavigator({
  //All the screen from the AddScreen will be indexed here
  Second: {
    screen: AddScreen,
    navigationOptions: ({ navigation }) => ({
      // title: 'Shopping List',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ShoppingDrawable = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: {
    //Title
    screen: HomeScreen_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  AddScreen: {
    //Title
    screen: AddScreen_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Add List',
    },
  },
});

export default createAppContainer(ShoppingDrawable);
