import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page11 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p11DeBg }}
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
        }}
        resizeMode="cover"
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
        <View style={{ alignSelf: "flex-end", marginRight: 20, flex: 1 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-medium",
              marginTop: 50,
            }}
          >
            {data.p11DeBgWork}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-bold",
            }}
          >
            {data.p11DeBgName}
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            alignSelf: "flex-end",
            marginRight: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Oswald-bold",
              color: "white",
              fontSize: 30,
              textAlign: "right",
              width: windowWidth / 2,
            }}
          >
            {data.p11DeBgTitle}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ width: windowWidth / 1.1, alignSelf: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: "black" }}>54-56 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: "grey" }} />
        <View
          style={{
            alignSelf: "flex-end",
            marginRight: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "black",
              fontSize: 20,
              textAlign: "center",
              margin: 20,
            }}
          >
            {data.p11DeBgText}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Playfair-regular",
              bottom: 10,
              flex: 0.1,
            }}
          >
            Ц
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-bold",
              flex: 0.9,
              top: 10,
              marginLeft: 10,
            }}
          >
            {data.p55Title}
          </Text>
        </View>
        {/* <Text
          style={{ fontSize: 16, fontFamily: "Montserrat-bold", bottom: 20 }}
        >
          талаар яригдах болжээ. Үүнээс өмнө хүн өмнөх ажлаа үг дуугүй л хийх
          ёстой гэсэн ойлголт зонхилж байсан мэт. Ажлын байранд сэтгэл зүй
          яагаад чухал байдаг вэ?
        </Text> */}
        <Text style={styles.textStatus}>{data.p55Text}</Text>
        <Text style={styles.textStatus}>{data.p55Text1}</Text>
        <Text style={styles.textTitle}>{data.p55Title1}</Text>
        <Text style={styles.textStatus}>{data.p55Text2}</Text>
        <Text style={styles.textStatus}>{data.p55Text3}</Text>
        <Text
          style={[styles.textStatus, { marginLeft: 20, marginVertical: 5 }]}
        >
          {data.p55Status}
        </Text>
        <Text
          style={[styles.textStatus, { marginLeft: 20, marginVertical: 5 }]}
        >
          {data.p55Status1}
        </Text>
        <Text
          style={[styles.textStatus, { marginLeft: 20, marginVertical: 5 }]}
        >
          {data.p55Status2}
        </Text>
        <Text style={styles.textStatus}>{data.p55Text4}</Text>
        <Text
          style={{
            fontFamily: "Cambria-bold-italic",
            fontSize: 25,
            color: "#0066a6",
          }}
        >
          {data.p55BlueText}
        </Text>
        <Text style={[styles.textTitle, { marginTop: 15 }]}>
          {data.p55Title2}
        </Text>
        <Text style={styles.textStatus}>{data.p55Text5}</Text>
        <Text style={styles.textStatus}>{data.p55Text6}</Text>
        <Text style={styles.textTitle}>{data.p55Title3}</Text>
        <Text style={styles.textStatus}>{data.p55Text7}</Text>
      </View>
      {/* page2 */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={{ uri: api + "/upload/" + data.p11De1 }}
            style={{ width: 150, height: 150, borderRadius: 100, flex: 0.4 }}
          />
          <View style={{ flex: 0.6, justifyContent: "center" }}>
            <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
            <Text
              style={{
                marginHorizontal: 20,

                fontFamily: "Cambria-bold-italic",
                color: "#0066a6",
              }}
            >
              {data.p11De1Text}
            </Text>
            <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
          </View>
        </View>
        <Text style={styles.textStatus}>{data.p55Text8}</Text>
        <Text style={styles.textTitle}>{data.p56Title}</Text>
        <Text style={styles.textStatus}>{data.p56Text}</Text>
        <Text style={styles.textStatus}>{data.p56Text1}</Text>
        <Text style={styles.textTitle}>{data.p56Title1}</Text>
        <Text style={styles.textStatus}>{data.p56Text2}</Text>
        <Text style={styles.textStatus}>{data.p56Text3}</Text>
        <Text style={styles.textStatus}>{data.p56Text4}</Text>
        <Text style={styles.textTitle}>{data.p56Title2}</Text>
        <Text style={styles.textStatus}>{data.p56Text5}</Text>
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

export default Page11;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15
  },
  textStatus: {
    fontSize: 16,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
  },
});
