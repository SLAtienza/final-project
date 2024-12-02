// components/EnergyGoals.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const EnergyGoals = ({ projectedBill }) => {
  const [goal, setGoal] = useState(''); // User's energy goal
  const [progress, setProgress] = useState([]); // Array to hold progress values
  const [goalReached, setGoalReached] = useState(false); // Flag to indicate if the goal is reached

  // Function to add progress
  const addProgress = () => {
    const progressValue = parseFloat(goal);
    if (!isNaN(progressValue) && progressValue > 0) {
      setProgress((prev) => [...prev, progressValue]);
      setGoal('');
      if (progressValue >= projectedBill) { // Compare with projected bill
        setGoalReached(true);
      }
    } else {
      alert("Please enter a valid number for your goal."); // Alert for invalid input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Energy Goals Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Set your energy-saving goal"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />

      <TouchableOpacity style={styles.button} onPress={addProgress}>
        <Text style={styles.buttonText}>Add Progress</Text>
      </TouchableOpacity>

      {goalReached && (
        <Text style={styles.congratulations}>Congratulations! You've reached your goal!</Text>
      )}

      <LineChart
        data={{
          labels: Array.from({ length: progress.length }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              data: progress,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White line
              strokeWidth: 2,
            },
          ],
        }}
        width={400} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=" units"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#1E2923',
          backgroundGradientFrom: '#08130D',
          backgroundGradientTo: '#1E2923',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6C767',
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Added background color for better visibility
  },
  button: {
    backgroundColor: '#F39C12', // Changed color for better visibility
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default EnergyGoals;