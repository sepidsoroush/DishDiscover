import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SearchIcon } from "../../Icons";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);

  const backgroundStyle = [
    styles.background,
    isFocused && styles.focusedBackground,
  ];

  return (
    <View style={backgroundStyle}>
      <SearchIcon fill="#C1C1C1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="What do you want to cook?"
        style={styles.input}
        value={term}
        onEndEditing={onTermSubmit}
        onChangeText={(text) => onTermChange(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 12,
    flex: 1,
  },
  focusedBackground: {
    borderColor: "#E23E3E",
  },
  input: {
    color: "#303030",
    fontSize: 16,
  },
  iconStyle: {
    alignSelf: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
});
