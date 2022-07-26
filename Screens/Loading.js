import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import '../Assets/images/topLogo.png';
import '../Assets/images/Sheep.png';
import '../Assets/images/Name.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

    // This page doesn't have all that much use. it was a simple addition to 
    // make the automatic logging in process a bit more smooth prior to this addtion
    // The process to login was located in the "FirstScreen" page, which meant
    // That you would breifly get a view of that page before it fully proccessed the query.
    // It uses the below function which acts ONLY after the first round of render. This page 
    //doesn't render except for a single situation so it avoids the flashing images.
    



export default class LoadingScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        token: '',
        loading: true,}}

    // This function is called after the page is render. Because "loading" is true, it doesn't render.
    // Realistically it should never render.
    componentDidMount() {
      this._retrieveData();
    }

    // Retrieve data is a function which gets the 'token' from the Asyncstorge, and that calls a fetch request
    // to check if its in the database or not. If it is, it directs the user towards the "LandingPage", otherwise,
    // it sends them to "First Screen"
    _retrieveData = async () => {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {

        var checkTokenAPIURL = 'http://njitmobileapp.navitend.co//checkToken.php';
        var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        var Data = {
          token: value,
        };
        fetch(checkTokenAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data),
        })
          .then(Response => Response.json())
          .then(Response => {
            if (Response[0].Message === 'Success') {
              console.log ("Account found " + value);
              this.setState({ loading: false });
              this.props.navigation.navigate('DrawerNav');
            } else {
              console.log ("Account Not Found")
              this.setState({ loading: false });
              this.props.navigation.navigate('First Screen');
            }
          })
          .catch(error => {
            alert('Error' + error);
          });
      }else{
        this.setState({ loading: false });
        this.props.navigation.navigate('First Screen');
      };
    }
    
    render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return(
      <Text>Hello, you found a secret</Text>
    );

    }
  }

const styles = StyleSheet.create({
    mainView:{
      marginTop:50,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    topView:{
      width:'100%',
      //height: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle:{
      width: '80%',
      resizeMode: 'contain',
    },
    bottomView:{
      width: '100%',
      //height: '30%',
      backgroundColor:'#f05d22',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40, 
    },
    heading:{
      color:'#000',
      fontSize:30,
      fontWeight:'bold',
      marginLeft:30,
      marginTop:20,
    },
    formView:{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    TextInput:{
      width: '90%',
      borderWidth: 2,
      borderColor: '#000',
      height: 50,
      borderRadius: 10,
      color: '#000',
      fontWeight: 'bold',
      paddingLeft: 10,
      marginTop: 20,
    },
    buttonStyle:{
      width: '90%',
      color: '#000',
      height: 50,
      backgroundColor: '#000',
      borderRadius: 10,
      marginTop:20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f05d22',
    },
    SignUpText:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
    },
    signUpButton:{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
    }
  });
