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
    width: 138,
    height: 46,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 0,
    gap: 10,
    position: "absolute",
    marginBottom: 10,
    top: 110,
    right: 10,
  },
});

export default Onboarding = ({ navigation }) => {
  return (
    <View>
      <Text>Onboarding Screen</Text>
      <TouchableOpacity
        title="Temp button to Home"
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
