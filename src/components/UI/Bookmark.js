import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ActiveBookmark, InactiveBookmark } from "../Icons";
import { useDatabaseContext } from "../../context/DatabaseContext";

export const Bookmark = ({ resultId }) => {
  const { bookmarkedIds, toggleBookmark } = useDatabaseContext();

  const itemId = resultId.toString();
  const isBookmarked = bookmarkedIds.includes(itemId);

  return (
    <TouchableOpacity
      onPress={() => toggleBookmark(itemId)}
      style={styles.bookmarkContainer}
    >
      {isBookmarked ? (
        <ActiveBookmark width="16" height="16" />
      ) : (
        <InactiveBookmark fill="#303030" width="16" height="16" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookmarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
