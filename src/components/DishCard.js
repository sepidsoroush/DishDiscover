import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { InactiveBookmark } from "./Icons/MenuIcons";

const DishCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.background}>
        <Text style={styles.title}>{result.title}</Text>
        <View style={styles.info}>
          <View>
            <Text style={styles.timeTitle}>Time</Text>
            <Text style={styles.time}>10 Mins</Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log("Bookmarked!")}
            style={styles.iconContainer}
          >
            <InactiveBookmark fill="#303030" width="16" height="16" />
          </TouchableOpacity>
        </View>
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
    width: 110,
    height: 110,
    borderRadius: 9999,
    position: "relative",
    left: 20,
    zIndex: 2,
    borderWidth: 15,
    borderColor: "#D1D1D1",
    marginBottom: 10,
  },
  background: {
    width: 150,
    height: 176,
    borderRadius: 12,
    backgroundColor: "#F1F1F1",
    top: -55,
    paddingTop: 55,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flexShrink: 1,
    fontWeight: "semibold",
    fontSize: 16,
    marginVertical: 6,
    textAlign: "center",
  },
  info: {
    width: "100%",
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  timeTitle: {
    color: "#C1C1C1",
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 4,
  },
  time: {
    color: "#303030",
    fontSize: 12,
    fontWeight: "bold",
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DishCard;
