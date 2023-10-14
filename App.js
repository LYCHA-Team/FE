import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// // export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/general/SplashScreen";
import Login from "./src/general/Login";
import SignUp from "./src/general/SignUp";
import Onboarding from "./src/general/Onboarding";
import SetupInterests from "./src/general/SetupInterests";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
