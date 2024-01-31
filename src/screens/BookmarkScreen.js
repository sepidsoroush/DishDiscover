import { View } from "react-native";
import SavedList from "../components/SavedList";

const BookmarkScreen = () => {
  return (
    <View>
      <SavedList horizontal={false} />
    </View>
  );
};

export default BookmarkScreen;
