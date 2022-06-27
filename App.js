/*
 * npx react-native run-android
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";




const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Sign In' component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  ); 
};

export default App;
