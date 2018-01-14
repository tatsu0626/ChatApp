import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage,Alert } from 'react-native';

class LoginScreen extends React.Component{
  state={
    userID:'',
    password:'',
  }
  handleSubmit = () => {
    AsyncStorage.getItem('@userDetails').then((value)=> {
        let loginUserDetails = JSON.parse(value);
        if(loginUserDetails.name==this.state.userID && loginUserDetails.password==this.state.password) {
          this.props.navigation.navigate('Home');
          AsyncStorage.setItem("@userLoggedIn","true");
        } else {
          Alert.alert("error logged in");
        }
    }).done();
  }


  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.userID}
          onChangeText={(text)=>{this.setState({userID:text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="ユーザーID"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text)=>{this.setState({password:text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
      <TouchableHighlight style={styles.botton} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.bottontitle}>ログインする</Text>
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

export default LoginScreen;
