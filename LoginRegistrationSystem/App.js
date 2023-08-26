import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Registration from "./components/Rejistration";
import Login from "./components/Login";

const Stack = createStackNavigator();
console.log(0.1 + 0.2 === 0.3);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007bff", // Customize header background color
          },
          headerTintColor: "#fff", // Customize header text color
          headerTitleStyle: {
            fontWeight: "bold", // Customize header title style
          },
        }}
      >
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Register" }} // Customize header title
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }} // Customize header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
