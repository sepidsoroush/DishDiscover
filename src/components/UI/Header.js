import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RightArrow } from "../Icons";

export const Header = ({ style, children, moreLink, onPress }) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Text style={styles.headerTitle}>{children}</Text>
      {moreLink && (
        <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
          <Text style={styles.headerSubtitle}>See all</Text>
          <RightArrow style={styles.headerIcon} fill="#E23E3E" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#303030",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerSubtitle: {
    color: "#E23E3E",
    fontSize: 14,
    fontWeight: "600",
  },
  headerIcon: {
    color: "#E23E3E",
    width: 20,
    height: 20,
  },
});
