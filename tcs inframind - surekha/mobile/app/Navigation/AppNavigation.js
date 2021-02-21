import React from "react";

import Profile from "../Profile";
import DataPage from "../DataPage";
import DataEntryPage from '../DataEntryPage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
  <Tab.Navigator initialRouteName="status">
    <Tab.Screen
      name="Status"
      component={DataPage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={20} />
        ),
      }}
    />

    <Tab.Screen
      name="Upload"
      component={DataEntryPage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="text-box-check" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigation;
