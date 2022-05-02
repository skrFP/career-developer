import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
import useAriunzayas from "../hooks/useAriunzayas";
import { api } from "../../Constants";
import useBinances from "../hooks/useBinances";
import useOdkos from "../hooks/useOdkos";

const HighCategory = ({ data }) => {
  const navigation = useNavigation();
  const [ariunzayas] = useAriunzayas();
  const [binances] = useBinances();

  const [odkos] = useOdkos();
  return (
    <>
      <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          {/* {data.name}
           */}
          Онцлох зочин
        </Text>
        {ariunzayas.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Ariuk", { id: e.id })}
            >
              <Image
                style={{
                  width: windowWidth - 40,
                  height: 200,
                  alignSelf: "center",
                  borderRadius: 20,
                  marginVertical: 10,
                }}
                source={{ uri: api + "/upload/" + e.photo }}
              />
              <View style={{ marginLeft: 20, paddingVertical: 10 }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    textTransform: "uppercase",
                  }}
                >
                  {e.name}
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: 14,
                    paddingTop: 5,
                  }}
                >
                  {e.content}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          Онцлох компани
        </Text>
        {binances.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Binance", { id: e.id })}
            >
              <Image
                style={{
                  width: windowWidth - 40,
                  height: 200,
                  alignSelf: "center",
                  borderRadius: 20,
                  marginVertical: 10,
                }}
                source={{ uri: api + "/upload/" + e.photo }}
              />
              <View style={{ marginLeft: 20, paddingVertical: 10 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  {e.name}
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: 14,
                    paddingTop: 5,
                  }}
                >
                  {e.content}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          Онцлох менежер
        </Text>
        {odkos.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Odko", { id: e.id })}
            >
              <Image
                style={{
                  width: windowWidth - 40,
                  height: 200,
                  alignSelf: "center",
                  borderRadius: 20,
                  marginVertical: 10,
                }}
                source={{ uri: api + "/upload/" + e.photo }}
              />
              <View style={{ marginLeft: 20, paddingVertical: 10 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  {e.name}
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: 14,
                    paddingTop: 5,
                  }}
                >
                  {e.content}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default HighCategory;

const styles = StyleSheet.create({});
