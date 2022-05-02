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
import { api } from "../../../Constants";
const Page3 = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bayarsaihanii zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        resizeMode="cover"
        source={{ uri: api + "/upload/" + data.p3BayFace }}
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
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            backgroundColor: "#fec214",
            // marginBottom: 0,
            flex: 0.35,
            paddingLeft: 20,
            alignSelf: "flex-start",
            paddingBottom: 40,
            top: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 22,
              paddingTop: 20,
            }}
          >
            {data.p3YellowTitle}
          </Text>
          <View style={{ borderWidth: 3, marginVertical: 15, width: 50 }} />
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 16,
              width: windowWidth / 1.7,
            }}
          >
            {data.p3YellowText}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>8-13 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#fec214",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ ЗОЧИН
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
          {data.p3Work}
        </Text>
        <Text
          style={{
            color: "#fec214",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          {data.p3Name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "MinionPro-black",
          }}
        >
          {data.p3BigTitle}
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#fec214",
            borderColor: "#fec214",
            padding: 2,
            width: 80,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            marginVertical: 50,
            color: "grey",
            fontFamily: "Montserrat-medium",
          }}
        >
          {data.p3BigText}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "Playfair-regular", bottom: 10 }}
          >
            З
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-bold",
              marginHorizontal: 6,
            }}
          >
            {data.p3Title}
          </Text>
        </View>

        <Text style={styles.textStatus}>{data.p3Text}</Text>
        <Text style={styles.textStatus}>{data.p3Text1}</Text>
        <Text style={styles.textStatus}>{data.p3Text2}</Text>
        <Text style={styles.textStatus}>{data.p3Text3}</Text>
        <Text style={[styles.textTitle]}>{data.p3Title1}</Text>
        <Text style={styles.textStatus}>{data.p3Text4}</Text>
        <Text style={styles.textStatus}>{data.p3Text5}</Text>
        <Text style={styles.textStatus}>{data.p3Text6}</Text>
        <Text style={styles.textStatus}>{data.p3Text7}</Text>
        <Text style={styles.textStatus}>{data.p3Text8}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p3Bay1 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            backgroundColor: "#fec214",
            textAlign: "center",
            fontFamily: "Montserrat-medium",
            paddingVertical: 10,
          }}
        >
          {data.p3Bay1Text}
        </Text>
        <Text style={styles.textTitle}>{data.p3Title2}</Text>
        <Text style={styles.textStatus}>{data.p3Text9}</Text>
        <Text style={styles.textStatus}>{data.p3Text10}</Text>
        <Text style={styles.textStatus}>{data.p3Text11}</Text>
        <Text style={styles.textStatus}>{data.p3Text12}</Text>
        <Text style={styles.textTitle}>{data.p3Title3}</Text>
        <Text style={styles.textStatus}>{data.p3Text13}</Text>
        <Text style={styles.textStatus}>{data.p3Text14}</Text>
        <Text style={styles.textStatus}>{data.p3Text15}</Text>
        <Text style={styles.textStatus}>{data.p3Text16}</Text>
        <Text style={styles.textStatus}>{data.p3Text17}</Text>
        <Text style={styles.textStatus}>{data.p3Text18}</Text>
        <Text
          style={{
            backgroundColor: "#fec214",
            fontFamily: "Montserrat-bold",
            fontSize: 18,
            padding: 18,
          }}
        >
          {data.p3YellowText1}
        </Text>
        <Text style={styles.textTitle}>{data.p3Title4}</Text>
        <Text style={styles.textStatus}>{data.p3Text19}</Text>
        <Text style={styles.textStatus}>{data.p3Text20}</Text>
        <Text style={styles.textStatus}>{data.p3Text21}</Text>
        <Text style={styles.textStatus}>{data.p3Text22}</Text>
        <Text style={styles.textStatus}>{data.p3Text23}</Text>
        <Text style={styles.textStatus}>{data.p3Text24}</Text>
        <Text style={styles.textStatus}>{data.p3Text25}</Text>
        <Text style={styles.textStatus}>{data.p3Text26}</Text>
        <Text style={styles.textTitle}>{data.p3Title5}</Text>
        <Text style={styles.textStatus}>{data.p3Text27}</Text>
        <Text style={styles.textStatus}>{data.p3Text28}</Text>
        <Text style={styles.textStatus}>{data.p3Text29}</Text>

        <Text style={styles.textTitle}>{data.p3Title6}</Text>
        <Text style={styles.textStatus}>{data.p3Text30}</Text>
        <Text style={styles.textStatus}>{data.p3Text31}</Text>
        <Text style={styles.textStatus}>{data.p3Text32}</Text>
        <Text style={styles.textStatus}>{data.p3Text33}</Text>
        <Text style={styles.textStatus}>{data.p3Text34}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p3Bay2 }}
          style={{ width: windowWidth / 1.1, height: 180 }}
        />
        <Text
          style={{
            backgroundColor: "#fec214",
            textAlign: "center",
            fontFamily: "Montserrat-medium",
            paddingVertical: 10,
          }}
        >
          {data.p3Bay2Text}
        </Text>
        <Text style={styles.textTitle}>{data.p3Title7}</Text>
        <Text style={styles.textStatus}>{data.p3Text36}</Text>
        <Text style={styles.textStatus}>{data.p3Text37}</Text>
        <Text style={styles.textStatus}>{data.p3Text38}</Text>
        <Text style={styles.textStatus}>{data.p3Text39}</Text>
        <Text style={styles.textStatus}>{data.p3Text40}</Text>
        <Text style={styles.textStatus}>{data.p3Text41}</Text>
        <Text style={styles.textStatus}>{data.p3Text42}</Text>
        <Text style={styles.textStatus}>{data.p3Text43}</Text>
        <Text style={styles.textStatus}>{data.p3Text44}</Text>
        <Text style={styles.textTitle}>{data.p3Title8}</Text>
        <Text style={styles.textStatus}>{data.p3Text45}</Text>
        <Text style={styles.textStatus}>{data.p3Text46}</Text>
        <Text style={styles.textStatus}>{data.p3Text47}</Text>
        <Text style={styles.textStatus}>{data.p3Text48}</Text>
        <Text
          style={{
            backgroundColor: "#fec214",
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            fontSize: 18,
            padding: 20,
          }}
        >
          {data.p3YellowTitle1}
        </Text>
        <Text
          style={{
            color: "#fec214",
            fontFamily: "Montserrat-bold",
            fontSize: 30,
          }}
        >
          {data.p3YellowText2}{" "}
          <Text
            style={{
              color: "black",
              fontFamily: "Montserrat-bold",
              fontSize: 16,
            }}
          >
            {data.p3YellowText3}
          </Text>
        </Text>
        <Text style={styles.textTitle}>{data.p3Title9}</Text>
        <Text style={styles.textStatus}>{data.p3Text49}</Text>
        <Text style={styles.textStatus}>{data.p3Text50}</Text>
        <Text style={styles.textStatus}>{data.p3Text51}</Text>
        <Text style={styles.textStatus}>{data.p3Text52}</Text>
        <Text style={styles.textStatus}>{data.p3Text53}</Text>
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

export default Page3;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    marginVertical: 8,

    // marginBottom: 15,
    // textAlign: "justify",
  },
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    // textAlign: "justify",
    marginVertical: 8,
  },
});
