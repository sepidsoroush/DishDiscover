import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Row = ({ onPress, leftIcon, rightIcon, title, content, type }) => {
  return (
    <View style={styles.row}>
      <View style={styles.leftContainer}>
        {leftIcon}
        <Text style={type === "warning" ? styles.warning : ""}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
        <Text style={styles.content}>{content}</Text>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    padding: 16,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
  },
  content: {
    color: "#919191",
  },
  warning: {
    color: "#E23E3E",
  },
});

export default Row;
