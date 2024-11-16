import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

const AddServiceScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddService = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            await axios.post('https://kami-backend-5rs0.onrender.com/services',
                { name, price },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to add service');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Service</Text>
            <TextInput
                style={styles.input}
                placeholder="Service Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddService}>
                <Text style={styles.buttonText}>Add Service</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddServiceScreen;