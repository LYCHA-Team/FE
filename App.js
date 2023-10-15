import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/general/SplashScreen";
import Login from "./src/general/Login";
import SignUp from "./src/general/SignUp";
import Profile from "./src/user/Profile";
import Activities from "./src/user/Activities";
import Interest from "./src/user/Interest";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Interested" component={Interested} />

      <Stack.Screen name="Activities" component={Activities} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
