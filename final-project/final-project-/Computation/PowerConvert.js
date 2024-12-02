// components/PowerConverter.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const PowerConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [isKilowatts, setIsKilowatts] = useState(true); // true if input is in kilowatts
  const [result, setResult] = useState(null);

  // Function to perform the conversion
  const convertPower = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      if (isKilowatts) {
        // Convert kW to W
        setResult((value * 1000).toFixed(2) + ' W');
      } else {
        // Convert W to kW
        setResult((value / 1000).toFixed(2) + ' kW');
      }
    } else {
      setResult(null); // Reset if input is invalid
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Power Converter</Text>

      <TextInput
        style={styles.input}
        placeholder={isKilowatts ? "Enter kilowatts (kW)" : "Enter watts (W)"}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity style={styles.button} onPress={convertPower}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>

      {/* Toggle button to switch between kilowatts and watts */}
      <TouchableOpacity 
        style={styles.toggleButton} 
        onPress={() => {
          setIsKilowatts(!isKilowatts);
          setInputValue(''); // Clear input when toggling
          setResult(null); // Reset result when toggling
        }}
      >
        <Text style={styles.toggleButtonText}>
          Switch to {isKilowatts ? 'Watts' : 'Kilowatts'}
        </Text>
      </TouchableOpacity>

      {/* Display result */}
      {result && (
        <Text style={styles.result}>
          Result: {result}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#E6C767', // Yellow background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '80%',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#F39C12', // Orange button
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  toggleButton: {
    alignItems: 'center',
    borderRadius: 5,
  },
  toggleButtonText: {
    backgroundColor: '#F39C12', 
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,

  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PowerConverter;