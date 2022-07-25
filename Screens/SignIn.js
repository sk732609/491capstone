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

export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {valueLog: ''};
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('token', this.state.valueLog);
      console.log("set token");
      this.props.navigation.navigate('DrawerNav', {screen: 'Home'});

    } catch (e) {
      console.log(e);
    }
  };

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
    }else{
      alert ("Please fill in your token");
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
              <Text></Text>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this._retrieveData}>
                <Text style={styles.buttonText}>Sign In (Customer)</Text>
              </TouchableOpacity>
               {/* <TouchableOpacity
              style={styles.buttonStyle}
              onPress= {this._retrieveData}>
              <Text style={styles.buttonText}>test In (Customer)</Text>
            </TouchableOpacity>  */}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    //marginTop:20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    //height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '80%',
    resizeMode: 'contain',
  },
  bottomView: {
    width: '100%',
    height: '70%',
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
    marginTop: 20,
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
    marginTop: 20,
  },
  buttonStyle: {
    width: '90%',
    color: '#000',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 20,
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
