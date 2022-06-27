import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import '../Assets/images/fb.png';
import Unfold from 'react-native-vector-icons/AntDesign';

const HelpPage = ({navigation})=>{

    return(
        <ScrollView style={styles.scrollView}>
            <View style = {styles.topView}>
                <Unfold style = {styles.menuImage} name = 'menu-fold' size = {40} />
                    <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}> Get Help Now </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}> View Tickets </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}> Security Training </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}> How To's </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}> My Account </Text>
                </TouchableOpacity>
            </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    topView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        marginTop: -30,


    },
    imageStyle:{
        width: '70%',
        resizeMode: 'contain',
        
        
      },
    menuImage:{
        width: '15%',
        marginRight: 10,
    },
    buttonStyle:{
        width: '90%',
        color: '#000',
        height: 50,
        backgroundColor: '#f05d22',
        borderRadius: 10,
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        
      },
      buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
      },
      buttonView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        
      },
  })
export default HelpPage