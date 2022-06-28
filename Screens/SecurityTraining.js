import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import Unfold from 'react-native-vector-icons/AntDesign';

const SecurityTraining = ({navigation})=>{  
    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
            <View style = {styles.topView}>
                <Unfold style = {styles.menuImage} name = 'menu-fold' size = {40} />
                <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style={styles.MidView}>
                <Text style={styles.TitleView}>
                    Security Training
                </Text>
            </View>
        
            <View style={styles.bottomView}>
                <Text style={styles.textView}>
                    We'll be placing a table here {'\n'}{'\n'}
                    But likely basing it off the database backend
                </Text>            
            </View>
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
      textView:{
        fontSize: 20,
        textAlignVertical: 'center', 
        textAlign: 'center',
        padding: 20,
      },
      TitleView:{
        fontSize: 45,
        fontWeight: 'bold',
        textAlignVertical: 'center', 
        textAlign: 'center',
        marginTop: -40,
        marginBottom: 30,
      }
})
export default SecurityTraining