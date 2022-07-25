
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './components/context';
import { LogBox } from 'react-native';




export default app => {
  LogBox.ignoreLogs(['Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.']);




  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    
  )
}