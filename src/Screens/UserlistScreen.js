import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage } from 'react-native';

class UserlistScreen extends React.Component{
  state={
    userList:[],
  }
  componentWillMount(){
        try {
          let user=await AsyncStorage.getItem(`user`);
        }
        catch(error){
          console.log(error);
        }
        this.setState({ userList:user });
      });

  render(){
    return(
    <View style={styles.container}>
        <Text>ユーザー一覧</Text>
        <UserList userList=this.state.userList navigation={this.props.navigation} />
    </View>
    );
  }
}

const styles=StyleSheet.create({

});

export default UserlistScreen;
