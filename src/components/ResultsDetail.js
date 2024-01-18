import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  Vegan,
  GlutenFree,
  DairyFree,
  Economic,
  InactiveBookmark,
  StarIcon,
} from "./Icons";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badges}>
        <View style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.rate}>
            {Math.round(result.spoonacularScore / 2) / 10}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Bookmarked!")}
          style={styles.bookmarkContainer}
        >
          <InactiveBookmark fill="#303030" width="16" height="16" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {result.title.length > 50
            ? result.title.slice(0, 50) + "..."
            : result.title}
        </Text>
      </View>
      {/* <View style={styles.iconContainer}>
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
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginTop: 12,
  },
  badges: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
    position: "absolute",
    zIndex: 10,
  },
  ratingContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "rgba(48, 48, 48, 0.5)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rate: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  bookmarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 10,
  },
  // iconContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  // },
  // icon: {
  //   marginHorizontal: 4,
  // },
  // info: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  // },
  titleContainer: {
    width: 200,
  },
  title: {
    fontWeight: 800,
    fontSize: 16,
    marginTop: 6,
  },
});

export default ResultsDetail;
