import { StyleSheet, View } from "react-native";
import SavedList from "../components/SavedList";

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <SavedList horizontal={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
});

export default BookmarkScreen;
