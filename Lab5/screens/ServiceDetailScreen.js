import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';

const ServiceDetailScreen = ({ route, navigation }) => {
    const { service } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Service Details</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{service.name}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>${service.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.editButton]}
                    onPress={() => navigation.navigate('EditService', { service })}
                >
                    <Icon name="edit" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => navigation.navigate('DeleteService', { service })}
                >
                    <Icon name="delete" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ServiceDetailScreen;