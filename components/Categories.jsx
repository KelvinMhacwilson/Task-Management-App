import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Categories = ({}) => {
  const categories = [
    {
      categoryTitle: "Exercise",
      numberOfTasks: 10,
      image: require("../assets/Exercise.png"),
    },
    {
      categoryTitle: "Study",
      numberOfTasks: 10,
      image: require("../assets/Study.png"),
    },
    {
      categoryTitle: "Health",
      numberOfTasks: 10,
      image: require("../assets/Health.jpg"),
    },
    {
      categoryTitle: "Work",
      numberOfTasks: 10,
      image: require("../assets/Work.jpg"),
    },
    {
      categoryTitle: "Cooking",
      numberOfTasks: 10,
      image: require("../assets/Cooking.jpg"),
    },
    {
      categoryTitle: "Social",
      numberOfTasks: 10,
      image: require("../assets/Social.jpg"),
    },
    {
      categoryTitle: "Hobbies",
      numberOfTasks: 10,
      image: require("../assets/Hobbies.jpg"),
    },
    {
      categoryTitle: "Reading",
      numberOfTasks: 10,
      image: require("../assets/Reading.jpg"),
    },
    {
      categoryTitle: "Travel",
      numberOfTasks: 10,
      image: require("../assets/Travel.jpg"),
    },
    {
      categoryTitle: "Chores",
      numberOfTasks: 10,
      image: require("../assets/Chores.jpg"),
    },
  ];
  return (
    <View>
      <Text className="text-[20px] font-bold mb-3">Categories</Text>
      <FlatList
        horizontal
        key={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              className="mr-6 rounded-2xl w-[202px] justify-center pb-5 pt-3 px-5 bg-[#FBF9F7]"
            >
              <View className="gap-0.5">
                <Text className="text-[16px]">{item.categoryTitle}</Text>
                <Text className="text-[12px]">{item.numberOfTasks} Tasks</Text>
              </View>
              <Image
                className="w-[151px] h-[132px] object-contain mix-blend-multiply rounded-lg mt-1 "
                source={item.image}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
