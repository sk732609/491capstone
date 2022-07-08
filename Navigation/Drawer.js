import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LandingPage from "../Screens/LandingPage";
import ViewTickets from '../Screens/ViewTickets';
import SecurityTraining from '../Screens/SecurityTraining';
import HowTo from '../Screens/HowTo';
import MyAccount from '../Screens/MyAccount';
import HelpPage from '../Screens/HelpPage';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={LandingPage}/>
        <Drawer.Screen name="Help Page" component={HelpPage} />
        <Drawer.Screen name="View Tickets" component={ViewTickets} />
        <Drawer.Screen name="Security Training" component={SecurityTraining} />
        <Drawer.Screen name="How To" component={HowTo} />
        <Drawer.Screen name="My Account" component={MyAccount} />
      </Drawer.Navigator>
    );
  };
export default DrawerNav