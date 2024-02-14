import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Label } from "../../UI";
import links from "../../../assets/categories";

export const Categories = ({ onParamsChange }) => {
  const [activeBtn, setActiveBtn] = useState("Italian");

  const categoryHandler = (event) => {
    onParamsChange(event.params);
    setActiveBtn(event.title);
  };

  const filteredCategories = links.map((link) => link.filters).flat();

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Label
            active={activeBtn === item.title}
            onPress={() => {
              categoryHandler(item);
            }}
          >
            {item.title}
          </Label>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 8 }}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginVertical: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
