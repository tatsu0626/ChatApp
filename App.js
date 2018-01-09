import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ChatroomScreen from './src/Screens/ChatroomScreen';
import UserlistScreen from './src/Screens/UserlistScreen';

const App = StackNavigator({
//UserList:{screen:UserlistScreen},
Signup:{screen:SignupScreen},
ChatRoom:{screen:ChatroomScreen},
Home:{screen:HomeScreen},
Login:{screen:LoginScreen},
},{
  navigationOptions:{
  headerTitle:'ChatApp',
  headerTintColor:'#fff',
  headerBackTitle:null,
  headerStyle:{
    backgroundColor:'Red',
  },
  headerTitleStyle:{
    color:'#fff',
  },
  },
});



export default App;
