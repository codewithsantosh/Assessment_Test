import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSmile } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StatusBar, Keyboard, View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Welcome"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              display: isKeyboardVisible ? 'none' : 'flex',
            },
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Welcome') {
                iconName = faSmile;
              } else if (route.name === 'Home') {
                iconName = faHome;
              }

              return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
