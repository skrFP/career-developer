import React from "react";
import { View, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const CustomHeader = () => {
  const navigation = useNavigation();

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
        <AntDesign
          name="arrowleft"
          size={30}
          color="#fff"
          style={{ left: 15, top: 18 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ top: 20 }}>
        <Image
          source={require("../../assets/faceLogo.png")}
          style={{
            width: 150,
            height: 28,
            alignSelf: "center",
            justifyContent: "center",
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
          style={{ right: 15, color: "white", top: 18 }}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
