import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List',
  };
  constructor() {
    super();
    this.state = {
      items: [
        {id: 1, text: 'Book'},
        {id: 2, text: 'Laptop'},
        {id: 3, text: 'Code'},
        {id: 4, text: 'Array'},
      ],
    };
  }
  generateRandom = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };
  deleteItem = (id) => {
    let items = this.state.items.filter((item) => item.id != id);
    this.setState({items: items});
  };
  addItem = (text) => {
    let items = [{id: this.generateRandom(), text}, ...this.state.items];
    this.setState({items: items});
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <View style={styles.container}>
          <Header title="Shopping List"></Header>
          <View style={styles.imageHolder}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Image
                source={require('../components/assets/images/item1.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <AddItem addItem={this.addItem} />
          <FlatList
            data={this.state.items}
            renderItem={({item}) => (
              <ListItem item={item} deleteItem={this.deleteItem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    borderWidth: 3,
    borderColor: 'blue',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
});
