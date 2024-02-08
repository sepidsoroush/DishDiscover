import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  InactiveHome,
  InactiveBookmark,
  InactiveProfile,
  ActiveHome,
  ActiveBookmark,
  ActiveProfile,
  SearchIcon,
} from "../components/Icons";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import BookmarkScreen from "./BookmarkScreen";
import HomeScreen from "./HomeScreen";
import ShowScreen from "./ShowScreen";
import FilterScreen from "./FilterScreen";

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
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

function ExploreFlow() {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen name="Explore" component={SearchScreen} />
      <Stack.Screen name="Filters" component={FilterScreen} />
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
              <ActiveBookmark fill="#303030" width="24" height="24" />
            ) : (
              <InactiveBookmark fill="#C1C1C1" width="24" height="24" />
            ),
        }}
      />
      <Tab.Screen
        name="ExploreFlow"
        component={ExploreFlow}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SearchIcon fill="#E23E3E" />
            ) : (
              <SearchIcon fill="#C1C1C1" />
            ),
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
