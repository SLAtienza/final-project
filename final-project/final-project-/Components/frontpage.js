import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const FrontPage = (props) => {
  // Function to handle logo press
  const handleLogoPress = () => {
    console.log("Logo clicked!");
    // Example: props.navigation.navigate('NextScreen'); // Uncomment if using navigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          {/* Add header content here if needed */}
        </View>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={require('../assets/logo.png')} // Update with your local image path
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6C767",
    paddingTop: 42,
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 150,
    marginLeft: 32,
    marginRight: 32,
  },
  logo: {
    height: 450,
    resizeMode: "contain", // Maintains aspect ratio
  },
});

export default FrontPage;
