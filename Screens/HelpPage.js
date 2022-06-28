import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import Fold from 'react-native-vector-icons/AntDesign';

const HelpPage = ({navigation})=>{  
    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
            <View style = {styles.topView}>
                <Fold style = {styles.menuImage} name = 'menu-fold' size = {40} />
                <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style = {styles.titleView}>
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
        marginTop: 30,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
      topView:{
        height: '15%',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

      },
      imageStyle:{
        width: '90%',
        resizeMode: 'contain',
      },
      titleView:{
        heigh: '15%',
        marginTop: 30,
      },
      titleText:{
        fontSize: 45,
        fontWeight: 'bold'
      },
      bottomView:{
        marginTop: 20,
        height: '70%',
        width: '90%',
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
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
      },
      buttonView:{
        margin: 10,
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