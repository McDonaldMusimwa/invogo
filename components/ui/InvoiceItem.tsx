import { View, Text, StyleSheet } from "react-native";

function InvoiceItem() {
  return (
    <View style={styles.invoiceContainer}>
      <Text>Invoice Item</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  invoiceContainer: {
    margin: 50,
  },
});
export default InvoiceItem;
