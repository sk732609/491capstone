import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import '../Assets/images/topLogo.png';
import '../Assets/images/Sheep.png';
import '../Assets/images/Name.png';
import AsyncStorage from '@react-native-async-storage/async-storage';



  export default class FirstScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        token: '',
        loading: true,
      
    }

    }

    componentDidMount() {
      this._retrieveData();
    }

    
 

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
              this.props.navigation.navigate('DrawerNav');
              this.setState({ loading: false });
            } else {
              console.log ("Account Not Found")
              this.props.navigation.navigate('Sign In');
              this.setState({ loading: false });
            }
          })
          .catch(error => {
            alert('Error' + error);
          });
      }else{
        this.props.navigation.navigate('Sign In');
      };
    }
    

    render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Image style={styles.imageStyle} source={require('../Assets/images/Sheep.png')}/>
            <Image style={styles.imageStyle} source={require('../Assets/images/Name.png')}/>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.formView}>
              <TouchableOpacity style={styles.buttonStyle} onPress = {this._retrieveData}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.buttonStyle}onPress = {() => this.props.navigation.navigate('Sign Up')}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity> */}
            </View>
          
          </View>
        </View>
        </ScrollView>
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
