import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const HailstoneSequence: React.FC = () => {
  const [startNumber, setStartNumber] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generateSequence = () => {
    let n = parseInt(startNumber);
    if (isNaN(n) || n <= 0) {
      setSequence([]);
      return;
    }

    const newSequence: number[] = [n];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      newSequence.push(n);
    }
    setSequence(newSequence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hailstone Sequence</Text>
      <TextInput
        style={styles.input}
        onChangeText={setStartNumber}
        value={startNumber}
        keyboardType="numeric"
        placeholder="Enter a positive number"
      />
      <Button title="Generate Sequence" onPress={generateSequence} />
      <ScrollView style={styles.sequenceContainer}>
        {sequence.map((num, index) => (
          <Text key={index} style={styles.sequenceItem}>
            {num}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
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
  sequenceContainer: {
    marginTop: 10,
    maxHeight: 200,
  },
  sequenceItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HailstoneSequence;
