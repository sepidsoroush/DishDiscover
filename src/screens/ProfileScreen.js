import React, { useState } from "react";
import { Alert, Switch } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { Spacer, Row } from "../components/UI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
  const { user, signOut } = useAuthContext();
  const [isEnabled, setIsEnabled] = useState(false);

  const signoutHandler = () =>
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: signOut },
    ]);

  const themeToggleHandler = () => {
    setIsEnabled((previousState) => !previousState);
    Alert.alert("Toggle Theme", "This feature will be added soon!", [
      { text: "OK", onPress: () => console.log("Toggle Theme") },
    ]);
  };

  return (
    <Spacer>
      <Row
        onPress={() => console.log("Email")}
        rightIcon={<Icon name="arrow-right" size={20} />}
        title="Email"
        content={user.email}
      />
      <Row
        onPress={themeToggleHandler}
        rightIcon={
          <Switch
            trackColor={{ true: "#E23E3E", false: "#606060" }}
            thumbColor={isEnabled ? "#F9D8D8" : "#f4f3f4"}
            ios_backgroundColor="#606060"
            onValueChange={themeToggleHandler}
            value={isEnabled}
            style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          />
        }
        title="Dark Mode"
      />
      <Row
        onPress={signoutHandler}
        rightIcon={<Icon name="logout" size={20} color="#E23E3E" />}
        title="Sign Out"
        type="warning"
      />
    </Spacer>
  );
};

export default ProfileScreen;
