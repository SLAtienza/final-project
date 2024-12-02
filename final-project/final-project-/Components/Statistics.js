// components/Statistics.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Billing Cost Estimation</Text>
      <Text>Monitoring System</Text>
      <View>
        <Text>Energy Consumption:</Text>
        <Text>Total Energy: [Value] kWh</Text>
        <Text>Consumed: [Value] kWh</Text>
        <Text>CO2 Reduction: [Value] kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Statistics;
