import React, { useState, useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";
import useBanner from "../hooks/useBanner";
import useWorks from "../hooks/useWorks";
import Banner from "../components/Banner";
import Magazines from "../components/Magazines";
import HomeHeader from "../components/HomeHeader";
import HighCategory from "../components/HighCategory";
import BestPerson from "../components/BestPerson";
import AnotherHiglight from "../components/AnotherHiglight";
import Works from "../components/Works";
import Footer from "../components/Footer";
import useMagazines from "../hooks/useMagazines";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [banner, bannerError] = useBanner();
  const [magazines] = useMagazines();
  const [works] = useWorks();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <HomeHeader />
      <ScrollView
        style={{ backgroundColor: "#ADD8E6" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <Banner data={banner} />
        <Magazines data={magazines} />
        <HighCategory />
        <AnotherHiglight />
        <BestPerson />
        <Works data={works} />
        <Footer />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
