
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import FirstScreen from '../Screens/FirstScreen';
import DrawerNav from './Drawer';
import LoadingScreen from '../Screens/Loading';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading Screen" component={LoadingScreen} />
          <Stack.Screen name="First Screen" component={FirstScreen} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name='DrawerNav' component = {DrawerNav}/>
        </Stack.Navigator>
      );
};

export default AuthStack;
