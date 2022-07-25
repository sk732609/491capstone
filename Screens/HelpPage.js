import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
import Fold from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      ticketID: 0,
      date: '',
      ticketInfo: '',
      status: 'Open',
    };
  }

  removeData = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Sign In');
  }

  checkAccount = async ()=> {

    var token = await AsyncStorage.getItem('token');
    if (token == null){
      this.removeData();
    }else if (token.length != 0) {
      var checkTokenAPIURL = 'http://njitmobileapp.navitend.co//checkToken.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var Data = {
        token: token,
      };
      fetch(checkTokenAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response[0].Message + "This is the checkaccount part");
          if (Response[0].Message === 'Success') {
            console.log('Account found');
            this.checkID();
          } else {
            alert('Account not in system');
            this.removeData();
          }
        })
        .catch(error => {
          alert('Error' + error);
        });
    }else{
      alert ("Please fill in your token");
    }

  };

  InsertTicket = async () => {
    var token = await AsyncStorage.getItem('token');
    var ticketID = this.state.ticketID;
    var date = new Date();
    var supportID = null;
    var ticketInfo = this.state.ticketInfo;
    var status = this.state.status;

    if (
      token.length == 0 ||
      ticketID == 0 ||
      date.length == 0 ||
      ticketInfo.length == 0 ||
      status.length == 0
    ) {
      alert('Required Information is missing');
    } else {

      var InsertAPIURL = 'http://njitmobileapp.navitend.co//insertTicket.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var Data = {
        token: token,
        ticketID: ticketID,
        supportID: supportID,
        date: date,
        ticketInfo: ticketInfo,
        status: 'Open',
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response[0]);
          if (Response[0].Message == 'Success') {
            alert('Ticket submitted');
          } else {
            alert('Ticket Failed to Submit');
          }
        })
        .catch(error => {
          alert('Error' + error);
        });
    }
  };

  checkID = () => {
    var random = Math.floor(Math.random() * 1000000) + 1;

    var checkIdAPIURL = 'http://njitmobileapp.navitend.co//checkId.php';

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    var Data = {
      ticketID: random,
    };

    fetch(checkIdAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then(Response => Response.json())
      .then(Response => {
        if (Response[0].Message === 'Success') {
          this.setState({
            ticketID: random,
          });
          this.InsertTicket();
        } else {
          this.checkID();
        }
      })
      .catch(error => {
        alert('Error' + error);
      });
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Fold
              style={styles.menuImage}
              name="menu-fold"
              size={40}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
            <Image
              style={styles.imageStyle}
              source={require('../Assets/images/fb.png')}
            />
          </View>
          <View style={styles.midView}>
            <Text style={styles.titleText}>Get Help Now</Text>
          </View>
          <View style={styles.bottomView}>
            <View>
              <TextInput
                multiline
                style={styles.TextInput}
                placeholder={
                  "Please describe the problem you're having, and the best way to contact you."
                }
                onChangeText={ticketInfo => this.setState({ticketInfo})}
              />
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={this.checkAccount}>
                  <Text style={styles.buttonText}>Submit Ticket </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

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
  midView: {
    marginBottom: 20,
  },
  bottomView: {
    width: '90%',
  },
  imageStyle: {
    flex: 1,
    height: 100,
    width: '90%',
    resizeMode: 'center',
  },
  titleText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    color: '#000',
    minHeight: 300,
    textAlignVertical: 'top',
  },
  signUpButton: {
    width: '90%',
    color: '#000',
    height: 50,
    backgroundColor: '#f05d22',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

