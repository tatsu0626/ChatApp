import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Platform,AsyncStorage,ScrollView,Image} from 'react-native';
import Message from '../Components/Message';
import TabNavigator from "react-native-tab-navigator";
/*import emojiUtils from 'emoji-utils';*/
/*import Message from '../Message';*/

class ChatroomScreen extends React.Component{
  state={
    message:'',
    messageList:[],
    user_name:'',
    userIcon:'',
  }
  async componentWillMount(){
    AsyncStorage.getItem('@userDetails').then((value)=> {
        let loginUserDetails = JSON.parse(value);
        this.setState({user_name:loginUserDetails.name,userIcon:loginUserDetails.icon})
    }).done();

  }

  render(){
    let messages = this.state.messageList.map((val, key)=>{
        return <Message key={key} keyval={key} val={val}
                deleteMethod={()=>this.deleteMessage(key)}/>
    });
    return(
      <View sytle={styles.container}>
        <View style={styles.Messaging}>
          <TextInput
            style={styles.input}
            value={this.state.message}
            onChangeText={(text)=>{this.setState({message:text});}}
            autoCapitalize="none"
            autoCorrect={false}
            multiline={true}
          >
          </TextInput>
          <View>
            <Image style={styles.usericon} source= {{uri:this.state.userIcon}}/>
            <Text style={styles.username}>{this.state.user_name}</Text>
          </View>
        </View>

          <TouchableHighlight style={styles.botton} onPress={this.addMessage.bind(this)} UnderlayColor='#ddd'>
            <Text style={styles.bottontitle}>投稿</Text>
          </TouchableHighlight>

          <ScrollView style={styles.scrollContainer}>
              {messages}
          </ScrollView>
          <TabNavigator tabBarStyle={styles.tabBar}>
            <TabNavigator.Item
              titleStyle={styles.tabtitle}
              title="チャットルーム"
              onPress={()=>this.props.navigation.navigate('Home')}
            >

            </TabNavigator.Item>
            <TabNavigator.Item
              titleStyle={styles.tabtitle}
              title="ユーザー管理"
              onPress={()=>this.props.navigation.navigate('Signup')}
            >

            </TabNavigator.Item>
            <TabNavigator.Item
              titleStyle={styles.tabtitle}
              title="ログアウト"
              onPress={()=>this.props.navigation.navigate('Logout')}
            >

            </TabNavigator.Item>
         </TabNavigator>
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
  Messaging:{
    marginTop: 15,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#DDD',
    paddingRight:20,
    flexDirection:'row',
  },
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'blue'
  },
  input:{
    backgroundColor:'black',
    height:100,
    borderColor:'#DDD',
    width:300,
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
    padding:8,
  },
  bottontitle:{
    color:'#fff',
    fontSize:18,
  },
  scrollContainer: {
      height:'75%',
      backgroundColor:'#2dcbe0'
  },
  tabBar:{
    paddingTop:10,
    height:60,
    backgroundColor:'blue',
  },
  tabtitle:{
    color:"black",
    fontSize:15,
    alignSelf:'center',
    paddingBottom:20,
  },
  usericon:{
    height:50,
    borderColor:'#DDD',
    width:50,
    alignSelf:'flex-end',

},
  username:{
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
  }
});

export default ChatroomScreen;
