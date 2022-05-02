import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Linking from "expo-linking";
const Footer = () => {
  return (
    <View
      style={{
        // backgroundColor: "#041C32",
        backgroundColor: "#1c2841",

        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../../assets/newFooter.png")}
          style={{ width: 150, height: 50 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 13, color: "white" }}>
          Утас:{" "}
          <Text
            onPress={() => Linking.openURL("tel:7755-5255")}
            style={{ color: "#8AFFFF" }}
          >
            +976 7755-5255
          </Text>
        </Text>
        <Text style={{ fontSize: 13, color: "white", paddingBottom: 7 }}>
          И-мэйл:{" "}
          <Text
            onPress={() => Linking.openURL("mailto: info@ihelp.mn")}
            style={{ color: "#8AFFFF" }}
          >
            info@ihelp.mn
          </Text>
        </Text>
        <Text style={{ fontSize: 10, color: "white", fontWeight: "100" }}>
          Бүх эрх хуулиар хамгаалагдсан ©
          <Text> Новелист Тайм ХХК - 2022 он</Text>
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
