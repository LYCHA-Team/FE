import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#f5f5f5",
    padding: 5,
  },
  button: {
    marginTop: 5,
    backgroundColor: "#49B583",
    padding: 10,
    height: 46,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});

export default SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white" }}>Temp button to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
