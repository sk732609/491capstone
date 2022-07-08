import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import Unfold from 'react-native-vector-icons/AntDesign';

const ViewTickets = ({navigation})=>{  
    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
            <View style = {styles.topView}>
                <Unfold style = {styles.menuImage} name = 'menu-fold' size = {40} onPress = {()=> navigation.toggleDrawer()} />
                <Image style={styles.imageStyle} source={require('../Assets/images/fb.png')}/>
            </View>
            <View style={styles.midView}>
                <Text style={styles.titleText}>
                    View Tickets
                </Text>
            </View>
        
            <View style={styles.bottomView}>
                <Text style={styles.paragraphText}>
                    We'll be placing a table here {'\n'}{'\n'}
                    But likely basing it off the database backend
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
export default ViewTickets