import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useState } from "react";
import ClearButton from "../../components/ui/ClearButton";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";
//import invoicesData from "../../const/Data";
import Invoice from "../../components/ui/Invoice";
import IInvoiceItem from "../../types/IInvoice";
import colors from "../../const/Colors";
import invoices from "../../const/Data";
import BlueButton from "../../components/ui/BlueButton";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;
console.log(width);
function Invoices({ navigation }: any) {
  let [allinvoices, setAllInvoices] = useState(invoices);
  const [filteredInvoices, setFilteredInvoices] = useState(allinvoices);
  const [screen, setScreen] = useState("all");

  const navigateHandlers = {
    navigateToUnpaid: () => {
      const invoices = allinvoices.filter(
        (invoice) => invoice.status === "unpaid"
      );
      setScreen("unpaid");
      setFilteredInvoices(invoices);
    },
    navigateToPaid: () => {
      const invoices = allinvoices.filter(
        (invoice) => invoice.status === "paid"
      );
      setScreen("paid");
      setFilteredInvoices(invoices);
    },
    navigateToAll: () => {
      setScreen("all");
      setFilteredInvoices(allinvoices);
    },
  };

  const renderItem = ({ item }: { item: IInvoiceItem }) => {
    const initialValue = 0;
    const subTotal = item.elements.reduce(
      (total: number, inv) => total + inv.units * inv.unitcost,
      initialValue
    );

    const onPressNavigate = () => {
      console.log("line reached");
      navigation.navigate("InvoiceItem");
    };
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
        <Text >Your Invoices</Text>

        <Octicons name="search" size={24} color="black" />
      </View>
      <View style={styles.invoicesNavigationContainer}>
        <View style={[screen === "all" ? styles.chosenMenu : null]}>
          <Text onPress={navigateHandlers.navigateToAll} style={styles.menuText}>All</Text>
        </View>
        <View style={[screen === "unpaid" ? styles.chosenMenu : null]}>
          <Text onPress={navigateHandlers.navigateToUnpaid} style={styles.menuText}>Unpaid</Text>
        </View>
        <View style={[screen === "paid" ? styles.chosenMenu : null]}>
          <Text onPress={navigateHandlers.navigateToPaid} style={styles.menuText}>Paid</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <BlueButton onPressAction={() => navigation.navigate("AddInvoice")}>
          Add Job +
        </BlueButton>
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

//styles
const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    left: width / 4,
    zIndex: 100,
    alignItems: "center",
    padding: 10, // Adjust padding as needed
  },
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
    justifyContent: "space-around",
    marginBottom:10
  },
  invoicesSection: {
    backgroundColor: colors.gray,
    zIndex: -1,
  },
  chosenMenu: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryBlue,
  },
  menuText:{
    fontSize:20,
    marginBottom:5
  }
});
export default Invoices;
