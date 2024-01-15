import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const InactiveLabel = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.inactiveLabel}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inactiveLabel: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    color: "#EE8B8B",
    fontWeight: "bold",
  },
});

export default InactiveLabel;
