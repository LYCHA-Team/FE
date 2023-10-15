import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.input}>
          <TextInput placeholder="Search"></TextInput>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 50,
            marginTop: 30,
          }}
        >
          <TouchableOpacity style={styles.option}>
            <Text style={{ color: "white" }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={{ color: "white" }}>Badminton</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Recommended </Text>
        </View>
        <Post data={postData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const postData = {
  user: "LYCHA",
  time: "10 mins ago",
  topic: "Badminton",
  location: "Thủ Đức",
  distance: "800m away",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
};

const Post = ({ data }) => {
  return (
    <View
      style={{
        marginHorizontal: 25,
        borderColor: "#CFEFE9",
        borderWidth: "1px",
        padding: 20,
        borderRadius: 15,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
        <View style={{ flex: 1, marginRight: 20, display: "flex" }}>
          <View
            style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
          >
            <Image
              source={require("./../../assets/home/shecodes.jpg")}
              style={{
                borderRadius: 100,
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {data.user}
              </Text>
              <Text>{data.time}</Text>
            </View>
          </View>
          <Image
            source={require("./../../assets/post/Badminton.webp")}
            style={{ borderRadius: 10, width: 120, height: 120 }}
          />
        </View>
        <View style={{ flex: 1, display: "flex", rowGap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Topic: {data.topic}
          </Text>
          <Text>Location: {data.location}</Text>
          <Text>Distance: {data.distance}</Text>
        </View>
      </View>
      <Text>{data.desc}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: "#199A8E",
            width: 80,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text style={{ color: "white" }}>See more</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <Icon name="heart" color="#ccc" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="wechat" color="#ccc" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 5,
  },
  input: {
    backgroundColor: "#FBFBFB",
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: "#E8F3F1",
    borderWidth: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 40,
    width: 20,
    backgroundColor: "#199A8E",
  },
});

export default Detail;
