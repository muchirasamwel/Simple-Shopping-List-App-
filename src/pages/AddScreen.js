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
import {connect} from 'react-redux';
import * as itemActions from '../redux/actions/itemActions'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

class AddScreen extends React.Component {
    static navigationOptions = {
        title: 'Shopping List',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, name: 'Book'},
                {id: 2, name: 'Laptop'},
                {id: 3, name: 'Code'},
                {id: 4, name: 'Array'},
            ],
        };
    }


    deleteItem = (id) => {
        this.props.actions.deleteItem(id);
    };
    addItem = (name) => {
      this.props.actions.addItem(name);
    };

    getItems = async () =>{
        this.props.actions.fetchItems();
    };

    componentDidMount() {
        this.props.actions.fetchItems().catch(err => {
            alert('loading items failed '+err)
        });
    }

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
                    <AddItem addItem={this.addItem}/>
                    <FlatList
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
AddScreen.propTypes={
    actions:PropTypes.object.isRequired,
    items:PropTypes.array.isRequired
}
function mapStateToProps(state) {
    return {
        items: state.data.items
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(itemActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddScreen);
