import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Page9 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        source={{ uri: api + "/upload/" + data.p9Od1 }}
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
        <View
          style={{
            backgroundColor: "#0066a6",
            marginTop: 70,
            padding: 15,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 16,
              color: "white",
            }}
          >
            {data.p9OdkoTitle}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>38-40 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#0066a6",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ МЕНЕЖЕР
            </Text>
          </View>
        </View>
        {/* Zurraas  */}
        <View
          style={{
            borderWidth: 1,
            marginVertical: 10,
          }}
        />
        {/* Taniltsuulga */}
        <Text
          style={{
            marginTop: 50,
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-medium",
          }}
        >
          {data.p38Work}
        </Text>
        <Text
          style={{
            color: "#0066a6",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          {data.p38Name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
          }}
        >
          {data.p38BigTitle}
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#0066a6",
            borderColor: "#0066a6",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            // marginHorizontal: 20,
            fontFamily: "Montserrat-medium",
            fontSize: 15,
            marginBottom: 30,
          }}
        >
          {data.p38Title}
        </Text>
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 30 }}>
          <Text
            style={{
              flex: 0.5,
              marginRight: 10,
              fontFamily: "Cambria-italic",
              fontSize: 15,
            }}
          >
            {data.p38Text}
          </Text>
          <Text
            style={{
              flex: 0.5,
              marginLeft: 10,
              fontFamily: "Cambria-italic",
              fontSize: 15,
            }}
          >
            {data.p38Text1}
            {/* <Text style={{ fontFamily: "Cambria-bold-italic" }}>
              “Mars-V”, “Цагаан доктор”, “Эртэч Монгол”{" "}
            </Text>
            төслүүд зэрэг 10 гаруй сонгуульт болон сайн дурын үйл ажиллагааны
            удирдлагын багт ажиллаж байна. */}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "Playfair-regular", bottom: 10 }}
          >
            T
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Cambria-bold",
              marginHorizontal: 8,
            }}
          >
            {data.p39Title}
          </Text>
        </View>

        <Text style={styles.textStatus}>{data.p39Text}</Text>

        <Text style={styles.textTitle}>{data.p39Title1}</Text>
        <Text style={styles.textStatus}>{data.p39Text1}</Text>

        <Image
          source={{ uri: api + "/upload/" + data.p9Od2 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#0066a6",
            color: "white",
            paddingVertical: 15,
            marginBottom: 15,
            paddingLeft: 10,
          }}
        >
          {data.p9Od1Text}
        </Text>

        <Text style={styles.textTitle}>{data.p40Title}</Text>
        <Text style={styles.textStatus}>{data.p40Text}</Text>
        <Text style={styles.textStatus}>{data.p40Text1}</Text>

        <Text style={styles.textTitle}>{data.p40Title1}</Text>
        <Text style={styles.textStatus}>{data.p40Text2}</Text>

        <Text style={styles.textTitle}>{data.p40Title2}</Text>
        <Text style={styles.textStatus}>{data.p40Text3}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p9Odko }}
          style={{ width: windowWidth / 1.1, height: 400 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          {data.p9Od2Text}
        </Text>
        <Text style={styles.textTitle}>{data.p40Title3}</Text>
        <Text style={styles.textStatus}>{data.p40Text4}</Text>

        <Text style={styles.textStatus}>{data.p40Text5}</Text>
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

export default Page9;

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
