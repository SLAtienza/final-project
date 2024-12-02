// components/Profile.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Logo from './Logo';

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const selectProfilePicture = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setProfilePic(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Logo />
      {profilePic && <Image source={{ uri: profilePic }} style={styles.profilePic} />}
      <Text>Username: [Your Username]</Text>
      <Text>Email: [Your Email]</Text>
      <Text>Phone: [Your Phone]</Text>
      <Button title="Change Profile Picture" onPress={selectProfilePicture} />
      <Button title="Edit Profile" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
});

export default Profile;
