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
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import BackIcon from 'react-native-vector-icons/Entypo';
import Unfold from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

// This screen displays all of the none important information that is stored within the Accounts database.
// The user is able to change each of the entries, and update their own account. Because of the nature of this information
// it doesn't actually matter what the update it to, it will not brick any of this app's functionality.

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      EmailValue: '',
      FirstName: '', 
      LastName: '',
      PhoneNumber: '',
      CompanyName: '',
    };
  }

  //This function is a modified "checkAccount" function. It checks that the local token is valid, and if it is
  // it grabs the relevent information, and allows those information to appear within the textboxes that the user has access to.
  runSearch = async () => {
    var token = await AsyncStorage.getItem('token');
    var checkIdAPIURL = 'https://njitmobileapp.navitend.co//accountsearch.php';

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    var Data = {
      token: token,
    };

    fetch(checkIdAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log(Response);
        if (Response != null){
          var result = Response.map(el => Object.values(el));
          this.setState({EmailValue: result[0][0]});
          this.setState({FirstName: result[0][1]});
          this.setState({LastName: result[0][2]});
          this.setState({PhoneNumber: result[0][3]});
          this.setState({CompanyName: result[0][4]});
          }
          else{
            alert('that account is not in our system');
            this.removeData();
          }
      })
      .catch(error => {
        alert('Error2' + error);
      });
  }

  componentDidMount() {
    this.runSearch();
  }

  // This is called when the user hits the button to update their information. It just takes whatever information was placed in the
  // text boxes, and updates the relevent row in the Accounts table. It doesn't concern itself with if that data was already input or not.
  // as said before, the modifications here are not all that consequential.
  updateAccount = async () => {
    var token = await AsyncStorage.getItem('token');
    var checkIdAPIURL = 'https://njitmobileapp.navitend.co//updateAccount.php';

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    var Data = {
      token: token,
      email: this.state.EmailValue,
      first: this.state.FirstName,
      last: this.state.LastName,
      phone: this.state.PhoneNumber,
      company: this.state.CompanyName,
    };

    fetch(checkIdAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log(Response + " This is the update part 4");
        if (Response === 'Success') {
          alert('Account updated');
        } else {
          alert('account not updated');
        }
      })
      .catch(error => {
        alert('Error4' + error);
      });
  }

  removeData = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Sign In');
  };

  render() {
    const state = this.state;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Unfold
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
            <Text style={styles.titleText}>My Account</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.formView}>
              <TextInput
                placeholder={'Email*'}
                style={styles.TextInput}
                onChangeText={EmailValue => this.setState({EmailValue})}
                value={this.state.EmailValue}
              />
              <TextInput
                placeholder={'First Name*'}
                style={styles.TextInput}
                onChangeText={FirstName => this.setState({FirstName})}
                value={this.state.FirstName}
              />
              <TextInput
                placeholder={'Last Name*'}
                style={styles.TextInput}
                onChangeText={LastName => this.setState({LastName})}
                value={this.state.LastName}
              />
              <TextInput
                placeholder={'Phone Number*'}
                style={styles.TextInput}
                onChangeText={PhoneNumber => this.setState({PhoneNumber})}
                value={this.state.PhoneNumber}
              />
              <TextInput
                placeholder={'Company Name*'}
                style={styles.TextInput}
                onChangeText={CompanyName => this.setState({CompanyName})}
                value={this.state.CompanyName}
              />

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this.updateAccount}>
                <Text style={styles.buttonText}>Update Account Information</Text>
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
  midView: {},
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
  paragraphText: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 20,
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
});


//while this doesn't technically need to be here removing it is scary. I realized when annotating these screens, that runSearch 
// was basically the same function. I've updated it some that it should work pefectly, but it still scares me. This remains.
 
  // checkAccount = async () => {
  //   var token = await AsyncStorage.getItem('token');
  //   if (token == null) {
  //     this.removeData();
  //   } else if (token.length != 0) {
  //     var checkTokenAPIURL = 'http://njitmobileapp.navitend.co//checkToken.php';
  //     var headers = {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     };
  //     var Data = {
  //       token: token,
  //     };
  //     fetch(checkTokenAPIURL, {
  //       method: 'POST',
  //       headers: headers,
  //       body: JSON.stringify(Data),
  //     })
  //       .then(Response => Response.json())
  //       .then(Response => {
          
  //         if (Response[0].Message === 'Success') {
  //           console.log('Account found ' + token);
  //           this.runSearch();
  //         } else {
  //           alert('Account not in system');
  //           this.removeData();
  //         }
  //       })
  //       .catch(error => {
  //         alert('Error3' + error);
  //       });
  //   } else {
  //     alert('Please fill in your token');
  //   }
  // };