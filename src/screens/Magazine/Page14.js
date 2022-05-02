import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page14 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p14CoinFace }}
        style={{ width: windowWidth, height: windowHeight }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          style={{
            position: "absolute",
            top: 55,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginTop: 80,
            fontFamily: "Montserrat-bold",
            color: "white",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          {data.p14CoinTop}
        </Text>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text
            style={{
              marginTop: 80,
              fontFamily: "Montserrat-bold",
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            {data.p14CoinTitle}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-medium",
              color: "white",
              textAlign: "center",
              fontSize: 45,
            }}
          >
            {data.p14CoinTitle1}
          </Text>
          <View
            style={{
              borderWidth: 5,
              alignSelf: "center",
              borderColor: "#55b8ae",
              width: 100,
              marginTop: 20,
            }}
          />
        </View>
      </ImageBackground>
      <View
        style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>68-70 | </Text>
        <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginVertical: 5,
          borderColor: "grey",
          marginHorizontal: 20,
        }}
      />
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p14Coin1 }}
        style={{
          width: windowWidth / 1.1,
          height: 300,
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        <View style={{ marginTop: 230, alignSelf: "center" }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-bold",
              fontSize: 18,
              textAlign: "right",
            }}
          >
            {data.p14Coin1Text}
          </Text>
        </View>
      </ImageBackground>
      <ScrollView horizontal>
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinTable }}
          style={{ width: windowWidth * 1.55, height: 300 }}
        />
      </ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          Дижитал хөрөнгүүдийн
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            www.coinhub.mn
          </Text>{" "}
          бирж дээрх ханш (2022.02.22-ны өдрийн байдлаар)
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Зах зээлийн үнэлгээ:
          </Text>{" "}
          Тухайн цагийн койны үнэлгээг нийт нийлүүлсэн койны тоогоор үржүүлж
          тооцов.
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          <Text style={{ fontFamily: "Montserrat-bold" }}> Эрэмбэ:</Text>{" "}
          Ханшаар
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.coinTitle}>
          {data.p14Coin1Number} {data.p14Coin1Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin1SpecialTitle}</Text>
          {data.p14Coin1SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin1CompanyTitle}</Text>{" "}
          {data.p14Coin1CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin2Number} {data.p14Coin2Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin2SpecialTitle}</Text>{" "}
          {data.p14Coin2SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin2CompanyTitle}</Text>{" "}
          {data.p14Coin2CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin3Number} {data.p14Coin3Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin3SpecialTitle}</Text>{" "}
          {data.p14Coin3SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin3CompanyTitle}</Text>{" "}
          {data.p14Coin3CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin4Number} {data.p14Coin4Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin4SpecialTitle}</Text>{" "}
          {data.p14Coin4SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin4CompanyTitle}</Text>{" "}
          {data.p14Coin4CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin5Number} {data.p14Coin5Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin5SpecialTitle}</Text>{" "}
          {data.p14Coin5SpecialText}
        </Text>
        <Text style={styles.coinStatus}> {data.p14Coin5SpecialText1}</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin5CompanyTitle}</Text>{" "}
          {data.p14Coin5CompanyText}
        </Text>
        <Text style={styles.coinStatus}>
          {"     "}
          {data.p14Coin5CompanyText1}
        </Text>
        <Text style={styles.coinStatus}>
          {"     "}
          {data.p14Coin5CompanyText2}
        </Text>
        <Text style={styles.coinStatus}>
          {"     "}
          {data.p14Coin5CompanyText3}
        </Text>
        <Text style={styles.coinStatus}>{data.p14Coin5CompanyText4}</Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin6Number} {data.p14Coin6Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin6SpecialTitle}</Text>{" "}
          {data.p14Coin6SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin6CompanyTitle}</Text>{" "}
          {data.p14Coin6CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin7Number} {data.p14Coin7Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin7SpecialTitle}</Text>{" "}
          {data.p14Coin7SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin7CompanyTitle}</Text>{" "}
          {data.p14Coin7CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin8Number} {data.p14Coin8Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin8SpecialTitle}</Text>{" "}
          {data.p14Coin8SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin8CompanyTitle}</Text>{" "}
          {data.p14Coin8CompanyText}
        </Text>
        <Text style={styles.coinTitle}>
          {data.p14Coin9Number} {data.p14Coin9Title}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin9SpecialTitle}</Text>{" "}
          {data.p14Coin9SpecialText}
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>{data.p14Coin9CompanyTitle}</Text>{" "}
          {data.p14Coin9CompanyText}
        </Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#55b8ae",
          marginBottom: 50,
          paddingVertical: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo1 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo2 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo3 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo4 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo5 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo6 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo7 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo8 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: api + "/upload/" + data.p14CoinLogo9 }}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
      </ScrollView>
      <View style={{ flexDirection: "row", alignSelf: "flex-end", margin: 30 }}>
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
    </ScrollView>
  );
};

export default Page14;

const styles = StyleSheet.create({
  coinStatus: {
    fontFamily: "Montserrat-regular",
    fontSize: 16,
    marginVertical: 10,
  },
  coinStatusBold: {
    fontFamily: "Montserrat-bold",
  },
  coinTitle: {
    fontFamily: "Montserrat-bold",
    fontSize: 18,
    color: "#55b8ae",
  },
});
