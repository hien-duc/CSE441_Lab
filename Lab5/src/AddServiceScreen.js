import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddServiceScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddService = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            await axios.post(
                'https://kami-backend-5rs0.onrender.com/services',
                { name, price: parseFloat(price) },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to add service');
        }
    };

    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    serviceName: {
        fontSize: 16,
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 32,
    },
});

export default AddServiceScreen;