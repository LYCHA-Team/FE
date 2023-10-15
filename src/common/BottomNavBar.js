import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Icon name="user" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="heart" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="home" color="#ccc" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
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

export default BottomNavBar;
