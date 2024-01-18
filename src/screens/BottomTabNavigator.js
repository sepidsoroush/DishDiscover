import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  InactiveHome,
  InactiveBookmark,
  InactiveNotification,
  InactiveProfile,
  ActiveHome,
  ActiveBookmark,
  ActiveNotification,
  ActiveProfile,
} from "../components/Icons";
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from "./NotificationScreen";
import BookmarkScreen from "./BookmarkScreen";
import HomeScreen from "./HomeScreen";
import ShowScreen from "./ShowScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainFlow() {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainFlow"
        component={MainFlow}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHome /> : <InactiveHome />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveBookmark />
            ) : (
              <InactiveBookmark fill="#C1C1C1" width="24" height="24" />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveNotification /> : <InactiveNotification />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveProfile /> : <InactiveProfile />,
        }}
      />
    </Tab.Navigator>
  );
}
