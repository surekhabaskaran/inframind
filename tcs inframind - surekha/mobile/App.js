import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/Navigation/AuthNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
