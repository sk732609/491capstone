/*
 * npx react-native run-android
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import LandingPage from "./Screens/LandingPage";
import HelpPage from "./Screens/HelpPage";
import FirstScreen from "./Screens/FirstScreen";
import ViewTickets from './Screens/ViewTickets';
import SecurityTraining from './Screens/SecurityTraining';
import HowTo from './Screens/HowTo';
import MyAccount from './Screens/MyAccount';




const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='First Screen' component={FirstScreen} options={{headerShown:false}} />
        <Stack.Screen name='Sign In' component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Landing Page' component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name='Help Page' component={HelpPage} options={{headerShown:false}}/>
        <Stack.Screen name='View Tickets' component={ViewTickets} options={{headerShown:false}}/>
        <Stack.Screen name='Security Training' component={SecurityTraining} options={{headerShown:false}}/>
        <Stack.Screen name='How To' component={HowTo} options={{headerShown:false}}/>
        <Stack.Screen name='My Account' component={MyAccount} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  ); 
};

export default App;
