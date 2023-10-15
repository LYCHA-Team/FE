import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const categoryData = [
  {
    icon: "handball",
    name: "Cầu lông",
  },
  { icon: "pokeball", name: "Đá banh" },
  { icon: "volleyball", name: "Bóng chuyền" },
  { icon: "dance-ballroom", name: "Chạy bộ" },
];

export default CatagoryTile = ({ data }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        // flexWrap: "wrap",
        marginHorizontal: 25,
        marginTop: -20,
      }}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          style={{
            width: 120,
            height: 120,
            // backgroundColor: "yellow",
            // margin: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          <Icon name={item.icon} color="black" size={40} />
          <Text
            style={{
              fontSize: 18,
              //   color: "#A1A8B0",
              color: "black",
              fontWeight: "400",
              marginTop: 10,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
