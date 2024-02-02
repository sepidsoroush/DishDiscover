import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Label = ({ children, onPress, active }) => {
  const containerStyle = active ? styles.activeLabel : styles.inactiveLabel;
  const textColor = active ? "white" : "#EE8B8B";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.labelContainer, containerStyle]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  activeLabel: {
    backgroundColor: "#E23E3E",
  },
  inactiveLabel: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Label;
