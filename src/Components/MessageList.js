import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Platform,FlatList } from 'react-native';

class MessageList extends React.Component{
  renderMessage({item}){
      console.log(item);
      return(
              <View>
                <Text>{item.message}</Text>
              </View>
            );
  }
  render(){
    return(
      <View>
        <FlatList data={this.props.messageList} renderItem={this.renderMessage.bind(this)} />
      </View>
    );
  }
}

const styles=StyleSheet.create({


});

export default MessageList;
