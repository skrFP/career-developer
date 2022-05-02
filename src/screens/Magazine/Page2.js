import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
import * as Animatable from "react-native-animatable";
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page2 = ({ data }) => {
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
          top: 80,
          left: 10,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{ flexDirection: "row", marginTop: 50, marginHorizontal: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>6 | </Text>
        <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          margin: 10,
          marginHorizontal: 20,
          borderColor: "grey",
        }}
      />
      <View style={{}}>
        <Animatable.Text
          animation="fadeInDownBig"
          duration={800}
          style={{
            fontFamily: "Montserrat-bold",
            marginHorizontal: 20,
            color: "#0066a6",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          {data.p2BlueTitle}
        </Animatable.Text>
        <View
          style={{
            borderWidth: 3,
            margin: 20,
            width: 80,
            borderColor: "#0066a6",
          }}
        />
        <Animatable.Image
          animation={"fadeInUpBig"}
          duration={1000}
          source={{ uri: api + "/upload/" + data.p2Naki }}
          style={{ width: windowWidth / 1.1, height: 400, alignSelf: "center" }}
          resizeMode="cover"
        />
        <View style={{ marginRight: 30 }}>
          <Text style={[styles.textWork, { textAlign: "right" }]}>
            {data.p2Dircetor}
          </Text>
          <Text style={[styles.textName, { textAlign: "right" }]}>
            {data.p2DirectorName}
          </Text>
        </View>
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 18,
            fontFamily: "Montserrat-bold",
            marginVertical: 25,
          }}
        >
          {data.p2NakiTitle}
        </Text>
        <Text style={styles.text}>{data.p2NakiText}</Text>
        <Text
          style={{ fontFamily: "Montserrat-bold", margin: 20, fontSize: 18 }}
        >
          {data.p2NakiTitle1}
        </Text>
        <Text style={styles.text}>{data.p2NakiText1}</Text>
        <Text style={[styles.text, { margin: 20 }]}>{data.p2NakiText2}</Text>
        <Text style={[styles.text, { marginHorizontal: 20 }]}>
          {data.p2NakiText3}
        </Text>
      </View>
      <View>
        <View style={{ borderWidth: 1, marginTop: 20, marginHorizontal: 20 }} />
        <Animatable.Image
          animation="slideInRight"
          iterationCount={1}
          direction="alternate"
          source={require("../../../assets/faceLogoBlack.png")}
          style={{ width: windowWidth / 1.1, height: 100, alignSelf: "center" }}
          resizeMode="contain"
        />
        <View style={{ borderWidth: 1, marginTop: 5, marginHorizontal: 20 }} />
        <Animatable.Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          {data.p2Date}
        </Animatable.Text>
        <View style={{ borderWidth: 1, marginHorizontal: 20 }} />
        <Text style={styles.textWork}>{data.p2Dircetor}</Text>
        <Text style={styles.textName}>{data.p2DirectorName}</Text>
        <Text style={styles.textWork}>{data.p2Support}</Text>
        <Text style={styles.textName}>{data.p2SupportName}</Text>
        <Text style={styles.textWork}>{data.p2Contet}</Text>
        <Text style={styles.textName}>{data.p2ContetName}</Text>
        <Text style={styles.textWork}>{data.p2Bussiness}</Text>
        <Text style={styles.textName}>{data.p2BussinessName}</Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
          }}
        >
          {data.p2AdsTitle}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          {data.p2AdsText}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          {data.p2ContactTitle}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          {data.p2ContactText}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          {data.p2CompanyTitle}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          {data.p2CompanyName}
        </Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Image
          source={require("../../../assets/magazinelogo.png")}
          style={{ width: windowWidth, height: 100 }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/companylogo.png")}
          style={{ width: windowWidth, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Montserrat-bold",
          marginHorizontal: 20,

          textAlign: "right",
        }}
      >
        2022/03 САР
      </Text>
    </ScrollView>
  );
};

export default Page2;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    // textAlign: "justify",
    fontFamily: "Montserrat-regular",
    fontSize: 16,
  },
  textWork: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-bold",
    marginTop: 20,
  },
  textName: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat-regular",
    marginVertical: 5,
  },
});
