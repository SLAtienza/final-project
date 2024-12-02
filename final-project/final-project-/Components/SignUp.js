// components/SignUp.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Logo from './Logo';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <TextInput placeholder="First Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <Button title="Sign Up" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
});

export default SignUp;
