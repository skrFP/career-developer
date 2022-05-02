import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../../Constants";

const Page6 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ backgroundColor: "white", width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      {/* Page 11 nuur huudas  */}
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p6Pony1 }}
        style={{ width: windowWidth, height: windowHeight * 1 }}
        resizeMode="cover"
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: "#ef58a0",
            alignSelf: "flex-start",
            marginTop: 100,
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 16,
            }}
          >
            {data.p6Pony1Status}
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            {data.p6Pony1Title}
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
              width: 145,
              alignSelf: "flex-end",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {data.p6Pony1Title1}
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            {data.p6Pony1Title2}
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
              width: 152,
              alignSelf: "flex-end",
            }}
          />
        </View>
      </ImageBackground>
      {/* 4Aguulga */}
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>28-29 | </Text>
        <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <Text style={styles.textStatus}>{data.p28Text}</Text>
        <Text style={styles.textStatus}>{data.p28Text1}</Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>{data.p29Number}</Text>
          <Text style={styles.textTitle}>{data.p29Title}</Text>
        </View>
        <Text style={styles.textStatus}>{data.p29Text}</Text>
        <Text style={styles.textStatus}>{data.p29Text1}</Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>{data.p29Number1}</Text>
          <Text style={styles.textTitle}>{data.p29Title1}</Text>
        </View>
        <Text style={styles.textStatus}>{data.p29Text2}</Text>
        <Text style={styles.textStatus}>{data.p29Text3}</Text>
      </View>
      <Image
        source={{ uri: api + "/upload/" + data.p6Pony2 }}
        style={{ width: windowWidth / 1.2, height: 300 }}
      />
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>{data.p29Number2}</Text>
          <Text style={styles.textTitle}>{data.p29Title2}</Text>
        </View>
        <Text style={styles.textStatus}>{data.p29Text4}</Text>
        <Text style={styles.textStatus}>{data.p29Text5}</Text>
        <Text style={styles.textStatus}>{data.p29Text6}</Text>
        <Text style={styles.textStatus}>{data.p29Text7}</Text>
        <Text style={styles.textStatus}>{data.p29Text8}</Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>{data.p29Number3}</Text>
          <Text style={styles.textTitle}>{data.p29Title3}</Text>
        </View>
        <Text style={styles.textStatus}>{data.p29Text9}</Text>
        <Text style={styles.textStatus}>{data.p29Text10}</Text>
      </View>

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

export default Page6;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-bold",
    color: "#a93b91",
    marginLeft: 10,
    marginRight: 50,
  },
  textStatus: {
    fontSize: 18,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
    color: "#000000",
  },
  numberTitle: {
    fontFamily: "Oswald-medium",
    color: "#a93b91",
    fontSize: 40,
    bottom: 10,
  },
});
