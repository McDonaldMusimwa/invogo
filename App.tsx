import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Invoices from "./screens/invoice/Invoices";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InvoiceItem from "./components/ui/InvoiceItem";
import AddInvoice from "./screens/invoice/AddInvoiceScreen";
import Settings from "./screens/settings/settings";
import Clients from "./screens/clients/clients";
import Elements from "./screens/elements/elements";
import MainMenu from "./main";
import NavBar from "./components/ui/navBar";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <View style={styles.container}>
          {/* Stack Navigator */}
          <Stack.Navigator style={styles.stackNavigator}>
            <Stack.Screen component={Invoices} name="Invoices" />
            <Stack.Screen component={InvoiceItem} name="InvoiceItem" />
            <Stack.Screen component={AddInvoice} name="AddInvoice" />
            <Stack.Screen component={Settings} name="Settings" />
            <Stack.Screen component={Elements} name="Elements" />
            <Stack.Screen component={Clients} name="Clients" />
            <Stack.Screen component={MainMenu} name="MainMenu" />
          </Stack.Navigator>

          {/* NavBar at the bottom */}
          <NavBar navigation={NavBar} />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackNavigator: {
    flex: 1,
  },
});
