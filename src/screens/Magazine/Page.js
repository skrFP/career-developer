import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../Constants";
import Loading from "../../components/Loading";
import * as Animatable from "react-native-animatable";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = ({ data }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  function onLoading(value, label) {
    setLoading(value);
  }
  return (
    <>
      {loading && <Loading />}

      <ImageBackground
        source={{ uri: api + "/upload/" + data.facePhoto }}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        resizeMode="cover"
        onLoadStart={() => {
          onLoading(true, "onLoadStart");
        }}
        onLoadEnd={() => {
          onLoading(false, "onLoadStart");
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="#ffffff"
          style={{
            position: "absolute",
            top: 50,
            left: 10,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View style={{ flex: 1 }}>
          <Animatable.Image
            useNativeDriver={true}
            animation="fadeInDownBig"
            duration={800}
            direction={"alternate"}
            iterationDelay={2000}
            source={require("../../../assets/faceLogo.png")}
            style={{
              width: 370,
              height: 70,
              alignSelf: "center",
              marginTop: 70,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 0.46 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Playfair-bold",
                  marginBottom: 20,
                }}
              >
                {data.faceTitle}
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Cambria-bold-italic",
                  textAlign: "center",
                  marginRight: 80,
                }}
              >
                {data.faceText}
              </Text>
            </View>
            <View style={{ flex: 0.46 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Cambria-bold-italic",
                  textAlign: "center",
                  marginLeft: 80,
                  marginBottom: 20,
                }}
              >
                {data.faceLogo2Text}
              </Text>
              <Image
                source={{ uri: api + "/upload/" + data.faceLogo2 }}
                style={{
                  width: 80,
                  height: 42.2,
                  alignSelf: "flex-end",
                  marginRight: 10,
                }}
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}>
            <View style={{ flex: 0.46 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Oswald-light",
                  textAlign: "center",
                  marginRight: 80,
                }}
              >
                {data.faceCareer}
              </Text>
            </View>
            <View style={{ flex: 0.46 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Playfair-bold",
                  textAlign: "right",
                  marginBottom: 20,
                }}
              >
                {data.faceTitle1}
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Cambria-bold-italic",
                  textAlign: "center",
                  marginLeft: 100,
                }}
              >
                {data.faceText1}
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.5, marginHorizontal: 20 }}>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {data.faceTitle2}
            </Text>
            <Text
              style={{
                fontFamily: "Playfair-bold",
                color: "white",
                fontSize: 21,
              }}
            >
              {data.faceText2}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
