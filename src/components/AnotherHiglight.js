import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useBolors from "../hooks/useBolors";
import { api } from "../../Constants";
import useTops from "../hooks/useTops";
import useTechnos from "../hooks/useTechnos";
import useCoins from "../hooks/useCoins";
const windowWidth = Dimensions.get("window").width;
const AnotherHiglight = () => {
  const navigation = useNavigation();
  const [bolors] = useBolors();
  const [tops] = useTops();
  const [technos] = useTechnos();
  const [coins] = useCoins();
  return (
    <>
      <View style={{ backgroundColor: "#041C32" }}>
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            paddingTop: 20,
          }}
        >
          Булангууд
        </Text>
        <View style={styles.container}>
          <View style={styles.viewer}>
            {bolors.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Bolor", { id: e.id })}
                >
                  <Image
                    source={{ uri: api + "/upload/" + e.photo }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>МАНЛАЙЛАЛ</Text>
                  <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                    ЦХХХЯ-ын ТНБДарга {e.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.viewer}>
            {tops.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Ceos", { id: e.id })}
                >
                  <Image
                    source={{ uri: api + "/upload/" + e.photo }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                    {e.p30Title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ padding: 10, left: 1 }}>
            {technos.map((e, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Toptech", { id: e.id, index })
                  }
                  key={index}
                >
                  <Image
                    source={{ uri: api + "/upload/" + e.photo }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={styles.title}>{e.content}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={[styles.viewer, { left: 10 }]}>
            {coins.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Topcoin", { id: e.id })}
                >
                  <Image
                    source={{ uri: api + "/upload/" + e.photo }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                    {e.content}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

export default AnotherHiglight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#041C32",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 15,
  },
  image: {
    width: 150,
    height: 230,
    borderRadius: 10,
  },
  viewer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
  },
  title: {
    fontSize: 10,
    color: "grey",
    fontWeight: "400",
  },
});
