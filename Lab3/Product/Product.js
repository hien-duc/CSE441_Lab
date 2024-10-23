import React, {useState, useEffect} from 'react';
import {Image, FlatList, StyleSheet, Text, View, Button} from 'react-native';

export default function Product() {
  const [data, setData] = useState();
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not OK');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching', error);
      });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.mainProduct}>
            <View style={styles.left}>
              <Image
                source={{uri: item.thumbnail}}
                style={{width: 150, height: 150, marginBottom: 10}}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.right}>
                <Text style={styles.text}>Title: {item.title}</Text>
                <Text style={styles.text}>Description: {item.description}</Text>
                <Text style={styles.textPrice}>Price: {item.price}</Text>
                <Text style={styles.text}>Discount: {item.discount}</Text>
                <Text style={styles.text}>Stock: {item.stock}</Text>
                <Text style={styles.text}>Brand: {item.brand}</Text>
                <Text style={styles.text}>Category: {item.category}</Text>
                <View>
                  <Button title="Detail" style={styles.button} />
                  <Button title="ADD" style={styles.button} />
                  <Button title="DELETE" style={styles.button} />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    textAlign: 'left',
    color: 'black',
  },
  textPrice: {
    color: 'red',
  },
  button: {
    color: 'blue',
    width: '30',
    height: '30',
    borderRadius: '10',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  mainProduct: {
    height: 250,
    width: 340,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  left: {
    width: 170,
  },
  right: {
    width: 160,
  },
});
