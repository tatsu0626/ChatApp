import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
/*import emojiUtils from 'emoji-utils';*/
/*import Message from '../Message';*/

class ChatroomScreen extends React.Component{
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        sytle={styles.messagepost}
      />
    );
  }

}

const styles=StyleSheet.create({
  messagepost:{
    position: 'absolute',
    top:20,
  }

});

export default ChatroomScreen;
