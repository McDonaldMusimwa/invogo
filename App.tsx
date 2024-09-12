import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Invoices from "./screens/invoice/Invoices";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InvoiceItem from "./components/ui/InvoiceItem";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Invoices} name="Invoices" />
          <Stack.Screen component={InvoiceItem} name="InvoiceItem" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
