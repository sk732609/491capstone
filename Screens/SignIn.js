import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../Assets/images/topLogo.png';

// This is the sign in screen, and its main purpose is just that. The formatting does look a little off, but that also finds its origins in
// The IT support side of the app which is now non existant. It was further altered when we discussed the Token login system. At this point
// this page ONLY takes a token (which can be up to 100 characters long), and would pressumbly paste it in only once, the first time they use the app.

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {valueLog: ''};
  }

  // _retrieveData is going to be a function that appears on almost all of the screens. It basically just checks that the currently logged in user
  // does in fact have an account in the system. Because of the asyncronous and persistant login, this is necessary to make sure that a user whom was
  // removed from the database does not still have access. This is basically used before any fetch requests are made.

  // In this case, though, it is recieving the token for the first time, and we know this. If the token was already stored on the local device,
  // they would have bypassed this page. The function is still used elsewhere.

  _retrieveData = async () => {
    var valueLog = this.state.valueLog;
    if (valueLog.length != 0) {
      var checkTokenAPIURL = 'http://njitmobileapp.navitend.co//checkToken.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var Data = {
        token: valueLog,
      };
      fetch(checkTokenAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response[0].Message);
          if (Response[0].Message === 'Success') {
            console.log('Account found');
            this.storeData();
          } else {
            alert('Account not in system');
          }
        })
        .catch(error => {
          alert('Error' + error);
        });
    } else {
      alert('Please fill in your token');
    }
  };


  //storeData us called from within _retrieveData, and simply stores the token on the local device. It then sends the user onto the LandingPage
  storeData = async () => {
    try {
      await AsyncStorage.setItem('token', this.state.valueLog);
      console.log('set token');
      this.props.navigation.navigate('DrawerNav', {screen: 'Home'});
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Image
              style={styles.imageStyle}
              source={require('../Assets/images/topLogo.png')}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.heading}>
              Welcome{'\n'}
              Back
            </Text>
            <View style={styles.formView}>
              <TextInput
                placeholder={'Token*'}
                style={styles.TextInput}
                onChangeText={valueLog => this.setState({valueLog})}
                value={this.state.valueLog}
              />
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this._retrieveData}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    //flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  imageStyle: {
    flex: 1,
    //height: 250,
    resizeMode: 'contain',
    width: '95%',
    height: '100%',
  },
  bottomView: {
    width: '100%',
    backgroundColor: '#f05d22',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  heading: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 175,
  },
  TextInput: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 40,
  },
  buttonStyle: {
    width: '90%',
    color: '#fff',
    height: 50,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f05d22',
  },
  SignUpText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});
