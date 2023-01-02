// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import LandingPage from "./src/Screens/LandingPage";
import DetailsScreen from "./src/Screens/DetailsScreen";
import SignIn from "./src/Screens/SignIn";
import Payment from "./src/Screens/Payment";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='Payment' component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
