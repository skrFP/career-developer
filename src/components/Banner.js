import React, { useRef } from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import { api } from "../../Constants";
import Carousel from "react-native-snap-carousel";
const windowWidth = Dimensions.get("window").width;

const Banner = ({ data }) => {
  const carouselRef = useRef(null);
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View>
        <Image
          source={{ uri: api + "/upload/" + item.photo }}
          style={{ width: windowWidth, height: 250 }}
          key={index}
        />
      </View>
    );
  };
  return (
    <Carousel
      layout={"default"}
      ref={carouselRef}
      horizontal
      data={data}
      sliderWidth={windowWidth}
      itemWidth={windowWidth}
      renderItem={renderItem}
      autoplay={true}
      autoplayInterval={5000}
      loop={true}
      autoplayDelay={1000}
    />
  );
};

export default Banner;

const styles = StyleSheet.create({});
