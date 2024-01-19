import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { StarIcon } from "./Icons";
import Bookmark from "./UI/Bookmark";

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
        <Bookmark resultId={result.id} />
      </View>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {result.title.length > 50
            ? result.title.slice(0, 50) + "..."
            : result.title}
        </Text>
      </View>
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
  image: {
    width: 200,
    height: 160,
    borderRadius: 10,
  },
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
