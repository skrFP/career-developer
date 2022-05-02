import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import useWorks from "../hooks/useWorks";
import CustomHeader from "../components/CustomHeader";
import { api } from "../../Constants";
import Footer from "../components/Footer";

const WorkDetail = () => {
  const [works] = useWorks();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#041C32" }}>
      <CustomHeader />
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "white",
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          marginLeft: 20,
          marginVertical: 10,
        }}
      >
        Нээлттэй ажлын байр
      </Text>
      {works.map((e, index) => {
        return (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                flex: 1,
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  justifyContent: "center",
                  alignContent: "center",
                  left: 10,
                  flex: 1,
                  marginTop: 10,
                }}
              >
                <Image
                  source={{ uri: api + "/upload/" + e.photo }}
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: "stretch",
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{ marginTop: 10, flex: 1, right: 65 }}>
                <Text style={styles.companyInfo}>Компани: {e.name}</Text>
                <Text style={styles.companyInfo}>Утас: {e.phoneNumber}</Text>
                <Text style={styles.companyInfo}>И-мэйл: {e.email}</Text>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 10,
                flexDirection: "column",
                flex: 1,
              }}
            >
              {e.work1 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work1} </Text>
              )}
              {e.work2 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work2} </Text>
              )}
              {e.work3 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work3} </Text>
              )}
              {e.work4 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work4} </Text>
              )}
              {e.work5 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work5} </Text>
              )}
              {e.work6 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work6} </Text>
              )}
              {e.work7 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work7} </Text>
              )}
              {e.work8 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work8} </Text>
              )}
              {e.work9 === "0" ? null : (
                <Text style={styles.workName}> •︎ {e.work9} </Text>
              )}
            </View>

            <View
              style={{
                borderWidth: 0.5,
                borderColor: "white",
                marginTop: 10,
              }}
            />
          </View>
        );
      })}
      <Footer />
    </ScrollView>
  );
};

export default WorkDetail;

const styles = StyleSheet.create({
  workName: {
    color: "white",
    fontSize: 14,
    paddingLeft: 18,
  },

  companyInfo: {
    color: "white",
    fontSize: 15,
    paddingVertical: 2,
  },
  infoContainer: {
    flexDirection: "row",
  },
});
