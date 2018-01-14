import React from 'react';
import { StyleSheet,Text,View,TouchableHighlight} from 'react-native';

class LogoutScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.message}>ログアウトしますか？</Text>
        <TouchableHighlight style={styles.botton} onPress={()=>this.props.navigation.navigate('Signup')} UnderlayColor='#ddd'>
          <Text style={styles.bottontitle}>ログアウト</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles=StyleSheet.create({
container:{
  paddingTop:100,
},
message:{
  alignSelf:'center',
},
botton:{
  backgroundColor:'#F0F',
  height:50,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
  width:'50%',
  alignSelf:'center',
  padding:8,
},
bottontitle:{
  color:'#fff',
  fontSize:18,
},
});

export default LogoutScreen;
