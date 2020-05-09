import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AddItem = ({addItem}) => {
    const [name, setName] = useState('');
    const onChange = (nameValue) => setName(nameValue);
    return (
        <View>
            <TextInput
                placeholder="Item Name"
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(name)}>
                <Text style={styles.btnText}>
                    <Icon name="add" color="white" size={20}/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        fontSize: 16,
        padding: 8,
    },
    btn: {
        backgroundColor: 'green',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
});
export default AddItem;
