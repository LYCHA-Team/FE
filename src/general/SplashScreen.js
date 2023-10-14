import React from "react";
import { View, Text, Image } from "react-native";

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
