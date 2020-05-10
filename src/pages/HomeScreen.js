import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import {Svg, G, Path, Circle} from "react-native-svg"
import TouchableOpacityG from "../components/TouchableOpacityG";
import {
    SafeAreaProvider,
    initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ListItem from "../components/ListItem";
import {bindActionCreators} from "redux";
import * as itemActions from "../redux/actions/itemActions";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Shopping List',
        // headerShown: false,
    };

    componentDidMount() {
        this.props.actions.fetchItems().catch(err => {
            alert('loading items failed ' + err)
        });
    }

    deleteItem = (id) => {
        this.props.actions.deleteItem(id);
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
                <View style={styles.container}>
                    {/*<Header title="Shopping List"></Header>*/}

                    <Svg viewBox="0 50 1440 190" style={styles.body}>
                        <Text style={styles.welcome}>Welcome Home</Text>
                        <Path onPress={() => navigate('AddItem')}
                              fill="#000"
                              d="M0 320l21.8-10.7C43.6 299 87 277 131 240c43.5-37 87-91 131-90.7 43.5-.3 87 53.7 131 42.7 43.4-11 87-85 131-74.7 43.3 10.7 87 106.7 131 144 43.2 37.7 87 15.7 130-5.3 44.1-21 88-43 131-74.7 44-32.3 88-74.3 131-96C1090.9 64 1135 64 1178 96c43.8 32 87 96 131 112 43.7 16 87-16 109-32l22-16V0H0z"
                        />
                        {/*<View style={styles.imageHolder}>*/}
                        <TouchableOpacityG onPress={() => navigate('AddItem')}>
                            <Image
                                source={require('../components/assets/images/item1.png')}
                                style={styles.image}/>
                        </TouchableOpacityG>
                    </Svg>
                    <FlatList
                        style={styles.list}
                        data={this.props.items}
                        renderItem={({item}) => (
                            <ListItem item={item} deleteItem={this.deleteItem}/>
                        )}
                    />
                </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        marginTop: 5,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'black',
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
    },
    body: {
        backgroundColor: 'white',
        height: 100,
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
    },
    list: {
        marginTop: 12,
    }
});

function mapStateToProps(state) {
    return {
        items: state.data.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
