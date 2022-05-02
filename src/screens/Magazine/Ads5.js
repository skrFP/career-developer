import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Ads5 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "white" }}
      horizontal
    >
      <AntDesign
        name="arrowleft"
        size={30}
        color="black"
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={{ uri: api + "/upload/" + data.ads5 }}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.3,
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default Ads5;

const styles = StyleSheet.create({});
