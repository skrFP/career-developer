import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
const Page10 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "black" }}
      showsVerticalScrollIndicator={false}
    >
      {/* binance nuur */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        source={{ uri: api + "/upload/" + data.p10Bg }}
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
            backgroundColor: "#ffc20e",
            fontFamily: "Montserrat-bold",
            fontSize: 20,
            alignSelf: "flex-start",
            paddingLeft: 15,
            paddingRight: 10,
            paddingVertical: 10,
            top: 100,
          }}
        >
          {data.p10Special}
        </Text>

        <View
          style={{
            alignSelf: "center",
            // marginVertical: 140,
            marginTop: 150,
          }}
        >
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 35,
              backgroundColor: "#ffc20e",
              padding: 5,
            }}
          >
            {data.p42YellowTitle}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 30,
              textAlign: "center",
              marginHorizontal: 20,
            }}
          >
            {data.p42Title} {data.p42Title1}
          </Text>
        </View>
        <Image
          source={{ uri: api + "/upload/" + data.p10Logo }}
          style={{
            alignSelf: "center",
            width: windowWidth / 1.5,
            height: windowHeight / 1.5,
          }}
          resizeMode="contain"
        />
      </ImageBackground>
      {/* binance aguulga */}
      <View
        style={{ marginTop: 50, width: windowWidth / 1.1, alignSelf: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>42-52 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#ffc20e",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ КОМПАНИ
            </Text>
          </View>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "white", marginVertical: 10 }}
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
              color: "#ffc20e",
              flex: 0.1,
            }}
          >
            Д
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              color: "white",
              flex: 0.9,
              // top: 30,
            }}
          >
            {data.p43Text}
          </Text>
        </View>
        {/* <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            color: "white",
          }}
        >
          өнгөлсөн нь дэлхийн криптовалютын хамгийн том биржийн үүсгэн
          байгуулагч, гүйцэтгэх захирал, олноо “CZ” хэмээн алдаршсан Чанпэн Жао
          юм. Түүний цэвэр хөрөнгө 96 тэрбум ам.долларт хүрч дэлхийн хамгийн
          чинээлэг эрхмүүдийн жагсаалтын арваннэгдүгээрт бичигдэж эхэлснийг
          “Bloomberg” зарлажээ.
        </Text> */}
        <Text style={styles.textStatus}>{data.p43Text1}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p10BiCeo }}
          style={{ width: windowWidth / 1.1, height: 300, alignSelf: "center" }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-semibold-italic",
            fontSize: 16,
            color: "#ffc20e",
            textAlign: "center",
          }}
        >
          {data.p10BiCeoText}
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Montserrat-bold",
            fontSize: 15,
            textAlign: "right",
            marginTop: 20,
            marginRight: 20,
          }}
        >
          {data.p10BiCeoName}
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Montserrat-regular",
            fontSize: 15,
            textAlign: "right",
            marginBottom: 20,
            marginRight: 20,
          }}
        >
          {data.p10BiCeoWork}
        </Text>
        <Text style={styles.textStatus}>{data.p43Text2}</Text>
      </View>
      {/* Binance zurag */}
      <ScrollView
        horizontal
        style={{ marginVertical: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={{ uri: api + "/upload/" + data.p10BiTable }}
          style={{ height: windowHeight, width: windowWidth * 3 }}
          resizeMode="contain"
        />
      </ScrollView>
      {/* binance eco system */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontFamily: "Oswald-light",
            fontSize: 30,
            textAlign: "center",
            marginTop: 60,
          }}
        >
          THE{" "}
          <Text style={{ fontFamily: "Oswald-medium", color: "#ffc20e" }}>
            BINANCE
          </Text>{" "}
          ECOSYSTEM
        </Text>
        <View
          style={{
            borderWidth: 3,
            borderColor: "#ffc20e",
            alignSelf: "center",
            width: 100,
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 20,
            fontFamily: "Montserrat-regular",
          }}
        >
          Аливаа бизнесийг хөгжүүлэхэд экосистем чухал үүрэгтэй. Тус компани
          экосистемээ дараах байдлаар хөгжүүлжээ.
        </Text>
        <Image
          source={{ uri: api + "/upload/" + data.p10BiEco }}
          style={{
            width: windowWidth / 1.5,
            height: windowHeight / 3,
            alignSelf: "center",
            marginVertical: 20,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: windowWidth,
          backgroundColor: "#ffc20e",
        }}
      >
        <Text style={styles.surgaltTitle}>{data.p47Title1}</Text>
        <Text style={styles.surgalt}>{data.p47Text1}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title4}</Text>
        <Text style={styles.surgalt}>{data.p47Text4}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title6}</Text>
        <Text style={styles.surgalt}>{data.p47Text6}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title2}</Text>
        <Text style={styles.surgalt}>{data.p47Text2}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title}</Text>
        <Text style={styles.surgalt}>{data.p47Text}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title7}</Text>
        <Text style={styles.surgalt}>{data.p47Text7}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title5}</Text>
        <Text style={styles.surgalt}>{data.p47Text5}</Text>
        <Text style={styles.surgaltTitle}>{data.p47Title3}</Text>
        <Text style={[styles.surgalt, { marginBottom: 20 }]}>
          {data.p47Text3}
        </Text>
      </View>
      {/* Binance graph */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            {data.p48text1}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            {data.p48Money}
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            {data.p48Wallet}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            {data.p48text2}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            {data.p48Money1}
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            {data.p48Wallet1}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            {data.p48text3}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            {data.p48Money2}
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            {data.p48Wallet2}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            {data.p48text4}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            {data.p48Money3}
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            {data.p48Wallet3}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            {data.p48text5}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            {data.p48Money4}
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            {data.p48Wallet4}
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-semibold",
              textAlign: "center",
            }}
          >
            {data.p10BiGraphTitle}
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 28,
              color: "#ffc20e",
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            {data.p10BiGraphTitleYellow}
          </Text>
          <Text
            style={{ textAlign: "right", fontFamily: "Montserrat-regular" }}
          >
            {data.p10BiGraphText}
          </Text>

          <Image
            source={{ uri: api + "/upload/" + data.p10BiGraph }}
            resizeMode="contain"
            style={{
              width: windowWidth,
              height: 600,
              marginVertical: 50,
            }}
          />
        </View>
      </View>
      {/* binance aguulga */}
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.binanceTitle}>{data.p49Title}</Text>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            {data.p49Date}
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            {data.p49Money}
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            {data.p49Date1}
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            {data.p49Money1}
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            {data.p49Date2}
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            {data.p49Money2}
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            {data.p49Date3}
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            {data.p49Money3}
          </Text>
        </View>

        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <Text style={{ fontFamily: "Montserrat-regular", textAlign: "right" }}>
          {data.p49Wallet}{" "}
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 40 }}
        />
        <Text style={styles.binanceTitle}>{data.p49Title2}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text1}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text2}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text3}</Text>
        <Text style={styles.binanceTitle}>{data.p49Title3}</Text>
        <View style={{ flexDirection: "row", flex: 1, paddingVertical: 20 }}>
          <View style={{ flex: 0.5 }}>
            <MaterialCommunityIcons
              name="human-male-female"
              size={100}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontFamily: "Oswald-regular",
                fontSize: 30,
                textAlign: "center",
                color: "#ffc20e",
              }}
            >
              {data.p49WorkStatusNumber}
            </Text>
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-regular" }}
            >
              {data.p49WorkStatus}
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Foundation
              name="map"
              size={100}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontFamily: "Oswald-regular",
                    fontSize: 30,
                    color: "#ffc20e",
                    alignSelf: "center",
                  }}
                >
                  {data.p49OfficeCountryNumber}
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-regular",
                    alignSelf: "center",
                  }}
                >
                  {data.p49OfficeCountry}
                </Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontFamily: "Oswald-regular",
                    fontSize: 30,
                    color: "#ffc20e",
                    alignSelf: "center",
                  }}
                >
                  {data.p49OfficeNumber}
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-regular",
                    alignSelf: "center",
                  }}
                >
                  {data.p49Office}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <MaterialCommunityIcons
          name="human-female-girl"
          size={100}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontFamily: "Oswald-regular",
            fontSize: 30,
            textAlign: "center",
            color: "#ffc20e",
          }}
        >
          {data.p49WorksAgeNumber}
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", textAlign: "center" }}>
          {data.p49WorksAge}{" "}
        </Text>
        <Text style={[styles.binanceTitle, { marginTop: 20 }]}>
          {" "}
          {data.p49Title4}
        </Text>
        <Text style={styles.binanceStatus}>{data.p49Text4}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text5}</Text>
        <Text style={styles.binanceStatus}>{data.p49Text6}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p10BiCompany }}
          style={{
            width: windowWidth / 1.1,
            height: windowHeight / 4,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <Text style={styles.binanceTitle}>{data.p10BiCompanyTitle}</Text>
        <Text style={styles.binanceStatus}>{data.p10BiCompanyText}</Text>
        <Text style={styles.binanceStatus}>{data.p10BiCompanyText1}</Text>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <Image
            source={{ uri: api + "/upload/" + data.p10BiFriends }}
            style={{ width: windowWidth / 2.5, height: 150, marginRight: 3 }}
          />
          <Image
            source={{ uri: api + "/upload/" + data.p10BiTeam }}
            style={{ width: windowWidth / 2, height: 150, marginLeft: 3 }}
          />
        </View>
        <Text style={styles.binanceTitle}>{data.p51Title}</Text>
        <Image
          source={{ uri: api + "/upload/" + data.p10BiGraph1 }}
          style={{
            width: windowWidth,
            height: 350,
            alignSelf: "center",
            marginVertical: 20,
          }}
        />
        <View
          style={{
            alignSelf: "center",
            paddingBottom: 20,
            width: windowWidth,
          }}
        >
          <View style={{ marginRight: 5, alignSelf: "center" }}>
            <Text style={styles.graphText}>
              <Text style={{ color: "#f15623" }}> ♦︎</Text> {data.p51Status}{" "}
              <Text style={styles.graphPercent}>/6.8%/</Text>{" "}
              <Text style={{ color: "#f15623" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#ffc20e" }}> ♦︎</Text> {data.p51Status1}{" "}
              <Text style={styles.graphPercent}>/21.5%/</Text>
              <Text style={{ color: "#ffc20e" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#55b8ae" }}> ♦︎</Text> {data.p51Status2}{" "}
              <Text style={styles.graphPercent}> /2.3%/</Text>
              <Text style={{ color: "#55b8ae" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#0066a6" }}> ♦︎</Text> {data.p51Status3}{" "}
              <Text style={styles.graphPercent}> /40.7%/</Text>
              <Text style={{ color: "#0066a6" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#00aeef" }}> ♦︎</Text> {data.p51Status4}{" "}
              <Text style={styles.graphPercent}>/1.1%/</Text>
              <Text style={{ color: "#00aeef" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#97daf8" }}> ♦︎</Text> {data.p51Status5}{" "}
              <Text style={styles.graphPercent}>/7.3%/</Text>
              <Text style={{ color: "#97daf8" }}> ♦︎</Text>
            </Text>
          </View>
          <View style={{ marginLeft: 5, alignSelf: "center" }}>
            <Text style={styles.graphText}>
              <Text style={{ color: "#7b95cc" }}> ♦︎</Text> {data.p51Status6}{" "}
              <Text style={styles.graphPercent}> /2.9%/</Text>
              <Text style={{ color: "#7b95cc" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#746c9b" }}> ♦︎</Text> {data.p51Status7}{" "}
              <Text style={styles.graphPercent}> /3.9%/</Text>
              <Text style={{ color: "#746c9b" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#784785" }}> ♦︎</Text> {data.p51Status8}{" "}
              <Text style={styles.graphPercent}> /6.1%/</Text>{" "}
              <Text style={{ color: "#784785" }}> ♦︎</Text>
            </Text>

            <Text style={styles.graphText}>
              <Text style={{ color: "#a93b91" }}> ♦︎</Text> {data.p51Status9}{" "}
              <Text style={styles.graphPercent}> /1%/</Text>
              <Text style={{ color: "#a93b91" }}> ♦︎</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#ef58a0" }}> ♦︎</Text> {data.p51Status10}{" "}
              <Text style={styles.graphPercent}> /6.4%/</Text>
              <Text style={{ color: "#ef58a0" }}> ♦︎</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.binanceTitle}>{data.p51ReqTitle}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req1}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req2}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req3}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req4}</Text>
        <Text style={styles.binanceStatus}> {data.p51Req5}</Text>
        <Text style={styles.binanceStatus}>{data.p51Req6}</Text>
        <Text style={styles.binanceStatus}>{data.p51ReqText}</Text>
        <Text style={styles.binanceTitle}>{data.p51SalaryTitle} </Text>
      </View>
      {/* tsalingiin hemjee */}
      {/* 1 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            {data.p51SalaryPosition}{" "}
            <Text style={{ fontFamily: "Montserrat-regular" }}>
              {" "}
              {data.p51Date}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            {data.p51Salary}
          </Text>
        </View>
      </View>
      {/* 2 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            {data.p51SalaryPosition1}
            <Text style={{ fontFamily: "Montserrat-regular" }}>
              {" "}
              {data.p51Date}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            {data.p51Salary1}
          </Text>
        </View>
      </View>
      {/* 3 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            {data.p51SalaryPosition2}
            <Text style={{ fontFamily: "Montserrat-regular" }}>
              {" "}
              {data.p51Date}
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            {data.p51Salary2}
          </Text>
        </View>
      </View>
      {/* binance rating */}
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star-half-empty" size={50} color="#ffc20e" />
          <FontAwesome name="star-o" size={50} color="#ffc20e" />
        </View>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Ажилчдын Binance-ийг үнэлэх үнэлгээ
        </Text>
      </View>
      {/* binance rating 3 */}
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Карьерийн өсөлт
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            2.6
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-half-empty" size={24} color="#ffc20e" />

            <FontAwesome name="star-o" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Ажил, амьдралын тэнцвэр
          </Text>
        </View>
      </View>
      {/* Binance rating 2 */}
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            3.6
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-half-empty" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            УРАМШУУЛАЛ, НӨХӨН ОЛГОВОР ӨГӨХ БАЙДАЛ
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            2.8
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-half-empty" size={24} color="#ffc20e" />

            <FontAwesome name="star-o" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Ажил, амьдралын тэнцвэр
          </Text>
        </View>
      </View>
      {/* Binance rating 1 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 0.33 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-half-empty" size={24} color="#ffc20e" />

            <FontAwesome name="star-o" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            МЕНЕЖМЕНТ
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Text style={styles.binanceStatus}>{data.p52Text}</Text>
        <Text style={styles.binanceStatus}>{data.p52Text1}</Text>
        <Text style={styles.binanceStatus}>{data.p52Text2}</Text>
        <Text style={styles.binanceTitle}>
          Аль хэдийн гэрээсээ ажиллаж хэвшсэн Бинансчууд гэрээр ажиллаж буй
          хүмүүст дараах зөвлөгөөг өгчээ.
        </Text>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Эрүүл мэнддээ анхаараарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Өдөржин ширээний ард сууж ажиллах нь бие болоод сэтгэлзүйн эрүүл
            мэндэд сөрөг нөлөөтэй байдаг тул дасгал хөдөлгөөн, бясалгалыг
            тогтмол хийгээрэй.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Надъяа{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Африк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Хийх ёстой ажлынхаа нарийн дэс дарааллыг гаргаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "#ffffff",
              paddingVertical: 5,
            }}
          >
            (үүнд завсарлага авч амрах цаг ч хамаарна). Тэгээд тэрхүү жагсаалтаа
            сахилга баттайгаар мөрдвөл үр бүтээмж илүү сайжирна.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Майра{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Өмнөд Америк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Өөрийн компьютер болон компанийнхаа мэдээллийг хамгаалаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Хүчтэй нууц үг ашиглаж, компьютерийнхээ хамгаалалтын программыг
            шинэчлээрэй.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Айлир{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Европ/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Өөртөө цаг гаргаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Зөвхөн ажлаа хийхээс гадна шинээр сурах ур чадвар, хийх дуртай
            зүйлсдээ болон инээж хөгжилдөх цагийг заавал гаргаарай. Мөн өдөрт
            нэг удаа гадаа гарч агаар амьсгалаарай.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Жейми{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Өмнөд Америк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Ажилдаа зарцуулсан цагаасаа илүү бүтээмжид анхаарлаа хандуулаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Технологийн дэвшлүүдийг ашиглан хийх ажлаа хөнгөвчилж, бүтээмжээ
            нэмэгдүүлэхэд анхаараарай.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Мартин{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Ази/
            </Text>
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", margin: 30 }}
        >
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
      </View>
    </ScrollView>
  );
};

export default Page10;

const styles = StyleSheet.create({
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    color: "white",
    marginVertical: 15,
  },
  surgalt: {
    fontFamily: "Montserrat-regular",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  surgaltTitle: {
    fontFamily: "Oswald-medium",
    fontSize: 25,
    textAlign: "center",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
  },
  binanceTitle: {
    fontFamily: "Montserrat-bold",
    fontSize: 18,
  },
  binanceStatus: {
    marginVertical: 15,
    fontSize: 16,
    fontFamily: "Montserrat-regular",
  },
  graphText: {
    fontFamily: "Montserrat-regular",
    fontSize: 16,
  },
  graphPercent: {
    fontFamily: "Montserrat-bold",
    fontSize: 16,
  },
});
