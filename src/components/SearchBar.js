import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SearchIcon } from "./Icons/GeneralIcons";
import Spacer from "./UI/Spacer";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const [isFocused, setIsFocused] = useState(false);

  const backgroundStyle = [
    styles.background,
    isFocused && styles.focusedBackground,
  ];

  return (
    <Spacer>
      {fontsLoaded && (
        <View style={backgroundStyle}>
          <SearchIcon style={styles.iconStyle} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.input}
            value={term}
            onEndEditing={onTermSubmit}
            onChangeText={(text) => onTermChange(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      )}
    </Spacer>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 12,
  },
  focusedBackground: {
    borderColor: "#E23E3E",
  },
  input: {
    color: "#303030",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },

  iconStyle: {
    alignSelf: "center",
    width: 20,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default SearchBar;
