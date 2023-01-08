// In App.js in a new project

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import LandingPage from "./src/Screens/LandingPage";
import DetailsScreen from "./src/Screens/DetailsScreen";
import SignIn from "./src/Screens/SignIn";
import Payment from "./src/Screens/Payment";
import SearchScreen from "./src/Screens/SearchScreen";
import { auth } from "./src/Firebase/Firebase";
import { ToastProvider } from "react-native-toast-notifications";

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='LandingPage' component={LandingPage} />
              <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
              <Stack.Screen name='SearchScreen' component={SearchScreen} />
              <Stack.Screen name='Payment' component={Payment} />
            </>
          ) : (
            <Stack.Screen name='SignIn' component={SignIn} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;
