import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
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

// This screen focuses on displayed the Security Trainings available to each of the users.
// As it stands now, without the actual links, we weren't able to make this perfectly functional,
// but this screen works really well as a proof of concept, and wouldn't be to hard to get it actually
// pulling up the links that are provided. Most of the functions appearing on this scree have appeared before.

export default class SecurityTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      tableHead: ['Title', 'Link'],
      tableData: [],
      linkData: [],
    };
  }

  // This is a new one, and it handles getting the index/data from the button that was pressed.
  // This would make it very easy to link to an external source, because it is already able to
  // display the fake links we wrote out in the database. This is used within the table.
  _alertIndex(index) {
    Alert.alert(
      `This is row ${index + 1}`,
      `${this.state.tableData[index][1]}`,
    );
  }

  //called after first render
  componentDidMount() {
    this.checkAccount();
  }

  //check if local token is in database
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
            this.getSecurity();
          } else {
            alert('Account not in system');
            this.removeData();
          }
        })
        .catch(error => {
          alert('Error2' + error);
        });
    } else {
      alert('Please fill in your token');
    }
  };

  //logs user out if local token not correct
  removeData = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Sign In');
  };

  // This is a simple function which calls a fetch request which just recieves all the rows of the Security_Tips table.
  // This does mean security tips can be added or removed without a need to update the app.
  // It is important to note that it modifies the JSON object that was recieved from the php file, and makes it into an array of arrays
  // this is ONLY done bceause of the React-Native-Table-Component we opted to use.

  getSecurity = async () => {
    var token = await AsyncStorage.getItem('token');
    var checkIdAPIURL = 'https://njitmobileapp.navitend.co//getSecurity.php';

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
        if (Response != null) {
          var translate = Response;
          var result = translate.map(el => Object.values(el));
          this.setState({tableData: result});
        }
      })
      .catch(error => {
        alert('Error1' + error);
      });
  };

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>view</Text>
        </View>
      </TouchableOpacity>
    );
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
            <Text style={styles.titleText}>Security Training</Text>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.container}>
              <Table
                style={styles.table}
                borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row
                  data={state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                  widthArr={state.widthArr}
                />
                {state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 1 ? element(cellData, index) : cellData
                        }
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
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
  container: {flex: 1, padding: 16, paddingTop: 30, alignItems: 'center'},
  head: {height: 40, backgroundColor: '#f1f8ff', alignText: 'center'},
  text: {margin: 6, textAlign: 'center', color: '#3a4a35'},
  row: {flexDirection: 'row', width: '90%'},
  btn: {
    width: 58,
    height: 18,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    alignSelf: 'center',
  },
  btnText: {textAlign: 'center', color: '#fff'},
});
