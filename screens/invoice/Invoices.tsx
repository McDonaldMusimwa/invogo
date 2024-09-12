import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Paid from "./Paid";
import AllInvoices from "./AllInvoices";
import Unpaid from "./Unpaid";
import ClearButton from "../../components/ui/ClearButton";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";
import invoicesData from "../../const/Data";
import Invoice from "../../components/ui/Invoice";
import IInvoiceItem from "../../types/IInvoice";
import colors from "../../const/Colors";
import invoices from "../../const/Data";
function Invoices() {
  const [navigate, setNavigate] = useState("all");
  let [allinvoices, setAllInvoices] = useState(invoices);

  const [filteredInvoices,setFilteredInvoices]= useState(allinvoices)
  let screen;
  const navigateHandlers = {
    navigateToUnpaid: () => {
      const invoices = allinvoices.filter((invoice) => invoice.status === "unpaid");
      setFilteredInvoices(invoices)
      setNavigate("unpaid");
    },
    navigateToPaid: () => {
      const invoices = allinvoices.filter((invoice) => invoice.status === "paid");
      setFilteredInvoices(invoices);
      setNavigate("paid");
    },
    navigateToAll: () => {
      setFilteredInvoices(allinvoices)
      setNavigate("all");
    },
  };
  //console.log(invoices);
  switch (navigate) {
    case "paid":
      screen = <Paid invoices={filteredInvoices} />;
      break;
    case "unpaid":
      screen = <Unpaid invoices={filteredInvoices} />;
      break;
    default:
      screen = <AllInvoices invoices={filteredInvoices} />;
      break;
  }


console.log({filteredInvoices,navigate})
const renderItem = ({ item }: { item: IInvoiceItem }) => {
  const initialValue = 0;
  const subTotal = item.elements.reduce(
    (total: number, inv) => total + inv.units * inv.unitcost,
    initialValue
  );
  const onPressNavigate=()=>{
    navigate.navigate('InvoiceItem')
  }

  return (
    <Invoice
      invoicenumber={item.invoicenumber}
      subTotal={subTotal}
      status={item.status}
      customer={item.customer}
      onPressAction={onPressNavigate}
    />
  );
};
  return (
    <View style={styles.invoicesContainer}>
      <View style={styles.invoicesTop}>
        <SimpleLineIcons name="settings" size={24} color="black" />
        <Text>Your Invoices</Text>
        <Octicons name="search" size={24} color="black" />
      </View>
      <View style={styles.invoicesNavigationContainer}>
        <ClearButton onPress={navigateHandlers.navigateToAll}>All</ClearButton>

        <ClearButton onPress={navigateHandlers.navigateToUnpaid}>
          UnPaid
        </ClearButton>

        <ClearButton onPress={navigateHandlers.navigateToPaid}>
          Paid
        </ClearButton>
      </View>
      <View style={styles.invoicesSection}>
        <FlatList
          data={filteredInvoices}
          renderItem={renderItem}
          keyExtractor={(item) => item.invoicenumber.toString()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  invoicesTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  invoicesContainer: {
    flex: 1,

  },
  invoicesNavigationContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  invoicesSection: {
    backgroundColor: colors.gray,
  },
});
export default Invoices;
