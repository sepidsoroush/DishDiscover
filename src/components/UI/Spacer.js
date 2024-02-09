import React from "react";
import { View, StyleSheet } from "react-native";

export const Spacer = ({ children, style }) => {
  return <View style={[styles.spacer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 8,
    marginHorizontal: 20,
  },
});
