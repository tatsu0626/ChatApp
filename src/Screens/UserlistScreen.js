import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserList from '../Components/UserList';


class UserlistScreen extends React.Component{
  state={
    userList:[],
  }
async componentWillMount(){
    AsyncStorage.getItem('user').then((value) => {
    this.setState({'user':value});
    });
    this.setState({userList:value});
  }



  render(){
    return(
    <View style={styles.container}>
        <Text>ユーザー一覧</Text>
        <UserList userList={this.state.userList}  />
    </View>
    );
  }
}

const styles=StyleSheet.create({

});

export default UserlistScreen;
