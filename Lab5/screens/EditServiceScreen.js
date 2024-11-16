import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

const EditServiceScreen = ({ route, navigation }) => {
    const { service } = route.params;
    const [name, setName] = useState(service.name);
    const [price, setPrice] = useState(service.price.toString());

    const handleUpdateService = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            await axios.put(
                `https://kami-backend-5rs0.onrender.com/services/${service.id}`,
                { name, price },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Failed to update service');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Service</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleUpdateService}>
                <Text style={styles.buttonText}>Update Service</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditServiceScreen;