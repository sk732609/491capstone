import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import '../Assets/images/fb.png';

const LandingPage = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>

      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image
            style={styles.imageStyle}
            source={require('../Assets/images/fb.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Help Page')}>
            <Text style={styles.buttonText}> Get Help Now </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('View Tickets')}>
            <Text style={styles.buttonText}> View Tickets </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Security Training')}>
            <Text style={styles.buttonText}> Security Training </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('How To')}>
            <Text style={styles.buttonText}> How To's </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('My Account')}>
            <Text style={styles.buttonText}> My Account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    height: 100,
    width: '90%',
    resizeMode: 'center',
  },
  buttonStyle: {
    width: '90%',
    color: '#000',
    height: 50,
    backgroundColor: '#f05d22',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonView: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
});
export default LandingPage;
