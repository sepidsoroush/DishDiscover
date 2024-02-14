import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SearchIcon } from "../../Icons";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const getBorderColor = () => (isFocused ? "#E23E3E" : "#D9D9D9");

  return (
    <View style={[styles.background, { borderColor: getBorderColor() }]}>
      <SearchIcon fill="#C1C1C1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="What do you want to cook?"
        style={styles.input}
        value={term}
        onEndEditing={onTermSubmit}
        onChangeText={(text) => onTermChange(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center", // Use alignItems instead of alignContent
    gap: 12,
    flex: 1,
  },
  input: {
    color: "#303030",
    fontSize: 16,
    flex: 1, // Make input field take up remaining space
  },
  iconStyle: {
    alignSelf: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
});
