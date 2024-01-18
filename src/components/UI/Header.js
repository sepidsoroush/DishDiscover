import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RightArrow } from "../Icons";

const Header = ({ children, moreLink }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{children}</Text>
      {moreLink && (
        <View style={styles.rightContainer}>
          <Text style={styles.headerSubtitle}>See all</Text>
          <RightArrow style={styles.headerIcon} fill="#E23E3E" />
        </View>
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

export default Header;
