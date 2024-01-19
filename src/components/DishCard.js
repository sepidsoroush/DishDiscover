import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ClockIcon } from "./Icons";
import Bookmark from "./UI/Bookmark";

const DishCard = ({ result }) => {
  return (
    <>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.background}>
        <Text style={styles.title}>{result.title}</Text>
        <View style={styles.info}>
          <View style={styles.timeContainer}>
            <ClockIcon fill="#C1C1C1" />
            <Text style={styles.time}>10 Mins</Text>
          </View>
          <Bookmark resultId={result.id} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default DishCard;
