import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
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
import {createIconSetFromFontello} from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ViewTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      token: '',
      ticketID: 0,
      date: '',
      ticketInfo: '',
      status: 'Open',
      tableHead: ['Ticket ID', 'Ticket', 'Status'],
      tableData: [],
      widthArr: [80, 200, 60],
    };
  }

  // This controls the switch and allows it to swap between functions when it is switched.

  toggleSwitch = value => {
    this.setState({switchValue: value});
    this.checkAccount();
  };

  //Check account is called immediately after rendering, but through "toggleSwitch" can be called again to rerender info.
  // both of these functions, however, immediately calls "checkAccount"
   componentDidMount() {
     this.checkAccount();
   }

  // this is the SAME function. It checks that that local token is a token in the database.
  // It does contain an important distinction, though. further on in the request, it checks the switchValue
  // which we get from the toggleSwitch function, and user interaction, and then calls for "getTickets" or "GetTicketsAll"
  checkAccount = async () => {
    var token = await AsyncStorage.getItem('token');
    if (token == null) {
      this.removeData();
    } else if (token.length != 0) {
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
          
          if (Response[0].Message === 'Success') {
            console.log('Account found ' + token);
            if (this.state.switchValue == true){
              this.getTicketsAll();
            }else{
              this.getTickets();
            }
          } else {
            alert('Account not in system');
            this.removeData();
          }
        })
        .catch(error => {
          alert('Error3' + error);
        });
    } else {
      alert('Please fill in your token');
    }
  };

  // this is also the SAME function. It goes along with checkAccount and removes data/signs the user out if checkAccount fails.
  removeData = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Sign In');
  };

  getTickets = async () => {
    var token = await AsyncStorage.getItem('token');
    var checkIdAPIURL = 'https://njitmobileapp.navitend.co//getTickets.php';

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
        if (Response != null){
        var result = Response.map(el => Object.values(el));
        this.setState({tableData: result});
        }
      })
      .catch(error => {
        alert('Error1' + error);
      });
  };

  // getTickets and getTicketsAll are essentially the same function, and serve the same purpose. they both retieve the tickets
  // from the database, and then modify the data to be displayed approporiately. getTickets is called if the switch isn't switched,
  // and only gets 'open' tickets, whereas getTicketsAll is called if the switch has been switched, and it gets all tickets (that match the token)

  getTicketsAll = async () => {
    console.log("in get tickets all")
    var token = await AsyncStorage.getItem('token');
    var checkIdAPIURL = 'https://njitmobileapp.navitend.co//getTicketsAll.php';

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
        if (Response != null){
        var result = Response.map(el => Object.values(el));
        this.setState({tableData: result});
        }
      })
      .catch(error => {
        alert('Error2' + error);
      });
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
            <Text style={styles.titleText}>View Tickets</Text>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.container}>
              <Text style={styles.textStyle}>
                {this.state.switchValue
                  ? 'Viewing All Tickets'
                  : 'Viewing Only Open Tickets'}
              </Text>
              <Switch
                style={{marginTop: 10}}
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </View>
            <Text style={styles.paragraphText}>
              <Table style={styles.table}borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row
                  data={state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                  widthArr = {state.widthArr}
                />
                <Rows data={state.tableData} textStyle={styles.text} widthArr = {state.widthArr} />
              </Table>
            </Text>
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
    width: '100%',
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
  container: {flex: 1, alignItems: 'center',
  justifyContent: 'center',},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, textAlign: 'center', flex: 1},
  textStyle: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3a4a35',
  },
  table:{
    textAlign: 'center',
  }
});
