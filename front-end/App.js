import React from 'react';
import LoginView from './Components/LoginView'
import SignupView from './Components/SignupView'
import PostView from './Components/PostView'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={LoginView} />
      <Stack.Screen name="Sign Up" component={SignupView} />
      <Stack.Screen name="News feed" component={PostView} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

