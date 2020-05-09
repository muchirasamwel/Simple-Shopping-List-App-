import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'white',
      borderBottomRightRadius: 40,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderBottomColor: 'black',
        borderRightColor: 'black',

    },
    text: {
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
    },
});
export default Header;
