import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setitems] = useState([
    {id: 1, text: 'Book'},
    {id: 2, text: 'Laptop'},
    {id: 3, text: 'Code'},
    {id: 4, text: 'Array'},
  ]);

  function generateRandom() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  const deleteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    setitems((prevItems) => {
      return [{id: generateRandom(), text}, ...prevItems];
    });
  };

  return (
    <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <View style={styles.container}>
        <Header title="Shopping List"></Header>
        <View style={styles.imageHolder}>
          <Image
            source={require('./components/assets/images/item1.png')}
            style={styles.image}
          />
        </View>
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaProvider>
  );
};

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

export default App;
