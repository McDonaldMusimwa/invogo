import { View, Text, StyleSheet } from "react-native";
import invoices from "../../const/Data";
function InvoiceItem({route}) {
  const invoicenumber = route.params.invoicenumber
  const invoiceitem = invoices.filter((invoice)=> invoice.invoicenumber === invoicenumber)
 const invoice= invoiceitem[0]
 console.log(invoice)
  return (
    <View style={styles.invoiceContainer}>
      <Text>Invoice Item</Text>
      <Text>{invoicenumber}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  invoiceContainer: {
    margin: 50,
  },
});
export default InvoiceItem;
