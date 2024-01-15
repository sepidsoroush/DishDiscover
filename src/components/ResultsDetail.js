import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Vegan, GlutenFree, DairyFree, Economic } from "./Icons/FoodIcons";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{result.title}</Text>
      </View>
      <View style={styles.iconContainer}>
        {(result.vegetarian || result.vegan) && (
          <View style={styles.icon}>
            <Vegan />
          </View>
        )}
        {result.glutenFree && (
          <View style={styles.icon}>
            <GlutenFree />
          </View>
        )}
        {result.dairyFree && (
          <View style={styles.icon}>
            <DairyFree />
          </View>
        )}
        {result.cheap && (
          <View style={styles.icon}>
            <Economic />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginVertical: 12,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 10,
  },
  titleContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: 200,
    height: "auto",
    flexDirection: "row",
  },
  title: {
    flexShrink: 1,
    fontWeight: 700,
    fontSize: 16,
    marginVertical: 6,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 4,
  },
});

export default ResultsDetail;
