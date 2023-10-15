import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
export default BottomNavBar = function () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Profile")}
        style={styles.tab}>
        <Icon name="user" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Detail")}
        style={styles.tab}>
        <Icon name="heart" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Home")}
        style={styles.tab}>
        <Icon name="home" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity

        style={styles.tab} >
        <Icon name="info-circle" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="wechat" color="#ccc" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#199A8E",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});


