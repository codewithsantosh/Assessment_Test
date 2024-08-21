import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ProfileProps {
  profileImage: string;
  name: string;
  flag: string;
}

const Profile: React.FC<ProfileProps> = ({profileImage, name, flag}) => {
  const firstName = name.split(' ')[0];
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={{
            uri: profileImage,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{firstName}</Text>
        <Image
          source={{
            uri: flag
          }}
          style={styles.flag}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color:'#000'
  },
  flag: {
    position: 'absolute',
    top: 6,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 15,
  },
});

export default Profile;
