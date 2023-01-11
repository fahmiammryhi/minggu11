import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Praktikum4 from './components/minggu4.js';
import Praktikum3 from './components/minggu3.js';
import Peta from './components/peta';
import Front from './components/front';
import Listpeta from './components/listPeta';



const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: '' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: ''}}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: '' }
       }
     />
      <Stack.Screen 
       name="Peta" 
       component={Peta} 
       options={
         { title: '' }
       }
     />
      <Stack.Screen 
       name="Listpeta" 
       component={Listpeta} 
       options={
         { title: '' }
       }
     />
     <Stack.Screen 
       name="Praktikum3" 
       component={Praktikum3} 
       options={
         { title: '' }
       }
     />
     <Stack.Screen 
       name="Praktikum4" 
       component={Praktikum4} 
       options={
         { title: '' }
       }
     />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const RootNavigator = createSwitchNavigator(
  {
  Stack: MyStack, 
  Splash: Front,
  },
  {
    initialRouteName: "Splash",
  }
);
export default createAppContainer(RootNavigator);
 
//const App = createStackNavigator(
  //page,
  //{ headerMode: "none" },
  //{ initialRouteName: "Masuk" }
//);
    //App: App,

//export default function App() {
  //return (
    //<NavigationContainer>
      //<MyStack />
    //</NavigationContainer>
  //);
//};
