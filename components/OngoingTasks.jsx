import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const OngoingTasks = () => {
  const ongoingTasks = [
    "Mobile App Development",
    "Web Development",
    "Push Ups",
    "Code Review",
    "Meeting with Client",
    "Debugging",
    "UI Design",
    "Database Optimization",
    "Feature Testing",
    "Documentation",
    "Backend Development",
    "Frontend Optimization",
    "Research",
    "Deployment",
    "User Feedback Analysis",
  ];
  return (
    <View>
      <Text className="text-[20px] font-bold mb-3">Ongoing Tasks</Text>
      <FlatList
        data={ongoingTasks}
        key={(item) => item.id}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              className="bg-[#FBF9F7] font-bold text-[16px] px-5 mb-6 rounded-2xl h-[128px] flex-col justify-center "
            >
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default OngoingTasks;

const styles = StyleSheet.create({});
