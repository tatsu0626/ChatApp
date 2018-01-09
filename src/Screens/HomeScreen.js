import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight } from 'react-native';
import {TabRouter} from 'react-navigation';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import ChatroomScreen from './ChatroomScreen';
import TabNavigator from "react-native-tab-navigator";

/*const MyApp = TabRouter({
  ChatRoom: { screen: ChatroomScreen },
  User: { screen: SignupScreen },
  Logout:{screen:LoginScreen},
}, )*/


class HomeScreen extends React.Component{
  render(){
    return(
      <TabNavigator tabBarStyle={styles.tabBar}>
        <TabNavigator.Item titleStyle={styles.tabtitle} title="チャットルーム">

        </TabNavigator.Item>
        <TabNavigator.Item titleStyle={styles.tabtitle} title="ユーザー管理">

        </TabNavigator.Item>
        <TabNavigator.Item titleStyle={styles.tabtitle} title="ログアウト">

        </TabNavigator.Item>
     </TabNavigator>
    );
  }
}


const styles=StyleSheet.create({
  tabBar:{
    height:60,
    backgroundColor:'blue',
  },
  tabtitle:{
    color:"black",
    fontSize:15,
    alignSelf:'center',
    paddingBottom:20,
  },
});

export default HomeScreen;
