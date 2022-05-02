import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
const windowWidth = Dimensions.get("window").width;
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page1 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
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
        <Text style={{ fontWeight: "bold" }}>4-5 | </Text>
        <Text
          style={{
            color: "grey",
            fontWeight: "200",
            fontFamily: "Montserrat-regular",
          }}
        >
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
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          fontFamily: "Montserrat-black",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        АГУУЛГА
      </Animatable.Text>
      {/* bayka */}
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p1Bayka }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 400,
          justifyContent: "space-between",
          marginVertical: 20,
        }}
        resizeMode="cover"
      >
        <View>
          <Text
            style={{
              backgroundColor: "#ffc20e",
              color: "white",
              fontSize: 20,
              fontFamily: "Montserrat-bold",
              alignSelf: "flex-start",
              padding: 20,
            }}
          >
            {data.baykaSpecial}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 14,
              width: windowWidth / 2.1,
              marginTop: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            {data.baykaWork}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            {data.baykaName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              fontSize: 60,
              flex: 0.2,
              marginTop: 58,
            }}
          >
            {data.baykaNumber}
          </Text>
          <Text
            style={{
              flex: 0.8,
              fontFamily: "Montserrat-bold",
              fontSize: 30,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            {data.baykaText}
          </Text>
        </View>
      </ImageBackground>
      {/*ariunzaya */}
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p1Ariuka }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            {data.ariukaNumber}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              {" "}
              {data.ariukaWork}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              {" "}
              {data.ariukaName}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#55b8ae",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        {data.ariukaSpecial}
      </Text>
      <Text style={styles.textTitle}>{data.ariukaTitle}</Text>
      <Text style={styles.textStatus}>{data.ariukaText}</Text>
      {/* bolorerdene */}
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p1Bolor }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            {data.bolorNumber}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              {" "}
              {data.bolorWork}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              {" "}
              {data.bolorName}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#f15623",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        {data.bolorSpecial}
      </Text>
      <Text style={styles.textTitle}>{data.bolorTitle}</Text>
      <Text style={styles.textStatus}>{data.bolorText}</Text>
      {/* 28 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 10,
        }}
      >
        <Text style={styles.textNumber}>{data.p1Number}</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            {data.p1Title}
          </Text>

          <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
            {data.p1Text}
          </Text>
        </View>
      </View>
      {/* 30 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.p1Number1}</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            {data.p1Title1}
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
            }}
          >
            {data.p1Text1}
          </Text>
        </View>
      </View>
      {/* 32 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.p1Number2}</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            {data.p1Title2}
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
            }}
          >
            {data.p1Text2}
          </Text>
        </View>
      </View>
      {/* 37 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>37.</Text>
        <View style={{ flex: 0.8, flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                backgroundColor: "#0066a6",
                fontFamily: "Montserrat-bold",
                color: "white",
                paddingVertical: 20,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {data.odBaysalSpecial}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 14,
                marginVertical: 15,
              }}
            >
              {data.odBaysalTitle}
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium", fontSize: 12 }}>
              {data.odBaysalText}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 15,
                marginVertical: 15,
              }}
            >
              {data.odBaysalName}
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p1OdBaysal }}
              style={{ width: windowWidth / 3, height: 320 }}
            />
          </View>
        </View>
      </View>
      {/* 42 */}
      <Text
        style={{
          fontFamily: "Montserrat-bold",
          backgroundColor: "#ffc20e",
          textAlign: "center",
          marginHorizontal: 20,
          paddingVertical: 20,
          fontSize: 22,
        }}
      >
        {data.binanceSpecial}
      </Text>
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p1BinanceBg }}
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginBottom: 20,
        }}
      >
        <Text style={styles.textNumber}>42.</Text>
        <View style={{ flex: 0.8, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 16,
              color: "white",
            }}
          >
            {data.binanceTitle}
          </Text>

          <Image
            source={require("../../../assets/faceLogo2.png")}
            style={{ width: 200, height: 110, marginVertical: 40 }}
          />

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            {data.binanceText}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> {data.binanceStatus}{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              {data.binanceStatusBold}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> {data.binanceStatus1}{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              {data.binanceStatus1Bold}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> {data.binanceStatus2}{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              {data.binanceStatus2Bold}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginTop: 10,
              color: "white",
              paddingBottom: 20,
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> {data.binanceStatus3}{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              {data.binanceStatus3Bold}
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <Image
        source={{ uri: api + "/upload/" + data.p1BinanceTeam }}
        style={{
          width: windowWidth / 1.11,
          height: 300,
          alignSelf: "center",
          bottom: 20,
        }}
      />
      {/* 54 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.deNumber}</Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p1Delgermend }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#0066a6",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#0066a6",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                {data.deTitle}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                {data.deWork}
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                {data.deName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#0066a6",
        }}
      >
        {data.deText}
      </Text>
      {/* 58 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.batNumber}</Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              source={{ uri: api + "/upload/" + data.p1Batdavaa }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#0066a6",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#0066a6",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                {data.batTitle}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                {data.batWork}
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                {data.batName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#0066a6",
        }}
      >
        {data.batText}
      </Text>
      {/* 63 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.techNumber}</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            {data.techTitle}
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 16,
              marginVertical: 10,
            }}
          >
            {data.techText}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: api + "/upload/" + data.p1Tech }}
        style={{
          width: windowWidth / 1.35,
          height: 200,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      />
      {/* 63 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.textNumber}>{data.p1Number3}</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            {data.p1Title3}
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 16,
              marginVertical: 10,
            }}
          >
            {data.p1Text3}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page1;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-bold",
    marginHorizontal: 20,
    marginVertical: 10,
    // marginBottom: 15,
  },
  textStatus: {
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "Montserrat-regular",
    // textAlign: "justify",
    marginHorizontal: 20,
  },
  textNumber: {
    fontFamily: "Montserrat-semibold",
    color: "#ffc20e",
    fontSize: 30,
    flex: 0.2,
    marginTop: 20,
  },
});
