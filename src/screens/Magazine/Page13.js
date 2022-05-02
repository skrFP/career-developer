import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page13 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p13TechFace }}
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
        }}
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
            fontFamily: "Montserrat-bold",
            textAlign: "center",
            color: "white",
            marginTop: 80,
            fontSize: 20,
            flex: 1,
          }}
        >
          {data.p13TechFaceTop}
        </Text>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 50,
            }}
          >
            {data.p13TechFaceDate}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 35,
            }}
          >
            {data.p13TechFaceTitle}
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#55b8ae",
              alignSelf: "center",
              width: 60,
              marginVertical: 20,
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 35,
            }}
          >
            {/* шилдэг 10 технологи{" "} */}
            {data.p13TechFaceTitle1}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 50,
            }}
          >
            {data.p13TechFaceTitle2}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 35,
            }}
          >
            {data.p13TechFaceTitle3}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>64-66 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
        />
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "Playfair-regular", bottom: 10 }}
          >
            Д
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Montserrat-regular",
              marginHorizontal: 5,
              top: 5,
            }}
          >
            {data.p13TechFaceText}
          </Text>
        </View>
        {/* <Text
          style={{
            fontSize: 18,
            fontFamily: "Montserrat-regular",
            marginHorizontal: 5,
            bottom: 15,
          }}
        >
          дахь жилдээ танилцуулж байна. өдгөө уур амьсгалын өөрчлөлтийг
          шийдвэрлэх, эрчим хүчний хэрэглээг бууруулах, хүнсний тогтвортой
          үйлдвэрлэл, хүн төрөлхтний эрүүл мэндийг дээшлүүлэх гэсэн томоохон
          сорилтууд тулгараад байгаа билээ. Тиймээс ДЭЗЧ эдгээр том асуудлыг
          шийдвэрлэхэд түлхэц болохуйц шилдэг 10 технологийг энэ удаа нэрлээд
          буй юм.
        </Text> */}
        <Text style={[styles.textTitle, { marginVertical: 20 }]}>
          {data.p13Tech1Title}
        </Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech1 }}
          style={{ width: windowWidth / 1.1, alignSelf: "center", height: 300 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            marginTop: 15,
          }}
        >
          {data.p13Tech1Text}
        </Text>
        <Text style={styles.textStatus}>{data.p13Tech1Text1}</Text>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={{ uri: api + "/upload/" + data.p13Tech2 }}
            style={{ width: windowWidth / 2.2, height: 400 }}
          />
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.textTitle}>{data.p13Tech2Title}</Text>
            <Text style={styles.textStatus}>{data.p13Tech2Text}</Text>
          </View>
        </View>
        <Text style={styles.textStatus}>{data.p13Tech2Text1}</Text>
        <Text style={[styles.textTitle, { marginBottom: 15 }]}>
          {data.p13Tech3Title}
        </Text>

        <Image
          source={{ uri: api + "/upload/" + data.p13Tech3 }}
          style={{ width: windowWidth / 1.1, alignSelf: "center", height: 200 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech3Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech3Text1}</Text>
        <Text style={styles.textTitle}>{data.p13Tech4Title}</Text>
        <Text style={styles.textStatus}>{data.p13Tech4Text}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech4 }}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech4Text1}</Text>
        <Text style={styles.textTitle}>{data.p13Tech5Title} </Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech5 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech5Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech5Text1}</Text>
        <Text style={styles.textTitle}>{data.p13Tech6Title}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech6 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech6Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech6Text1}</Text>
        <Text style={styles.textTitle}>{data.p13Tech7Title}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech7 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech7Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech7Text1}</Text>
        <Text style={styles.textStatus}>{data.p13Tech7Text2}</Text>
        <Text style={styles.textTitle}>{data.p13Tech8Title} </Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech8 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech8Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech8Text1}</Text>
        <Text style={styles.textStatus}>{data.p13Tech8Text2}</Text>
        <Text style={styles.textTitle}>{data.p13Tech9Title}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech9 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech9Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech9Text1}</Text>
        <Text style={styles.textStatus}>{data.p13Tech9Text2}</Text>
        <Text style={styles.textTitle}>{data.p13Tech10Title}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p13Tech10 }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>{data.p13Tech10Text}</Text>
        <Text style={styles.textStatus}>{data.p13Tech10Text1}</Text>
        <Text style={styles.textStatus}>{data.p13Tech10Text2}</Text>
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

export default Page13;

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
