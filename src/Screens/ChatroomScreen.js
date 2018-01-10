import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Platform,AsyncStorage,ScrollView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Message from '../Components/Message';
/*import emojiUtils from 'emoji-utils';*/
/*import Message from '../Message';*/

class ChatroomScreen extends React.Component{
  state={
    message:'',
    messageList:[],
  }
  render(){
    let messages = this.state.messageList.map((val, key)=>{
        return <Message key={key} keyval={key} val={val}
                deleteMethod={()=>this.deleteMessage(key)}/>
    });
    return(
      <View sytle={styles.container}>
          <TextInput
            style={styles.input}
            value={this.state.message}
            onChangeText={(text)=>{this.setState({message:text});}}
            autoCapitalize="none"
            autoCorrect={false}
            multiline={true}
          >
          </TextInput>
          <TouchableHighlight style={styles.botton} onPress={this.addMessage.bind(this)} UnderlayColor='#ddd'>
            <Text style={styles.bottontitle}>投稿</Text>
          </TouchableHighlight>

          <ScrollView style={styles.scrollContainer}>
              {messages}
          </ScrollView>
      </View>
    );
  }
  addMessage(){
    console.log("succcess!!");
    if(this.state.message){
        var d = new Date();
        this.state.messageList.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'message': this.state.message
        });
        this.setState({ messageList: this.state.messageList });
        this.setState({message:''});
    }
  }
  deleteMessage(key){
      this.state.messageList.splice(key, 1);
      this.setState({messageList: this.state.messageList});
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:24,
    backgroundColor:'blue'
  },
  input:{
    backgroundColor:'black',
    height:100,
    marginTop: 20,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#DDD',
    padding:8,
    width:250,
    alignSelf:'flex-end',
    color:'white',
  },
  botton:{
    backgroundColor:'#F0F',
    height:36,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    alignSelf:'flex-end',
  },
  bottontitle:{
    color:'#fff',
    fontSize:18,
  },
  scrollContainer: {
      height:'100%',
      backgroundColor:'#2dcbe0'
  },
});

export default ChatroomScreen;
