import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage,FlatList } from 'react-native';



class SignupScreen extends React.Component{
  state={
    user_name:'',
    password:'',
    image_URL:'',
    userlist:[],
  }

  renderuser({item}) {
    console.log(item);
    return(
          <View>
            <Text>{this.state.userList}</Text>
          </View>
      );
  }

  async componentWillMount(){
    AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
      // get at each store's key/value so you can work with it
      let key = store[i][0];
      let value = store[i][1];
      const userList=[];
      //console.log(value);
      userList.push(value);
      console.log(userList);
      this.setState({ userList });
    });
  });
});
}
  async onRegisterPress() {
      const { user_name, password, image_URL } = this.state;
      const userList=[];
      let userDetails = {
        name:user_name,
        password:password,
        icon:image_URL,
      }
      try{if(userDetails.name.length<2 || userDetails.name.length>20) {
          Alert.alert("ユーザー名は２文字〜２０文字で設定してください。");
        } else if (userDetails.password.length<4||userDetails.password.length>20) {
          Alert.alert("パスワードは４文字〜２０文字で設定してください。");
        } else if (userDetails.image_URL.length<8 || userDetails.image_URL.length>250) {
          Alert.alert("表示画像URLは８文字〜２５０文字で設定してください。");
        }else {
          AsyncStorage.setItem('@userDetails',JSON.stringify(userDetails));
          userList.push(JSON.stringify(userDetails));
          this.setState({ userList });
        }
        }catch(error){
        console.log(error);
      }
    }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.signup}>
        <Text style={styles.title}>新規ユーザー追加</Text>
          <TextInput
            style={styles.input}
            value={this.state.user_name}
            onChangeText={(text)=>{this.setState({user_name:text});}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="ユーザー名"
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text)=>{this.setState({password:text});}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="パスワード"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            value={this.state.image_URL}
            onChangeText={(text)=>{this.setState({image_URL:text});}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="表示画像URL"
          />
          <TouchableHighlight style={styles.botton} onPress={this.onRegisterPress.bind(this)} >
            <Text style={styles.bottontitle}>登録</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.userlist}>
          <FlatList data={this.state.userList} renderItem={this.renderuser.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:24,
    backgroundColor:'#fff'
  },
  input:{
    backgroundColor:'#ddd',
    height:48,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#DDD',
    padding:8,
  },
  title:{
    fontSize:28,
    alignSelf:'center',
    marginBottom:24,
    fontWeight:'bold',
  },
  botton:{
    backgroundColor:'blue',
    height:48,
    borderRadius:14,
    justifyContent:'center',
    alignItems:'center',
    width:'70%',
    alignSelf:'center',
  },
  bottontitle:{
    color:'#fff',
    fontSize:18,
  },
});

export default SignupScreen;
