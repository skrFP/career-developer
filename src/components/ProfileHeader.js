import React, { useContext } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../contexts/UserContex";
const windowWidth = Dimensions.get("window").width;

const ProfileHeader = () => {
  const navigation = useNavigation();
  const state = useContext(UserContext);
  return (
    <View
      style={{
        flexDirection: "row",
        width: windowWidth,
        justifyContent: "space-between",
        backgroundColor: "#041C32",
        paddingVertical: 35,
      }}
    >
      <View>
        <AntDesign
          name="arrowleft"
          size={32}
          color="#fff"
          style={{ left: 15, top: 15 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ top: 20, right: 2 }}>
        <Image
          source={require("../../assets/faceLogo.png")}
          style={{ width: 150, height: 28 }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          top: 15,
          right: 15,
        }}
      >
        <MaterialIcons
          name="logout"
          size={28}
          color="#fff"
          onPress={() => state.logout()}
        />
        <Text
          style={{
            color: "white",

            fontWeight: "bold",
            top: 3,
            fontSize: 8,
          }}
          onPress={() => state.logout()}
        >
          Гарах
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
