import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import '../Assets/images/topLogo.png';
import '../Assets/images/Sheep.png';
import '../Assets/images/Name.png';


const SignIn = ({navigation})=>{



    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Image style={styles.imageStyle} source={require('../Assets/images/Sheep.png')}/>
            <Image style={styles.imageStyle} source={require('../Assets/images/Name.png')}/>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.formView}>
              <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign In')}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyle}onPress = {() => navigation.navigate('Sign Up')}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView:{
      marginTop:20,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    topView:{
      width:'100%',
      height: '70%',
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
      height: '30%',
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

  })
export default SignIn