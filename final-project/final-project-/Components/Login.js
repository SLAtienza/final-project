import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Logo from './Logo';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <TextInput placeholder="Username:" style={styles.input} />
      <TextInput placeholder="Password:" secureTextEntry style={styles.input} />

      {/* Custom Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        {/* Custom Social Buttons */}
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E6C767',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  link: {
    color: 'white',
    backgroundColor:'#007BFF',    
    textAlign: 'center',
    borderRadius:20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Button background color
    borderRadius:20,          // Border radius
    paddingVertical: 15,        // Vertical padding
    marginBottom: 10,           // Space below the button
    alignItems: 'center',       // Center text horizontally
  },
  buttonText: {
    color: '#FFFFFF',           // Button text color
    fontSize: 16,               // Button text size
    fontWeight: 'bold',         // Button text weight
  },
  socialContainer: {
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#007BFF', // Background color for social buttons
    borderRadius: 10,           // Border radius for social buttons
    paddingVertical: 10,        // Vertical padding for social buttons
    marginBottom: 10,           // Space below each social button
    alignItems: 'center',       // Center text horizontally
  },
});

export default Login;
