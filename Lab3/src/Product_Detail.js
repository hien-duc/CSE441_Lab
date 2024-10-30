import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native'; // Commenting out for later use

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const productUrl = 'https://dummyjson.com/products/2';
    // const navigation = useNavigation(); // Commenting out for later use

    useEffect(() => {
        fetch(productUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = () => {
        fetch(productUrl, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete the product');
                }
                return response.json();
            })
            .then(() => {
                Alert.alert('Product deleted successfully');
                // navigation.goBack(); // Uncomment this line to navigate back once navigation is set up
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
                Alert.alert('Failed to delete product');
            });
    };

    const handleCancel = () => {
        // navigation.goBack(); // Uncomment this line to navigate back once navigation is set up
        Alert.alert('Cancel button pressed'); // Temporary action to show Cancel works
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error loading product details.</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: product.thumbnail }} style={styles.image} />
                <Card.Content>
                    <Text style={styles.title}>{product.title}</Text>
                    <Paragraph>{product.description}</Paragraph>
                    <Text style={styles.price}>Price: ${product.price}</Text>
                    <Text style={styles.discount}>Discount: {product.discountPercentage}% off</Text>
                    <Text style={styles.details}>Rating: {product.rating}</Text>
                    <Text style={styles.details}>Stock: {product.stock}</Text>
                    <Text style={styles.details}>Brand: {product.brand}</Text>
                    <Text style={styles.details}>Category: {product.category}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={handleDelete} color="#d9534f">
                        Delete
                    </Button>
                    <Button mode="outlined" onPress={handleCancel} color="#5cb85c">
                        Cancel
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    price: {
        fontSize: 18,
        color: '#d9534f',
        marginVertical: 4,
    },
    discount: {
        fontSize: 16,
        color: '#5cb85c',
        marginVertical: 4,
    },
    details: {
        fontSize: 14,
        color: '#666',
        marginVertical: 2,
    },
});
