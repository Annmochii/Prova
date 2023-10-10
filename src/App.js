import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './pages/MainPage/index.js';
import LoginPage from './pages/LoginPage/index.js';
import SignUpPage from './pages/SignUpPage/index.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Main' component={MainPage}/>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='SignUp' component={SignUpPage}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
