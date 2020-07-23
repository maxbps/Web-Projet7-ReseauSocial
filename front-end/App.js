import React from 'react';
import LoginView from './Components/LoginView'
import RegisterView from './Components/RegisterView'
import PostView from './Components/PostView'
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <PostView />
    </SafeAreaView>
  );
}

