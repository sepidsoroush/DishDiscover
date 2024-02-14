import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const CategoryCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.background}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    marginBottom: 15,
    width: "100%",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 30,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    textAlign: "left",
  },
});
