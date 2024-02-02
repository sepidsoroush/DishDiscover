import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ActiveLabel = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.activeLabel}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeLabel: {
    alignSelf: "flex-start",
    backgroundColor: "#E23E3E",
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  text: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
});

export default ActiveLabel;
