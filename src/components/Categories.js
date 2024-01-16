import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ActiveLabel from "./StyledComponents/ActiveLabel";
import InactiveLabel from "./StyledComponents/InactiveLabel";

const Categories = ({ onParamsChange }) => {
  const links = [
    { id: 1, title: "Italian", params: { cuisine: "italian" } },
    { id: 2, title: "Salad", params: { type: "salad" } },
    { id: 3, title: "Breakfast", params: { type: "breakfast" } },
    { id: 4, title: "Mexican", params: { cuisine: "mexican" } },
    { id: 5, title: "Ketogenic", params: { diet: "ketogenic" } },
    { id: 6, title: "Vegan", params: { diet: "vegan" } },
    { id: 7, title: "Soup", params: { type: "soup" } },
    { id: 8, title: "Mediterranean", params: { cuisine: "mediterranean" } },
    { id: 9, title: "Gluten", params: { intolerances: "gluten" } },
    { id: 10, title: "Dessert", params: { type: "dessert" } },
  ];

  const [activeBtn, setActiveBtn] = useState("Italian");

  const categoryHandler = (event) => {
    onParamsChange(event.params);
    setActiveBtn(event.title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          activeBtn === item.title ? (
            <ActiveLabel
              onPress={() => {
                categoryHandler(item);
              }}
            >
              {item.title}
            </ActiveLabel>
          ) : (
            <InactiveLabel
              onPress={() => {
                categoryHandler(item);
              }}
            >
              {item.title}
            </InactiveLabel>
          )
        }
        ItemSeparatorComponent={() => <View style={{ width: 8 }}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Categories;
