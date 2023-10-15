import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default SplashScreen = () => {
  return (
    <View>
      <Text>Splashscreen text</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};
