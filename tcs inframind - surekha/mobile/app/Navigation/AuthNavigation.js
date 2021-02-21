import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";

import AppNavigation from "./AppNavigation";

const Tab = createStackNavigator();

const AuthNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="login"
      component={LoginPage}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="signup"
      component={SignUpPage}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="app"
      component={AppNavigation}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default AuthNavigation;
