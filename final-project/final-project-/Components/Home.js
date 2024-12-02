// components/Home.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './Logo'; // Import your logo component
import Icon from 'react-native-vector-icons/Ionicons'; // For icons

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo /> {/* Display the logo */}

      <Text style={styles.dashboardTitle}>Dashboard</Text>

      <View style={styles.dashboardContainer}>
        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Power Usage Estimator')}
        >
          <Text style={styles.buttonText}>Power Usage Estimator</Text>
          <Icon name="calculator-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Bill Forecast')} // Corrected navigation name
        >
          <Text style={styles.buttonText}>E-Bill Forecast</Text>
          <Icon name="analytics-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.energyUsageTitle}>Energy Usage</Text>
      <View style={styles.energyUsageContainer}>
        {[
          { icon: "bulb-outline", value: "36.2 KWh", label: "Total Energy" },
          { icon: "sync-outline", value: "28.2 KWh", label: "Consumed" },
          { icon: "leaf-outline", value: "28.2 KWh", label: "CO2 Reduction" },
        ].map((usage, index) => (
          <View key={index} style={styles.usageBox}>
            <Icon name={usage.icon} size={30} color="#000" />
            <Text style={styles.usageValue}>{usage.value}</Text>
            <Text style={styles.usageLabel}>{usage.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6C767',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dashboardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  dashboardButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  energyUsageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  energyUsageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usageBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexGrow: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  usageValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  usageLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;