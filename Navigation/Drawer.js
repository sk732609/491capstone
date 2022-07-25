import React, {Component} from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import LandingPage from "../Screens/LandingPage";
import ViewTickets from '../Screens/ViewTickets';
import SecurityTraining from '../Screens/SecurityTraining';
import HowTo from '../Screens/HowTo';
import MyAccount from '../Screens/MyAccount';
import HelpPage from '../Screens/HelpPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Drawer = createDrawerNavigator();




export default class DraerNav extends Component {

  removeData = async ()=>{
    console.log("it get's here");
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Sign In');
  }

  logout = async () => {
    return Alert.alert(
      "Log Out?",
      "this will prevent you from automatically being signed in on App Startup",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            this.removeData()
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };



  render(){
    return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false, unmountOnBlur:true}} drawerContent={props =>{
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Log Out" onPress={this.logout} />
          </DrawerContentScrollView>
        )
      }}>
        <Drawer.Screen name="Home" component={LandingPage}/>
        <Drawer.Screen name="Help Page" component={HelpPage} />
        <Drawer.Screen name="View Tickets" component={ViewTickets} />
        <Drawer.Screen name="Security Training" component={SecurityTraining} />
        <Drawer.Screen name="How To" component={HowTo} />
        <Drawer.Screen name="My Account" component={MyAccount} />
      </Drawer.Navigator>
    );
  }
  };