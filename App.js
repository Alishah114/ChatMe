import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/constants/logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>

      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
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
