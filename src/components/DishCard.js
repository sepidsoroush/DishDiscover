import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { InactiveBookmark } from "./Icons/MenuIcons";
import { ClockIcon } from "./Icons/GeneralIcons";

const DishCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.background}>
        <Text style={styles.title}>{result.title}</Text>
        <View style={styles.info}>
          <View style={styles.timeContainer}>
            <ClockIcon fill="#C1C1C1" />
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
    borderWidth: 12,
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
    fontSize: 14,
    marginVertical: 6,
    marginHorizontal: 12,
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
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "#303030",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
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
