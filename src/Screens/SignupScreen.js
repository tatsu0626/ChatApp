import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage } from 'react-native';



class SignupScreen extends React.Component{
  state={
    user_name:'',
    password:'',
    image_URL:'',
  }

  async componentWillMount(){
    AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
      // get at each store's key/value so you can work with it
      let key = store[i][0];
      let value = store[i][1];
      console.log(value);
    });
  });
});
}
  async onRegisterPress() {
      const { user_name, password, image_URL } = this.state;
      let userDetails = {
        name:user_name,
        password:password,
        icon:image_URL,
      }
      console.log(user_name);
      console.log(password);
      console.log(image_URL);

      try{
        AsyncStorage.setItem('@userDetails',JSON.stringify(userDetails))
        this.props.navigation.navigate('Home');
      }catch(error){
        console.log(error);
      }
      /*await AsyncStorage.setItem("user_name", user_name);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("image_URL", image_URL);
      this.props.navigation.navigate("Home");*/
    }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ユーザー登録</Text>
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
