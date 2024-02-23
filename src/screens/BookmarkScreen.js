import { ScrollView } from "react-native";
import { SavedList } from "../components/features";

const BookmarkScreen = () => {
  return (
    <ScrollView>
      <SavedList horizontal={false} />
    </ScrollView>
  );
};

export default BookmarkScreen;
