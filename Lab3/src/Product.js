import React, { useState, useEffect } from 'react';
import { Image, FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default function ProductList() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    console.log("Fetching product data...");
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not OK');
        }
        return response.json();
      })
      .then(d => {
        console.log("Data fetched successfully:", d.products.length);
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.mainProduct}>
            <View style={styles.left}>
              <Image source={{ uri: item.thumbnail }} style={styles.image} />
            </View>
            <View style={styles.right}>
              <Text style={styles.textTitle}>Title: {item.title}</Text>
              <Text style={styles.text}>Description: {item.description}</Text>
              <Text style={styles.textPrice}>Price: ${item.price}</Text>
              <Text style={styles.textDiscount}>Discount: {item.discountPercentage}% off</Text>
              <Text style={styles.text}>Stock: {item.stock}</Text>
              <Text style={styles.text}>Brand: {item.brand}</Text>
              <Text style={styles.text}>Category: {item.category}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Detail" color="#007AFF" onPress={() => console.log('Detail pressed')} />
                <Button title="ADD" color="#28a745" onPress={() => console.log('Add pressed')} />
                <Button title="DELETE" color="#dc3545" onPress={() => console.log('Delete pressed')} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#333',
    marginVertical: 20,
  },
  mainProduct: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  left: {
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  right: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  textPrice: {
    fontSize: 14,
    color: '#dc3545',
    fontWeight: 'bold',
  },
  textDiscount: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
