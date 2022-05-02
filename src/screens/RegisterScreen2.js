import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../contexts/UserContex";
import { Button, CheckBox, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

const RegisterScreen2 = () => {
  const navigation = useNavigation();
  const [check4, setCheck4] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const state = useContext(UserContext);

  const signupHandler = () => {
    if (phone.length < 6) {
      Alert.alert("Та утасны дугаараа бичнэ үү");
      return;
    }
    if (password1 !== password2) {
      Alert.alert("Нууц үгнүүд хоорондоо таарахгүй байна");
      return;
    }
    if (password1.length < 4) {
      Alert.alert("Нууц үг хамгийн багадаа 4 оронтой байна");
      return;
    }
    if (check4 === false) {
      Alert.alert("Та үйлчилгээний нөхцөл зөвшөөрнө үү ");
      return;
    }

    state.signUp(phone, email, password1);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
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
          style={{
            height: Dimensions.get("window").height / 2.5,
          }}
        >
          <View style={styles.brandView}>
            <Animatable.Image
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              direction="alternate"
              source={require("../../assets/faceLogo.png")}
              style={{
                width: 350,
                height: 65,
                alignSelf: "center",
                justifyContent: "center",
                top: 20,
              }}
            />
          </View>
        </ImageBackground>
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
              Тавтай морил
            </Text>
            <Text style={{ top: 10, textAlign: "center" }}>
              Хэрэв танд бүртгэл байгаа бол
              <Text
                style={{ color: "blue", fontStyle: "italic" }}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                {" "}
                Нэвтрэх
              </Text>{" "}
            </Text>
            <View style={{ marginTop: 50, flex: 1 }}>
              <Input
                label="Утасны дугаар: "
                placeholder="8888-8888"
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#C5C5C5"
                keyboardType="numeric"
              />
              <Input
                label="И-мэйл хаяг: "
                value={email}
                onChangeText={setEmail}
                placeholder="email@gmail.com"
                placeholderTextColor="#C5C5C5"
              />
              <Input
                label="Пин код (4 оронтой тоо):"
                placeholder="00-00"
                value={password1}
                onChangeText={setPassword1}
                secureTextEntry={true}
                placeholderTextColor="#C5C5C5"
                keyboardType="numeric"
              />
              <Input
                placeholder="00-00"
                label="Пин код давтан оруулна уу:"
                value={password2}
                onChangeText={setPassword2}
                secureTextEntry={true}
                placeholderTextColor="#C5C5C5"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "flex-start",
                alignItems: "flex-start",
                alignSelf: "flex-start",
              }}
            >
              <CheckBox
                center
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={20}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={20}
                  />
                }
                checked={check4}
                onPress={() => setCheck4(!check4)}
              />
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                onPress={() => setCheck4(!check4)}
              >
                Үйлчилгээний нөхцөл{" "}
                <Text
                  style={{ color: "blue", fontStyle: "italic" }}
                  onPress={() => navigation.navigate("Terms")}
                >
                  зөвшөөрөх
                </Text>
              </Text>
            </View>

            <View style={styles.forgetPassView}>
              <View style={{ flex: 1 }}>
                <Button
                  title="Бүртгүүлэх"
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
                  onPress={signupHandler}
                />
              </View>
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen2;

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
    flex: 1.5,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgetPassView: {
    flexDirection: "row",
  },
});
