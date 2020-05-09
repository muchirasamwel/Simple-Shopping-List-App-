import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
    SafeAreaProvider,
    initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Shopping List',
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
                <View style={styles.container}>
                    <Header title="Shopping List"></Header>
                    <View style={styles.imageHolder}>
                        <TouchableOpacity onPress={() => navigate('AddItem')}>
                            <Image
                                source={require('../components/assets/images/item1.png')}
                                style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.welcome}>Welcome Home</Text>
                    <View style={styles.body}>
                        <Text>Here is a sample text</Text>
                    </View>
                </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black'
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
        body: {
            backgroundColor: 'white',
            margin: 5,
            height: 100,
            padding: 10,
            borderRadius: 5,
        },
        welcome: {
            color: 'white',
            fontWeight: 'bold',
        }
    })
;
