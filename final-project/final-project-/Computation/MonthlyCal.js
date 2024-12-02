// components/MonthlyConsumption.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const MonthlyConsumption = () => {
  const [watts, setWatts] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [monthlyConsumption, setMonthlyConsumption] = useState(null);

  // Function to calculate monthly consumption
  const calculateMonthlyConsumption = () => {
    const wattage = parseFloat(watts);
    const usageHours = parseFloat(hoursPerDay);

    if (!isNaN(wattage) && !isNaN(usageHours)) {
      // Calculate monthly consumption in kWh
      const consumption = (wattage * usageHours * 30) / 1000; // Convert watts to kilowatts and multiply by 30 days
      setMonthlyConsumption(consumption.toFixed(2)); // Set result with two decimal places
    } else {
      setMonthlyConsumption(null); // Reset if inputs are invalid
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Consumption Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter wattage (W)"
        keyboardType="numeric"
        value={watts}
        onChangeText={setWatts}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter hours used per day"
        keyboardType="numeric"
        value={hoursPerDay}
        onChangeText={setHoursPerDay}
      />

      <TouchableOpacity style={styles.button} onPress={calculateMonthlyConsumption}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {monthlyConsumption !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>
            total: {monthlyConsumption} kWh
          </Text>
        </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  resultContainer: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', // White background for contrast
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    
   },
   result:{
     fontSize :18 ,
     fontWeight :'bold' ,
     textAlign :'center' 
   },
});

export default MonthlyConsumption;