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
import Fold from 'react-native-vector-icons/AntDesign';

// LandingPage is a very simple page that involves basically no functions. Its simply a screen with a top logo, some navigation stuff
// and a bunch of buttons that direct the user to different screens. This is where user are automatically sent if they open the app
// and they have a correct stored token on their device.

// If someone's account were to be removed from the database, and they left off on this screen, it would NOT kick them out automatically.
// "View Tickets", "Security Training", "How To's", and "My Account" would all kick the user out, though, because they make fetch requests
// immediately. "Get Help Now", on the other hand, doesn't kick the user out automatically, but instead would wait until they attempted to
// send in a ticket.


const LandingPage = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>

      <View style={styles.mainView}>
      <View style={styles.topView}>
            <Fold
              style={styles.menuImage}
              name="menu-fold"
              size={40}
              onPress={() => navigation.toggleDrawer()}
            />
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
    width: '95%',
    color: '#000',
    height: 60,
    backgroundColor: '#f05d22',
    borderRadius: 10,
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 27,
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
