import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import '../Assets/images/fb.png';

const LandingPage = ({navigation})=>{

    return(
        <ScrollView style={styles.scrollView}>
            <View style = {styles.topView}>
                    <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Help Page')}>
                    <Text style={styles.buttonText}> Get Help Now </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('View Tickets')}>
                    <Text style={styles.buttonText}> View Tickets </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('Security Training')}>
                    <Text style={styles.buttonText}> Security Training </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('How To')}>
                    <Text style={styles.buttonText}> How To's </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress = {() => navigation.navigate('My Account')}>
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
        width: '90%',
        resizeMode: 'contain',
        
        
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
export default LandingPage