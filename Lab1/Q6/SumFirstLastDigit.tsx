import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SumFirstLastDigit: React.FC = () => {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState<number | null>(null);

  const calculateSum = () => {
    if (number.length > 0) {
      const firstDigit = parseInt(number[0]);
      const lastDigit = parseInt(number[number.length - 1]);
      setSum(firstDigit + lastDigit);
    } else {
      setSum(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum First and Last Digit</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <Button title="Calculate" onPress={calculateSum} />
      {sum !== null && (
        <Text style={styles.result}>Sum of first and last digit: {sum}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default SumFirstLastDigit;
