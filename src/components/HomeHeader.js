import React, { useEffect, useState, useContext } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { api } from "../../Constants";
import axios from "axios";
import UserContext from "../contexts/UserContex";
const windowWidth = Dimensions.get("window").width;

const HomeHeader = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const state = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/api/v1/users/${state.userId}`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  }, [isFocused]);
  return (
    <View
      style={{
        flexDirection: "row",
        width: windowWidth,
        justifyContent: "space-between",
        backgroundColor: "#1c2841",
        paddingVertical: 35,
      }}
    >
      <View>
        <Image
          source={require("../../assets/faceLogo.png")}
          style={{
            width: 160,
            height: 30,
            justifyContent: "center",
            alignSelf: "center",
            left: 10,
            top: 24,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <AntDesign
          name="user"
          size={30}
          color="#333"
          style={{ right: 10, color: "white", top: 23 }}
          onPress={() => navigation.navigate("ProfileScreen", { data: data })}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  badgeStyle: {
    position: "absolute",
    top: 30,
    right: 15,
  },
});

export default HomeHeader;
