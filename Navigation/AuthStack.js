import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import FirstScreen from '../Screens/FirstScreen';
import DrawerNav from './Drawer';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="First Screen" component={FirstScreen} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name='DrawerNav' component = {DrawerNav}/>
          {/*<Stack.Screen name="Landing Page" component={LandingPage} />
          <Stack.Screen name="Help Page" component={HelpPage} />
          <Stack.Screen name="View Tickets" component={ViewTickets} />
          <Stack.Screen name="Security Training" component={SecurityTraining} />
          <Stack.Screen name="How To" component={HowTo} />
          <Stack.Screen name="My Account" component={MyAccount} /> */}
        </Stack.Navigator>
      );
};
export default AuthStack;
