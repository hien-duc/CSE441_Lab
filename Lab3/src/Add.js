import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                images,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                Alert.alert("Product added successfully!");
                setTitle('');
                setDescription('');
                setPrice('');
                setDiscountPercentage('');
                setRating('');
                setStock('');
                setBrand('');
                setCategory('');
                setImages('');
            })
            .catch((error) => console.error("Error adding product:", error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Product</Text>

            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter title"
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter description"
                value={description}
                onChangeText={setDescription}
            />

            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Discount Percentage</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter discount percentage"
                value={discountPercentage}
                onChangeText={setDiscountPercentage}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Rating</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter rating"
                value={rating}
                onChangeText={setRating}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Stock</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter stock"
                value={stock}
                onChangeText={setStock}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Brand</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter brand"
                value={brand}
                onChangeText={setBrand}
            />

            <Text style={styles.label}>Category</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter category"
                value={category}
                onChangeText={setCategory}
            />

            <Text style={styles.label}>Images</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter images URL(s)"
                value={images}
                onChangeText={setImages}
            />

            <Button title="SUBMIT" onPress={handleSubmit} color="#007AFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        paddingVertical: 5,
    },
});
