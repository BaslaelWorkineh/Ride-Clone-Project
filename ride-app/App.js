import "react-native-gesture-handler"
import { View, Text } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/icon.png";
import ContactUs from "./screens/Images/ContactUs";
import EmergencyContacts from "./screens/Images/EmergencyContacts";
import FeresMiles from "./screens/Images/FeresMiles";
import History from "./screens/Images/History";
import Nofitfication from "./screens/Images/Nofitfication";
import PreOrders from "./screens/Images/PreOrders";
import Referral from "./screens/Images/Referral";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: 250
          },
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

