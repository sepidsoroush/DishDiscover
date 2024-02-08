import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({ onPress, type, state, children }) => {
  const getButtonStyles = () => {
    switch (type) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "text":
        return styles.textButton;
      default:
        return styles.primaryButton;
    }
  };

  const getButtonStateStyles = () => {
    switch (state) {
      case "pressed":
        return styles.pressedState;
      case "disabled":
        return styles.disabledState;
      default:
        return null;
    }
  };

  const getButtonTextStyles = () => {
    switch (type) {
      case "primary":
        return styles.primaryButtonText;
      case "secondary":
        return styles.secondaryButtonText;
      case "text":
        return styles.textButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getButtonStyles(), getButtonStateStyles()]}
      disabled={state === "disabled"}
    >
      <Text style={[styles.buttonText, getButtonTextStyles()]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "#E23E3E",
  },
  textButtonText: {
    color: "#E23E3E",
  },
  primaryButton: {
    backgroundColor: "#E23E3E",
  },
  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E23E3E",
  },
  textButton: {
    backgroundColor: "transparent",
  },
  pressedState: {
    backgroundColor: "#9E2B2B",
  },
  disabledState: {
    backgroundColor: "#D9D9D9",
    color: "#919191",
  },
});
