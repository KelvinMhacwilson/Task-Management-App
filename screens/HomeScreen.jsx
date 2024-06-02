import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Categories from "../components/Categories";
import OngoingTasks from "../components/OngoingTasks";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        className="flex-col space-y-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row ">
          <View className="flex-1">
            <Text className="font-bold text-[32px] text-black">
              Hello, Devs
            </Text>
            <Text className="text-[12px] font-medium text-black">
              15 task today
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/Profile.png")}
          />
        </View>

        <View className="flex-row h-[49px] justify-between space-x-8">
          <View className="flex flex-row bg-[#FBF9F7] rounded-lg flex-1 items-center space-x-3 px-4 ">
            <Feather name="search" size={24} color="black" />
            {/* <Text className="flex-1">Search</Text> */}
            <TextInput placeholder="Search" />
          </View>
          <View>
            <Image
              className="h-[48px] w-[50px]"
              source={require("../assets/Filter.png")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F7F0E8",
    padding: 19,
  },
  image: {
    width: 46,
    height: 45,
    borderRadius: 50,

    borderColor: "black",
  },
});
