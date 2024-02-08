import React, { useState } from "react";
import { Alert } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { Spacer, Row } from "../components/UI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
  const { user, signOut } = useAuthContext();
  const [theme, setTheme] = useState("Light");

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
    setTheme((prev) => (prev === "Dark" ? "Light" : "Dark"));
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
          theme === "Light" ? (
            <Icon name="toggle-switch-off-outline" size={24} />
          ) : (
            <Icon name="toggle-switch" size={24} color="#E23E3E" />
          )
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
