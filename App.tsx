import { StatusBar } from "expo-status-bar";

import Invoices from "./screens/invoice/Invoices";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InvoiceItem from "./components/ui/InvoiceItem";
import AddInvoice from "./screens/invoice/AddInvoiceScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Invoices} name="Invoices" />
          <Stack.Screen component={InvoiceItem} name="InvoiceItem" />
          <Stack.Screen component={AddInvoice} name="AddInvoice" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

