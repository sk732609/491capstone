import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import Fold from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import DrawerApp from "../Navigation/Drawer";

const HelpPage = ({navigation})=>{  
    return(
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainView}>
            <View style = {styles.topView}>
                <Fold style = {styles.menuImage} name = 'menu-fold' size = {40} onPress = {()=> navigation.toggleDrawer()}/>
                <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style = {styles.midView}>
                <Text style = {styles.titleText}>Get Help Now</Text>
            </View>
            <View style={styles.bottomView}>
                <View>
                <TextInput multiline style={styles.TextInput}/>
                    <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.buttonText}> Submit Ticket </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

        </ScrollView>

        
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
      topView:{
        width:'90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      midView:{
       marginBottom: 20,
      },
      bottomView:{
        width: '90%',
      },
      imageStyle:{
        flex: 1,
        height: 100,
        width: '90%',
        resizeMode: 'center',
      },
      titleText:{
        fontSize: 45,
        fontWeight: 'bold'
      },
      TextInput:{
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        color: '#000',
        minHeight: 300,
        textAlignVertical: 'top',
      },
      signUpButton:{
        width: '90%',
        color: '#000',
        height: 50,
        backgroundColor: '#f05d22',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
      },
      buttonView:{
        margin: 20,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
      },
      buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
      }
      

})


export default HelpPage