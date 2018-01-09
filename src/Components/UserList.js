import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Platform } from 'react-native';

class UserList extends React.Component{
  renderUser(user){
    <View>
      <Text>{user.user_ID}</Text>
    </View>
  }
  render(){
    return(
      <View>
        <FlatList data={this.props.userList} renderItem={this.renderUser.bind(this)} />
      </View>
    );
  }
}

const styles=StyleSheet.create({


});

export default UserList;
