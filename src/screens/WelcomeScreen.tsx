import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

interface User {}

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
