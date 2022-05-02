import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { api } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
import useBinances from "../hooks/useBinances";
import useBaykas from "../hooks/useBaykas";
import useAriunzayas from "../hooks/useAriunzayas";
import useBolors from "../hooks/useBolors";
import useBataas from "../hooks/useBataas";
import useDeegiis from "../hooks/useDeegiis";
import useOdkos from "../hooks/useOdkos";
const BestPerson = ({ data }) => {
  const navigation = useNavigation();
  const [binances] = useBinances();
  const [baykas] = useBaykas();
  const [ariunzayas] = useAriunzayas();
  const [bolors] = useBolors();
  const [bataas] = useBataas();
  const [deegiis] = useDeegiis();
  const [odkos] = useOdkos();
  return (
    <View
      style={{
        backgroundColor: "#041C32",
        marginTop: 1,
        paddingVertical: 15,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "white",
          marginLeft: 15,
        }}
      >
        Онцлох зочин
      </Text>

      <Text
        style={{
          fontWeight: "400",
          fontSize: 14,
          color: "white",
          marginLeft: 17,
        }}
      >
        Нийтлэлийг зочноор хайж унших
      </Text>
      <ScrollView horizontal style={{ paddingVertical: 20 }}>
        <View style={{ paddingHorizontal: 5 }}>
          {binances.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Binance", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.photo1 }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  CZ
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {baykas.map((e, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Bayka", { id: e.id })}
                key={index}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.p3BayFace }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {ariunzayas.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Ariuk", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.photo }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 0 }}>
          {bolors.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Bolor", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.photo }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Б.Болор-эрдэнэ
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {bataas.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Davaa", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.p12Ba1 }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {deegiis.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Deegii", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.p11DeBg }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          {odkos.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Odko", { id: e.id })}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.photo }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    paddingTop: 10,
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {e.name1}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default BestPerson;

const styles = StyleSheet.create({});
