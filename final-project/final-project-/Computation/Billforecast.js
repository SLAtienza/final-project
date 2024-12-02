// components/EnergyBillForecast.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package

const daysOfWeek = [
  { label: 'Sun', value: 'sunday' },
  { label: 'Mon', value: 'monday' },
  { label: 'Tue', value: 'tuesday' },
  { label: 'Wed', value: 'wednesday' },
  { label: 'Thu', value: 'thursday' },
  { label: 'Fri', value: 'friday' },
  { label: 'Sat', value: 'saturday' },
];

const EnergyBillForecast = () => {
  const [wattage, setWattage] = useState(''); // Wattage of the appliance
  const [hoursUsedPerDay, setHoursUsedPerDay] = useState(''); // Hours used per day
  const [ratePerKwh, setRatePerKwh] = useState(''); // Rate per kWh in Pesos
  const [projectedCosts, setProjectedCosts] = useState(null); // Projected costs
  const [weeksUsedPerMonth, setWeeksUsedPerMonth] = useState(4); // Default weeks used per month
  const [selectedDays, setSelectedDays] = useState([]); // Array to hold selected days

const calculateProjectedCosts = () => {
  const wattageValue = parseFloat(wattage);
  const hoursValue = parseFloat(hoursUsedPerDay);
  const rateValue = parseFloat(ratePerKwh);

  if (!isNaN(wattageValue) && !isNaN(hoursValue) && !isNaN(rateValue)) {
    // Calculate daily usage in kWh
    const dailyUsageKWh = (wattageValue * hoursValue) / 1000; // Convert watts to kWh
    const totalCostPerDay = (dailyUsageKWh * rateValue).toFixed(2); // Cost per day
    
    // Calculate total days used
    const totalDaysPerWeek = selectedDays.length > 0 ? selectedDays.length : 7; // Default to 7 days if no selection
    const totalDaysPerMonth = totalDaysPerWeek * weeksUsedPerMonth;

    // Calculate costs
    const totalCostPerHour = (wattageValue * (1 / 1000) * rateValue).toFixed(2); // Cost per hour
    const totalCostPerWeek = (totalDaysPerWeek * totalCostPerDay).toFixed(2); // Weekly cost
    // Corrected monthly cost computation
    const totalCostPerMonth = (totalDaysPerMonth * (dailyUsageKWh * rateValue)).toFixed(2); // Monthly cost
    
    // Update the projected costs state
    setProjectedCosts({
      costPerHour: totalCostPerHour,
      costPerDay: totalCostPerDay,
      costPerWeek: totalCostPerWeek,
      costPerMonth: totalCostPerMonth,
    });
  } else {
    setProjectedCosts(null); // Reset if inputs are invalid
    alert("Please enter valid numbers for wattage, hours used, and rate."); // Alert for invalid input
  }
};



  // Function to toggle day selection
  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day)); // Remove day if already selected
    } else {
      setSelectedDays([...selectedDays, day]); // Add day if not selected
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Energy Bill Forecast</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter wattage (Watts)"
        keyboardType="numeric"
        value={wattage}
        onChangeText={setWattage}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter hours used per day"
        keyboardType="numeric"
        value={hoursUsedPerDay}
        onChangeText={setHoursUsedPerDay}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter rate fee (Pesos)"
        keyboardType="numeric"
        value={ratePerKwh}
        onChangeText={setRatePerKwh}
      />

      <Text style={styles.label}>Select Weeks Used Per Month:</Text>
      <Picker
        selectedValue={weeksUsedPerMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setWeeksUsedPerMonth(itemValue)}
      >
        {[1, 2, 3, 4].map(week => (
          <Picker.Item key={week} label={`${week} Week(s)`} value={week} />
        ))}
      </Picker>

      <Text style={styles.label}>Select Days Used Per Week:</Text>
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day) => (
          <TouchableOpacity 
            key={day.value} 
            style={[styles.dayButton, selectedDays.includes(day.value) && styles.selectedDayButton]}
            onPress={() => toggleDaySelection(day.value)}
          >
            <Text style={[styles.dayButtonText, selectedDays.includes(day.value) && styles.selectedDayButtonText]}>
              {day.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={calculateProjectedCosts}
      >
        <Text style={styles.buttonText}>Calculate Projected Costs</Text>
      </TouchableOpacity>

      {projectedCosts && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Projected Costs:</Text>
          <Text>Cost Per Hour: ₱{projectedCosts.costPerHour}</Text>
          <Text>Cost Per Day: ₱{projectedCosts.costPerDay}</Text>
          <Text>Cost Per Week: ₱{projectedCosts.costPerWeek}</Text>
          <Text>Cost Per Month: ₱{projectedCosts.costPerMonth}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor:'#E6C767'
   },
   title:{
     fontSize :24 ,
     fontWeight:'bold' ,
     marginBottom :20 ,
     textAlign:'center'
   },
   input:{
     height :40 ,
     borderColor :'gray' ,
     backgroundColor: 'white',
     borderWidth :1 ,
     marginBottom :10 ,
     paddingHorizontal :10,
     borderRadius: 10 
   },
   button:{
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
   buttonText:{
     color :'#FFFFFF' ,
     fontWeight :'bold' 
   },
   resultContainer:{
     marginTop: 20,
     paddingHorizontal: 10,
   },
   result:{
     fontSize :18 ,
     fontWeight :'bold' ,
     marginTop :20 ,
     textAlign :'center' 
   },
   picker: {
     height: 50,
     width: '100%',
     backgroundColor: 'white',
     borderRadius: 10,
     marginBottom: 20,
   },
   label: {
     fontSize: 18,
     marginBottom: 10,
   },
   daysContainer: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'space-between',
   },
   dayButton: {
     backgroundColor: 'white',
     borderColor: '#aaa',
     borderWidth: 1,
     justifyContent: 'center',
     alignItems: 'center',
     width: '13%', // Adjust width as needed for layout
     height: 40,
     borderRadius: 5,
     marginRight: 10,
     marginBottom: 10,
   },
   selectedDayButton: {
     backgroundColor: 'blue',
   },
   dayButtonText: {
     fontSize: 16,
   },
   selectedDayButtonText: {
     color: '#FFF',
   }
});

export default EnergyBillForecast;