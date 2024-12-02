// navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import EnergyConsumption from './Components/EnergyConsumption'; 
import EnergyBillForecast from './Computation/Billforecast'; 
import DailyConsumption from './Computation/DailyCal';  
import MonthlyConsumption from './Computation/MonthlyCal'; 
import PowerConverter from './Computation/PowerConvert';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Power Usage Estimator" component={EnergyConsumption} /> 
        <Stack.Screen name="Bill Forecast" component={EnergyBillForecast} />
        <Stack.Screen name="Daily Consumption" component={DailyConsumption} />
        <Stack.Screen name="Monthly Consumption" component={MonthlyConsumption} />
        <Stack.Screen name="Power Converter" component={PowerConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;