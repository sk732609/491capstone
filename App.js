
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';



function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    
  ); 
};

export default App;