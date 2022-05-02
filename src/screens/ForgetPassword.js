import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { api } from "../../Constants";
import Loading from "../components/Loading";

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const resetHandler = () => {
    setError(null);
    if (email.length === 0) {
      Alert.alert("И-мэйл хаягаа оруулна уу");
      return;
    }
    setLoading(true);
    axios
      .post(`${api}/api/v1/users/forgot-password`, {
        email: email,
      })
      .then((result) => {
        // console.log(result.data);
        setLoading(false);
        navigation.navigate("ResetPassword");
      })
      .catch((err) => {
        // console.log(err.message);
        setLoading(null);
      });
  };

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      keyboardDismissMode="on-drag"
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

      <ImageBackground
        source={require("../../assets/loginbg.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={styles.brandView}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            direction="alternate"
            source={require("../../assets/2smal.png")}
            style={{
              width: 250,
              height: 118,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </ImageBackground>
      {loading === true ? (
        <Loading />
      ) : (
        <Animatable.View
          animation="fadeInUpBig"
          duration={800}
          style={styles.bottomView}
        >
          <View style={{ padding: 40 }}>
            <Text
              style={{
                color: "rgba(30, 40, 50, 60)",
                fontSize: 34,
                textAlign: "center",
              }}
            >
              Нууц үг сэргээх
            </Text>

            <View style={{ marginTop: 20 }}>
              {error && (
                <Text
                  style={{ fontSize: 20, textAlign: "center", color: "red" }}
                >
                  {" "}
                  {error}{" "}
                </Text>
              )}
              <Input
                label="И-мэйл хаяг:"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={{ marginBottom: 10, bottom: 10, left: 10 }}>
                Нууц үгээ сансан бол{" "}
                <Text style={{ color: "blue" }}>нэвтрэх</Text>
              </Text>
            </View>
            <View style={styles.forgetPassView}>
              <View style={{ flex: 1 }}>
                <Button
                  title="И-мэйл илгээх"
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={{
                    backgroundColor: "rgba(30, 40, 50, 60)",
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}
                  onPress={resetHandler}
                />
              </View>
            </View>
            <Text
              style={{ textAlign: "center", fontSize: 18, paddingVertical: 10 }}
            >
              Хэрэв танд бүртгэл байхгүй бол
            </Text>
            <View style={{ flex: 1 }}>
              <Button
                title="Бүртгүүлэх"
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "rgba(60, 70, 80, 90)",
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate("RegisterScreen")}
              />
            </View>
          </View>
        </Animatable.View>
      )}
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 2,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgetPassView: {
    flexDirection: "row",
  },
});
