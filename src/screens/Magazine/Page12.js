import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
const Page12 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: api + "/upload/" + data.p12Ba1 }}
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
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
        <View style={{ flex: 5 }} />
        <View
          style={{
            backgroundColor: "white",
            alignSelf: "flex-end",
            marginTop: 140,
            flex: 1.05,
            padding: 10,
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "Oswald-bold",
              color: "#f15623",

              fontSize: 25,
              marginTop: 1,
              textAlign: "right",
            }}
          >
            ӨРХИЙН ОРЛОГО БУУРСНЫГ
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              color: "#f15623",

              fontSize: 25,
              marginTop: 1,
              textAlign: "right",
            }}
          >
            ХАЛАМЖ ОРЛОЖ БАЙНА
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              marginTop: 50,
              paddingRight: 20,
            }}
          >
            {data.p12Ba1Text}
          </Text>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              paddingRight: 20,
            }}
          >
            {data.p12Ba1Text1}{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              paddingRight: 20,
            }}
          >
            {data.p12Ba1Text2}{" "}
          </Text>
        </View>

        <View style={{ alignSelf: "flex-end", flex: 2, marginRight: 20 }}>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              color: "white",
              width: windowWidth / 2.3,
            }}
          >
            {data.p12Ba1Work}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {data.p12Ba1Name}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>58-62 | </Text>
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
            {data.p59Title}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 15,
            fontFamily: "Montserrat-regular",
          }}
        >
          {data.p59Text}
        </Text>
        <Text style={styles.textTitle}>{data.p60Title}</Text>
        <Text style={styles.textStatus}>{data.p60Text}</Text>
        <Text style={styles.textTitle}>{data.p60Title1}</Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            marginTop: 16,
          }}
        >
          {data.p60Text1}
        </Text>
        <Text style={styles.textStatus}>{data.p60Text2}</Text>
        <Text style={styles.textTitle}>{data.p60Title2}</Text>
        <Text style={styles.textStatus}>{data.p60Text3}</Text>
        <Text style={styles.textTitle}>{data.p60Title3}</Text>
        <Text style={styles.textStatus}>{data.p60Text4}</Text>
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 20 }}>
          <View style={{ flex: 0.5, marginRight: 10 }}>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              {data.p12Ba2Status}
            </Text>
            <Text
              style={{
                color: "#f15623",
                fontFamily: "Oswald-bold",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              {data.p12Ba2StatusNumber}
            </Text>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              {data.p12Ba2Status1}
            </Text>
          </View>
          <View style={{ flex: 0.5, marginLeft: 10, justifyContent: "center" }}>
            <Text
              style={{
                color: "#f15623",
                fontFamily: "Oswald-bold",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              {data.p12Ba2StatusNumber1}
            </Text>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              {data.p12Ba2Status2}
            </Text>
          </View>
        </View>
        <Image
          source={{ uri: api + "/upload/" + data.p12Ba2 }}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={[styles.textTitle, { marginTop: 20 }]}>
          {data.p61Title}
        </Text>
        <Text style={styles.textStatus}>{data.p61Text}</Text>
        <Text style={styles.textTitle}>{data.p61Title1}</Text>
        <Text style={styles.textStatus}>{data.p61Text1}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#f15623",
                fontSize: 30,
              }}
            >
              {data.p61GraphNumber}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 20,
                textAlign: "center",
                fontFamily: "Montserrat-light",
              }}
            >
              {data.p61GraphText}
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#f15623",
                fontSize: 30,
              }}
            >
              {data.p61GraphNumber1}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 20,
                textAlign: "center",
                fontFamily: "Montserrat-light",
              }}
            >
              {data.p61GraphText1}
            </Text>
          </View>
        </View>
        <Text style={styles.textTitle}>{data.p61Title2}</Text>
        <Text style={styles.textStatus}>{data.p61Text2}</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ImageBackground
          source={{ uri: api + "/upload/" + data.p12Ba3 }}
          style={{ width: windowWidth / 1.1, height: 300 }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              color: "white",
              textAlign: "right",
              marginTop: 250,
              marginRight: 20,
            }}
          >
            {data.p12Ba3Text}
          </Text>
        </ImageBackground>

        <View style={{ flexDirection: "row", flex: 1, marginTop: 20 }}>
          <View style={{ flex: 0.5, marginRight: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-bold",
                textAlign: "center",
              }}
            >
              Хөдөлмөр эрхлэлтийн түвшин
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat-medium",
                marginTop: 20,
              }}
            >
              Нийт
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Oswald-bold",
                textAlign: "center",
                color: "#f15623",
              }}
            >
              56.4%
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="human-male"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эрэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#ffc20e",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  61.9%
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="human-female"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эмэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#00aeef",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  48.3%
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.5, marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-bold",
                textAlign: "center",
              }}
            >
              Ажилгүйдлийн түвшин
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat-medium",
                marginTop: 20,
              }}
            >
              Нийт
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Oswald-bold",
                textAlign: "center",
                color: "#f15623",
              }}
            >
              8.4%
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="human-male"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эрэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#ffc20e",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  8.2%
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="human-female"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эмэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#00aeef",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  8.6%
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text
              style={{ fontFamily: "Montserrat-bold", fontSize: 16, flex: 0.6 }}
            >
              Итгэл алдарсан ажил хайгчид*
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-regular",
                fontSize: 16,
                flex: 0.4,
              }}
            >
              /2021.II улирал/
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 30,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Нийт
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 50,
              textAlign: "center",
            }}
          >
            18,345
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <MaterialCommunityIcons name="human-male" size={80} color="black" />

            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Эрэгтэй{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Oswald-bold",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#ffc20e",
                }}
              >
                7,924
              </Text>
            </View>
            <MaterialCommunityIcons
              name="human-female"
              size={80}
              color="black"
            />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Эрэгтэй{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Oswald-bold",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#00aeef",
                }}
              >
                10,121
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              textAlign: "center",
            }}
          >
            Ажил хийх боломжтой ч хөдөлмөрийн зах зээлтэй холбоотой ажил
            хайгаагүй байгаа, ажлын байр хайж олох найдвараа алдсан хөдөлмөрийн
            насны хүн ам.
          </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, marginTop: 20 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.staticText}>Хөдөлмөрийн насны хүн</Text>
            <Text style={styles.staticInfo}>2.1сая</Text>
            <Text style={styles.staticText}>Бүрэн бус хөдөлмөр эрхлэлт </Text>
            <Text style={styles.staticInfo}>5.1мян</Text>
            <Text style={styles.staticText}>Ажиллах хүчнээс гадуурх хүн </Text>
            <Text style={styles.staticInfo}>877.5мян</Text>
          </View>
          <View style={{ flex: 0.5, marginTop: 30 }}>
            <Text style={styles.staticText}>Ажиллах хүч</Text>
            <Text style={styles.staticInfo}>1.3сая</Text>
            <Text style={styles.staticText}>Ажилгүй хүн </Text>
            <Text style={styles.staticInfo}>87.6мян</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 0.4 }}>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 14,
              }}
            >
              Ажилгүйдлийн түвшин /нас, хүйсээр/
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium", marginTop: 10 }}>
              Насны
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium" }}>ангилал</Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 16,
                marginVertical: 10,
              }}
            >
              15-19 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              20-24 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              25-29 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              30-34 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              35-39 нас
            </Text>
          </View>
          <View style={{ flex: 0.3 }}>
            <MaterialCommunityIcons
              name="human-female"
              size={80}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-medium" }}
            >
              Эмэгтэй
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              26.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              21.2%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              14.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              9.6%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              3.8%
            </Text>
          </View>
          <View style={{ flex: 0.3 }}>
            <MaterialCommunityIcons
              name="human-male"
              size={80}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-medium" }}
            >
              Эрэгтэй
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              14.5%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              14.5%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              10.6%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              6.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              6.8%
            </Text>
          </View>
        </View>
        <ScrollView horizontal>
          <Image
            source={{ uri: api + "/upload/" + data.p12BaTable }}
            style={{ width: windowWidth * 3.5, height: 450 }}
          />
        </ScrollView>
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

export default Page12;

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
  staticText: {
    fontFamily: "Montserrat-medium",
    marginRight: 10,
    textAlign: "center",
  },
  staticInfo: {
    color: "#f15623",
    fontFamily: "Oswald-bold",
    textAlign: "center",
    fontSize: 25,
  },
});
