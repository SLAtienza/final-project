// components/DailyConsumption.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const DailyConsumption = () => {
  const [watts, setWatts] = useState('');
  const [hours, setHours] = useState('');
  const [dailyConsumption, setDailyConsumption] = useState(null);

  // Function to calculate daily consumption
  const calculateDailyConsumption = () => {
    const wattage = parseFloat(watts);
    const usageHours = parseFloat(hours);

    if (!isNaN(wattage) && !isNaN(usageHours)) {
      const consumption = (wattage * usageHours) / 1000; // Convert watts to kilowatts
      setDailyConsumption(consumption.toFixed(2)); // Set result with two decimal places
    } else {
      setDailyConsumption(null); // Reset if inputs are invalid
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Energy Wise</Text>
      </View>

      <Text style={styles.title}>Daily Consumption</Text>

      {/* Input for Watts */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="W"
          keyboardType="numeric"
          value={watts}
          onChangeText={setWatts}
        />
      </View>

      {/* Divider (X for multiplication) */}
      <Text style={styles.operationSymbol}>X</Text>

      {/* Input for Hours */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Hrs"
          keyboardType="numeric"
          value={hours}
          onChangeText={setHours}
        />
      </View>

      {/* Divider (= for result) */}
      <Text style={styles.operationSymbol}>=</Text>

      {/* Output Field */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Wh/Day"
          value={dailyConsumption ? `${dailyConsumption} kWh` : ''}
          editable={false} // Make result field non-editable
        />
      </View>

      {/* Compute Button */}
      <TouchableOpacity style={styles.computeButton} onPress={calculateDailyConsumption}>
        <Text style={styles.computeButtonText}>Compute</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1C40F', // Yellow background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
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
  input: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  operationSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
    textAlign: 'center',
  },
  computeButton: {
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
  computeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DailyConsumption;
