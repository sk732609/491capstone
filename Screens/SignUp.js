import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';

const SignUp = ({navigation})=>{

  function navigate(){
    navigation.navigate('Sign In');
  }
  
    return(
      <ScrollView style={styles.scrollView}>
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image style={styles.imageStyle} source={require('../Assets/images/topLogo.png')}/>
        </View>
        <View style={styles.bottomView}>
          <BackIcon onPress={navigate} style={styles.Icon} name="chevron-left" size={45} color={"#000"}/>
          <Text style={styles.heading}>
            Registration
          </Text>
          <View style={styles.formView}>
            <TextInput placeholder={"Company Name*"} style={styles.TextInput}/>
            <TextInput placeholder={"Full Name*"} style={styles.TextInput}/>
            <TextInput placeholder={"Email Address*"} style={styles.TextInput}/>
            <TextInput placeholder={"Phone Number*"} style={styles.TextInput}/>
            <TextInput placeholder={"Password*"} secureTextEntry={true} style={styles.TextInput}/>
            <TextInput placeholder={"Confirm Password*"} secureTextEntry={true} style={styles.TextInput}/>
            <TouchableOpacity style={styles.buttonStyle} onPress = {navigate}>
              <Text style={styles.buttonText}>Create Account</Text>
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
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageStyle:{
    width: '80%',
    resizeMode: 'contain',
  },
  bottomView:{
    width: '100%',
    height: '80%',
    backgroundColor:'#f05d22',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  heading:{
    color:'#000',
    fontSize:40,
    fontWeight:'bold',
    marginLeft:20,
    marginTop:5,
  },
  formView:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
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
  },
  Icon:{
    marginLeft:5,
    marginTop: 10,
  }

})
export default SignUp