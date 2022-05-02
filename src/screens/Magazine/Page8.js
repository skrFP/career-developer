import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
const Page8 = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <AntDesign
        name="arrowleft"
        size={30}
        color="black"
        style={{
          position: "absolute",
          top: 85,
          left: 20,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", color: "black" }}>33-36 | </Text>
        <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />
      <View>
        <Text style={[styles.textTitle, { marginTop: 30 }]}>
          {data.p8Title1}{" "}
        </Text>
      </View>
      <Text style={styles.textTitle}>{data.p8Title2} </Text>
      <Image
        source={{ uri: api + "/upload/" + data.p8CareerBg }}
        style={{
          width: windowWidth / 1.1,
          height: 200,
          alignSelf: "center",
          marginVertical: 40,
          marginRight: 40,
        }}
        resizeMode="contain"
      />
      <View style={{ width: windowWidth / 1.1, alignSelf: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontFamily: "MinionPro-black",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            {data.p8LitleTitle}
          </Text>
        </View>
        <Text style={styles.textTitle}>{data.p33Title}</Text>
        <Text style={styles.textStatus}>{data.p33Text}</Text>
        <Text style={styles.textStatus}>{data.p33Text1}</Text>
        <Text style={styles.textStatus}>{data.p33Text2}</Text>
        <Text style={styles.textStatus}>{data.p33Text3}</Text>
        <Text style={styles.textTitle}>{data.p34Title}</Text>
        <Text style={styles.textStatus}>{data.p34Text}</Text>
        <View>
          <Text style={styles.textTitle}>{data.p35BigTitle}</Text>
        </View>
        {/* 1arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career1 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career1Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career1Title}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career1Text}</Text>
          </View>
        </View>
        {/* 2arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career2Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career2Title}</Text>
            </View>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career2 }}
              style={{ width: 200, height: 200, flex: 0.4 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career2Text}</Text>
            <Text style={styles.textStatus}>{data.p8Career2Text1}</Text>
            <Text style={styles.textStatus}>{data.p8Career2Text2}</Text>
            <Text style={styles.textStatus}>{data.p8Career2Text3}</Text>
            <Text style={styles.textStatus}>{data.p8Career2Text4}</Text>
          </View>
        </View>

        {/* 3arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career3Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career3Title}</Text>
            </View>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career3 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career3Text}</Text>
            <Text style={styles.textStatus}>{data.p8Career3Text1}</Text>
          </View>
        </View>
        {/* 4arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career4 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career4Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career4Title}</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Montserrat-regular" }}>
              {data.p8Career4Text}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginVertical: 10,
              }}
            >
              {data.p8Career4StatusText}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              {data.p8Career4Status}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
                marginVertical: 5,
              }}
            >
              {data.p8Career4Status1}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              {data.p8Career4Status2}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
                marginVertical: 5,
              }}
            >
              {data.p8Career4Status3}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              {data.p8Career4Status4}
            </Text>
            <Text style={styles.textStatus}>{data.p8Career4Text1}</Text>
            <Text style={styles.textStatus}>{data.p8Career4Text2}</Text>
          </View>
        </View>
        {/* 5arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career5Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career5Title}</Text>
            </View>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career5 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career5Text}</Text>
            <Text style={styles.textStatus}>{data.p8Career5Text1}</Text>
          </View>
        </View>
        {/* 6arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career6 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career6Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career6Title}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career6Text}</Text>
            <Text style={styles.textStatus}>{data.p8Career6Text1}</Text>
            <Text style={styles.textStatus}>{data.p8Career6Text2}</Text>
            <Text style={styles.textStatus}>{data.p8Career6Text3}</Text>
          </View>
        </View>
        {/* 7 */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p8Career7 }}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>{data.p8Career7Number}</Text>
              <Text style={styles.careerTitle}>{data.p8Career7Title}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>{data.p8Career7Text}</Text>
            <Text style={styles.textStatus}>{data.p8Career7Text1}</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p8Career8 }}
        style={{ width: windowWidth, height: windowHeight }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              textAlign: "right",
              marginTop: 90,
              marginRight: 10,
            }}
          >
            {data.p8Career8Title}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              textAlign: "right",
              marginBottom: 50,
              marginRight: 10,
            }}
          >
            {data.p8Career8Title1}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            {data.p8Career8Text}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            {data.p8Career8Text1}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            {data.p8Career8Text2}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            {data.p8Career8Text3}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            margin: 30,
            position: "absolute",
            bottom: 0,
            right: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Montserrat-bold",
            }}
          >
            2022/03 САР
          </Text>
          <Image
            source={require("../../../assets/icon.png")}
            style={{
              width: 14,
              height: 14,
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Page8;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "Montserrat-bold",
    textAlign: "center",
    fontSize: 22,
  },
  textTop: {
    fontSize: 20,
    fontFamily: "Cambria-bold-italic",
    // marginBottom: 15
  },
  textStatus: {
    fontSize: 16,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
  },
  careerNumber: {
    fontFamily: "Playfair-bold",
    fontSize: 25,
    color: "#55b8ae",
  },
  careerTitle: {
    fontFamily: "Montserrat-regular",
    fontSize: 18,
  },
});
