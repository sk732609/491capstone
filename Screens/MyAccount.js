import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import Unfold from 'react-native-vector-icons/AntDesign';

const MyAccount = ({navigation})=>{  
    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
            <View style = {styles.topView}>
                <Unfold style = {styles.menuImage} name = 'menu-fold' size = {40} onPress = {()=> navigation.toggleDrawer()} />
                <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style={styles.midView}>
                <Text style={styles.titleText}>
                   My Account
                </Text>
            </View>
        
            <View style={styles.bottomView}>
                <Text style={styles.paragraphText}>
                    We don't know exactly what sort of information we'll need {'\n'}{'\n'}
                    Once we figure that out we can finish this.
                </Text>            
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
  paragraphText:{
    fontSize: 20,
    textAlignVertical: 'center', 
    textAlign: 'center',
    padding: 20,
  }
})
export default MyAccount