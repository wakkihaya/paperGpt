import React from 'react';
import { Feed } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  const { Colors, Fonts } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={Feed}
        options={{
          title: 'Paper GPT',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: Fonts.textBold,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
