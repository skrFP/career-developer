import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { api } from "../../Constants";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const Works = () => {
  const [works, setWorks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(`${api}/api/v1/works?select=createdAt&sort=-createdAt&limit=1`)
      .then((result) => {
        setWorks(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView style={{ ...styles.container, marginVertical: 1 }}>
      <Text style={styles.headerText}> Нээлттэй ажлын байр </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("WorkDetail")}
        style={styles.container}
      >
        <Image style={styles.image} source={require("../../assets/work.png")} />

        {works.map((e) => {
          return (
            <View key={e.id}>
              <Text
                style={{
                  color: "grey",
                  fontWeight: "400",
                  fontSize: 14,
                  paddingTop: 10,
                  paddingLeft: 20,
                }}
              >
                {e.createdAt.slice(0, 10)} өдрийн байдлаар
              </Text>
            </View>
          );
        })}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Works;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#041C32",
    paddingBottom: 30,
  },
  mainText: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
  },
  headerText: {
    backgroundColor: "#041C32",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 11,
  },
});
