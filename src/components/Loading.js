import React, { createRef, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Loading = ({ showText = true }) => {
  let animation = createRef();
  let animation1 = createRef();
  useEffect(() => {
    animation.current.play();
    animation1.current.play();
  }, []);
  return (
    <View
      style={{
        flex: 2,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#041C32",
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <LottieView
        source={require("../../assets/96939-files.json")}
        ref={animation}
        loop={true}
        style={{ height: 400, alignSelf: "center", marginTop: 20 }}
      />
      <LottieView
        source={require("../../assets/good.json")}
        ref={animation1}
        loop={true}
        style={{ height: 250, alignSelf: "center" }}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
