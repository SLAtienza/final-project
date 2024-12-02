// components/EnergyConsumption.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EnergyConsumption = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Power Usage Estimator Box */}
      <View style={styles.estimatorBox}>
        <Text style={styles.estimatorTitle}>Power Usage Estimator</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Daily Consumption')} style={styles.optionButton}>
            <Text style={styles.optionText}>Daily Consumption</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Monthly Consumption')} style={styles.optionButton}>
            <Text style={styles.optionText}>Monthly Consumption</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Power Converter')} style={styles.optionButton}>
            <Text style={styles.optionText}>Watts to Kilo Watts</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Energy Usage Section */}
      <View style={styles.energyUsageContainer}>
        <Text style={styles.sectionTitle}>Energy Usage</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Total energy</Text>
            <Text style={styles.statValue}>36.2 Kwh</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Consumed</Text>
            <Text style={styles.statValue}>28.2 Kwh</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>CO2 Reduction</Text>
            <Text style={styles.statValue}>28.2 Kwh</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6C767', // Light yellow background
    padding: 20,
  },
  estimatorBox: {
    backgroundColor: '#F4F4F4', // Light gray box
    padding: 20,
    borderRadius: 10,
    marginBottom: 30, // Increased margin to create more space below the box
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  estimatorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  energyUsageContainer: {
    marginTop: 40, // Push the energy usage section lower
  },
  sectionTitle: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold', // Made the title bolder
    color: '#333',
    textAlign: 'center',
    marginBottom: 20, // Added more spacing below the title
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
  },
  statTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default EnergyConsumption;
