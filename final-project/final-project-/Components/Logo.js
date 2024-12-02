import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image 
    source={require('../assets/logo.png')} 
    style={styles.logo} 
  />
);

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 200, // Set height to 450 for a square logo
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Logo;
