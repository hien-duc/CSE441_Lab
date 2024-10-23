import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MinimumOfThree: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minimum, setMinimum] = useState<number | null>(null);

  const findMinimum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      setMinimum(Math.min(n1, n2, n3));
    } else {
      setMinimum(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minimum of Three Numbers</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType="numeric"
        placeholder="Enter first number"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType="numeric"
        placeholder="Enter second number"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNum3}
        value={num3}
        keyboardType="numeric"
        placeholder="Enter third number"
      />
      <Button title="Find Minimum" onPress={findMinimum} />
      {minimum !== null && (
        <Text style={styles.result}>Minimum: {minimum}</Text>
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

export default MinimumOfThree;
