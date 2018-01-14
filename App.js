import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ChatroomScreen from './src/Screens/ChatroomScreen';
import UserlistScreen from './src/Screens/UserlistScreen';
import Main from './src/reference/Main';
import LogoutScreen from './src/Screens/LogoutScreen';


const App = StackNavigator({
Signup:{screen:SignupScreen},
Home:{screen:ChatroomScreen},
Login:{screen:LoginScreen},
Todo:{screen:Main},
UserList:{screen:UserlistScreen},
Logout:{screen:LogoutScreen},
},{
  navigationOptions:{
  headerTitle:'ChatApp',
  headerTintColor:'#fff',
  headerBackTitle:null,
  headerStyle:{
  backgroundColor:'black',
  },
  headerTitleStyle:{
    color:'#fff',
  },
  },
});



export default App;
