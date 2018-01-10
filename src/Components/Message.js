import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


class Message extends React.Component{
  render(){
    return(
      <View key={this.props.keyval} style={styles.message} >
          <Text style={styles.messagetext}>{this.props.val.date}</Text>
          <Text style={styles.messagetext}>{this.props.val.message}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.messageDelete} >
              <Text style={styles.messageDeletetext}>削除</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  message:{
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
  },
  messagetext:{
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  messageDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  messageDeletetext:{
    color:'white',
  }
});

export default Message;
