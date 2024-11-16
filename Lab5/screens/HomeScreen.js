import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

const HomeScreen = ({ navigation }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('https://kami-backend-5rs0.onrender.com/services');
            setServices(response.data);
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch services');
        }
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        navigation.replace('Login');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate('ServiceDetail', { service: item })}
        >
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.servicePrice}>${item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Services</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Icon name="logout" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={services}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddService')}
            >
                <Icon name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;