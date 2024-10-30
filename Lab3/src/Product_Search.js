import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

export default function ProductSearch() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products';

    const searchProduct = () => {
        if (value !== '') {
            filePath = `https://dummyjson.com/products/search?q=${value}`;
        }

        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Products</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter product name"
                value={value}
                onChangeText={(text) => setValue(text)}
            />
            <Button title="Search" onPress={searchProduct} />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Cover source={{ uri: item.thumbnail }} style={styles.image} />
                        <Card.Content>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Paragraph>{item.description}</Paragraph>
                            <Text style={styles.price}>${item.price}</Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    card: {
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        height: 150,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        color: '#d9534f',
        marginTop: 5,
    },
});
