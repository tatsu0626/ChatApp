import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight,AsyncStorage } from 'react-native';

class SignupScreen extends React.Component{
  state={
    user_name:'',
    password:'',
    image_URL:'',
  }

  async handleSubmit() {
       let user={user_name: this.state.user_name,password: this.state.password,image_URL: this.state.image_URL}
       AsyncStorage.setItem('user',JSON.stringify(user));
       console.log(user);
  }


      /* response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/users', {
                               method: 'POST',
                               headers: {
                                 'Accept': 'application/json',
                                 'Content-Type': 'application/json',
                               },
                               body: JSON.stringify({
                                 user:{
                                   name: this.state.name,
                                   email: this.state.email,
                                   password: this.state.password,
                                      }
                               })
                             });
       let res = await response.text();
       if (response.status >= 200 && response.status < 300) {
           //Handle success
           let accessToken = res;
           console.log(accessToken);
           //On success we will store the access_token in the AsyncStorage
           this.storeToken(accessToken);
           this.redirect('home');
       } else {
           //Handle error
           let error = res;
           throw error;
       }
     } catch(errors) {
       //errors are in JSON form so we must parse them first.
       let formErrors = JSON.parse(errors);
       //We will store all the errors in the array.
       let errorsArray = [];
       for(var key in formErrors) {
         //If array is bigger than one we need to split it.
         if(formErrors[key].length > 1) {
             formErrors[key].map(error => errorsArray.push(`${key} ${error}`));
         } else {
             errorsArray.push(`${key} ${formErrors[key]}`);
         }
       }
       this.setState({errors: errorsArray})
       this.setState({showProgress: false});
     }
   }*/
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ユーザー登録</Text>
        <TextInput
          style={styles.input}
          value={this.state.userID}
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
          value={this.state.userID}
          onChangeText={(text)=>{this.setState({image_URL:text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="表示画像URL"
        />
      <TouchableHighlight style={styles.botton} onPress={this.handleSubmit.bind(this)} >
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
