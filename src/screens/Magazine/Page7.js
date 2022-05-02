import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
const Page7 = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "#000000" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", color: "white" }}>30-31 | </Text>
        <Text
          style={{
            color: "grey",
            fontFamily: "Montserrat-regular",
            color: "white",
          }}
        >
          CAREER DEVELOPER
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "white",
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />
      <AntDesign
        name="arrowleft"
        size={30}
        color="white"
        style={{
          position: "absolute",
          top: 85,
          left: 20,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View style={{ marginTop: 29 }}>
        <Fontisto
          name="quote-a-right"
          size={32}
          color="#ffc20e"
          style={{ marginLeft: 20 }}
        />
        <Text
          style={{
            fontFamily: "Oswald-bold",
            color: "white",
            textAlign: "center",
            fontSize: 80,
          }}
        >
          {data.p30Top}
        </Text>
        <View
          style={{
            borderWidth: 3,
            alignSelf: "center",
            borderColor: "#00aeef",
            width: 100,
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            fontFamily: "Playfair-bold",
            color: "white",
            textAlign: "center",
            fontSize: 30,
            marginHorizontal: 20,
          }}
        >
          {data.p30Title}
        </Text>
        <Fontisto
          name="quote-a-left"
          size={32}
          color="#ffc20e"
          style={{ alignSelf: "flex-end", marginRight: 20 }}
        />
      </View>
      {/* 10 захиралууд */}
      {/* 1 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo1 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo1Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo1Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo1Work}</Text>
      </View>
      {/* 2 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo2 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo2Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo2Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo2Work}</Text>
      </View>
      {/* 3 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo3 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo3Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo3Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo3Work}</Text>
      </View>
      {/* 4 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo4 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo4Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo4Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo4Work}</Text>
      </View>
      {/* 5 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo5 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo5Name}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo5Work}</Text>
        <Text style={styles.workName}>{data.p7Ceo5Text}</Text>
      </View>
      {/* 6 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo6 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo6Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo6Work}</Text>
        <Text style={styles.workName}>{data.p7Ceo6Name}</Text>
      </View>
      {/* 7 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo7 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo7Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo7Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo7Work}</Text>
      </View>
      {/* 8 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo8 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo8Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo8Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo8Work}</Text>
      </View>
      {/* 9 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo9 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo9Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo9Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo9Work}</Text>
      </View>
      {/* 10 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={{ uri: api + "/upload/" + data.p7Ceo10 }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>{data.p7Ceo10Text}</Text>
        </View>
        <Text style={styles.ceoName}>{data.p7Ceo10Name}</Text>
        <Text style={styles.workName}>{data.p7Ceo10Work}</Text>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-end", margin: 30 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Montserrat-bold",
            color: "white",
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

export default Page7;

const styles = StyleSheet.create({
  textStatus: {
    color: "white",
    fontFamily: "Montserrat-regular",
    marginRight: 150,
    marginLeft: 10,
    fontSize: 14,
  },
  ceoName: {
    color: "#00aeef",
    fontFamily: "Montserrat-regular",
    fontSize: 18,
    marginVertical: 10,
  },
  workName: {
    color: "#fff",
    fontFamily: "Montserrat-bold",
  },
});
