import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image }} style={styles.image} />
      <Text style={styles.name}>{result.title}</Text>
      <Text style={styles.info}>
        {result.readyInMinutes} Mins, {result.servings} Servings
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "gray",
  },
});

export default ResultsDetail;
