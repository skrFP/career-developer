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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../Constants";
import useBolor from "../hooks/useBolor.js";
const Bolor = (props) => {
  const navigation = useNavigation();
  const { id } = props.route.params;
  const [bolor, error] = useBolor(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!bolor) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bolorerdene zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        source={{ uri: api + "/upload/" + bolor.p5BoFace }}
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
            backgroundColor: "#f15623",
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
            {bolor.p5BoFaceText}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>24-27 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#f15623",
                fontSize: 10,
              }}
            >
              МАНЛАЙЛАГЧ
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
          {bolor.p24Work}
        </Text>
        <Text
          style={{
            color: "#f15623",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          {bolor.p24Name}
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
          {bolor.p24BigTitle}
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#f15623",
            borderColor: "#f15623",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
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
            Б
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Montserrat-bold",
              marginHorizontal: 5,
            }}
          >
            {bolor.p24Title}
          </Text>
        </View>

        <Text style={styles.textStatus}>{bolor.p24Text}</Text>

        <Text style={styles.textTitle}>{bolor.p24Title1}</Text>
        <Text style={styles.textStatus}>{bolor.p24Text1}</Text>
        <Text style={styles.textTitle}>{bolor.p24Title2}</Text>
        <Text style={styles.textStatus}>{bolor.p24Text2}</Text>
        <Text style={styles.textTitle}>{bolor.p24Title3}</Text>
        <Text style={styles.textStatus}>{bolor.p24Text3}</Text>
        <Image
          source={{ uri: api + "/upload/" + bolor.p5Bo1 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#f15623",
            color: "white",
            paddingVertical: 15,
          }}
        >
          {bolor.p5Bo1Text}
        </Text>

        <Text style={styles.textTitle}>{bolor.p25Title}</Text>
        <Text style={styles.textStatus}>{bolor.p25Text}</Text>

        <Text style={styles.textTitle}>{bolor.p25Title1}</Text>
        <Text style={styles.textStatus}>{bolor.p25Text1}</Text>

        <Image
          source={{ uri: api + "/upload/" + bolor.p5Bo2 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-bold",
            backgroundColor: "#f15623",
            paddingVertical: 15,
            fontSize: 16,
            color: "white",
          }}
        >
          {bolor.p5Bo2Text}
        </Text>

        <Text style={styles.textTitle}>{bolor.p26Title}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text}</Text>

        <Text style={styles.textTitle}>{bolor.p26Title1}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text1}</Text>
        <Text style={styles.textTitle}>{bolor.p26Title2}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text2}</Text>
        <Text style={styles.textTitle}>{bolor.p26Title3}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text3}</Text>
        <Text style={styles.textTitle}>{bolor.p26Title4}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text4}</Text>
        <Image
          source={{ uri: api + "/upload/" + bolor.p5Bo3 }}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={styles.textTitle}>{bolor.p26Title5}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text5}</Text>
        <Text style={styles.textTitle}>{bolor.p26Title6}</Text>
        <Text style={styles.textStatus}>{bolor.p26Text6}</Text>
        <Text style={styles.textTitle}>{bolor.p27Title}</Text>
        <Text style={styles.textStatus}>{bolor.p27Text}</Text>

        <Text style={styles.textTitle}>{bolor.p27Title1}</Text>
        <Text style={styles.textStatus}>{bolor.p27Text1}</Text>
        <Text style={styles.textTitle}>{bolor.p27Title2}</Text>
        <Text style={styles.textStatus}>{bolor.p27Text2}</Text>
        <Image
          source={{ uri: api + "/upload/" + bolor.p5Bo4 }}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#f15623",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          {bolor.p5Bo4Text}
        </Text>
        <Text style={styles.textTitle}>{bolor.p27Title3}</Text>
        <Text style={styles.textStatus}>{bolor.p27Text3}</Text>
        <Text style={styles.textTitle}>{bolor.p27Title4}</Text>
        <Text style={styles.textStatus}>{bolor.p27Text4}</Text>
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
          source={require("../../assets/icon.png")}
          style={{
            width: 14,
            height: 14,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Bolor;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15,
    marginVertical: 8,
  },
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    marginVertical: 8,
  },
});
