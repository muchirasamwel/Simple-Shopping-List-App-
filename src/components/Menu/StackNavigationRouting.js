import React, { Component } from 'react';
import {View, TouchableOpacity,Image} from 'react-native';
import { createStackNavigator } from  'react-navigation-stack';
import HomeScreen from '../../pages/HomeScreen';
import AddScreen from '../../pages/AddScreen';

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
            <Image
                source={require('../assets/images/drawer.png')}
                style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
    );
  }
}

const appTitle='Shopping List';
const stackNavigationRouting = createStackNavigator({
    Home : {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Shopping List",
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        })
    },
    AddItems: {
        screen: AddScreen,
        navigationOptions: ({navigation}) => ({
            title: "Detail",
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        })
    },
});

export default stackNavigationRouting;