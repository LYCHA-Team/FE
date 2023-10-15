import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/general/SplashScreen";
import Login from "./src/general/Login";
import SignUp from "./src/general/SignUp";
import Onboarding from "./src/general/Onboarding";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{headerShown: false,}}
  >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
