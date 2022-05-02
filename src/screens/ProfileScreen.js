import React, { useContext, useState } from "react";
import {
  View,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import ProfileHeader from "../components/ProfileHeader";
import UserContext from "../contexts/UserContex";
import axios from "axios";
import { api } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
import * as Network from "expo-network";
const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const state = useContext(UserContext);
  const { data } = props.route.params;
  const [profileInfo, setProfileInfo] = useState({
    email: data.email,
    phone: data.phone,
    firstName: data.firstName,
  });
  const checkData = async () => {
    await Network.getNetworkStateAsync();
  };
  console.log(checkData());
  const sendProfileInfo = () => {
    axios
      .put(`${api}/api/v1/users/${state.userId}`, profileInfo)
      .then((e) => {
        console.log(e.data.data);
        Alert.alert("Профайл өөрчлөгдлөө");
        navigation.goBack();
      })
      .catch((err) => {
        let message = err.response.data.error.message;
        Alert.alert(message);
      });
  };
  const checkFirstName = (text) => {
    setProfileInfo({
      ...profileInfo,
      firstName: text,
    });
  };
  const checkEmail = (text) => {
    setProfileInfo({
      ...profileInfo,
      email: text,
    });
  };
  const checkPhone = (text) => {
    setProfileInfo({
      ...profileInfo,
      phone: text,
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ backgroundColor: "#041C32", flex: 1 }}>
        <ProfileHeader />
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              paddingTop: 30,
            }}
          >
            <Image
              source={require("../../assets/icon.png")}
              style={{ height: 150, width: 150 }}
            />
          </View>
          <View style={{ top: 30, paddingHorizontal: 10 }}>
            <Input
              mode="flat"
              label="Нэр:"
              placeholder="Нэрээ оруулна уу"
              value={profileInfo.firstName}
              style={{ color: "white" }}
              onChangeText={checkFirstName}
            />

            <Input
              mode="flat"
              label="Утасны дугаар:"
              placeholder="Утасны дугаар"
              value={profileInfo.phone && profileInfo.phone.toString()}
              style={{ color: "white" }}
              onChangeText={checkPhone}
            />
            <Input
              mode="flat"
              label="И-мэйл хаяг:"
              placeholder="И-мэйл хаяг уу"
              value={profileInfo.email}
              style={{ color: "white" }}
              onChangeText={checkEmail}
            />
          </View>
          <Button
            title="Хадгалах"
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(60, 70, 80, 90)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 30,
              marginTop: 20,
            }}
            containerStyle={{
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={sendProfileInfo}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
