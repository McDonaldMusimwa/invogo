import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../const/Colors";
import Invoice from "../../components/ui/Invoice";

function AllInvoices({ invoices }: any) {
  return (
    <View style={styles.invoicesPage}>
      {invoices.map((invoice: any) => {
        const initialValue = 0;
        const subTotal = invoice.elements.reduce(
          (total: number, inv: any) => total + inv.units * inv.unitcost,
          initialValue
        );

        return (
          <Invoice
          key={invoice.invoicenumber}
            invoicenumber ={invoice.invoicenumber}
            subTotal={subTotal}
            status={invoice.status}
            customer={invoice.customer}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  invoicesPage: {
    backgroundColor: colors.gray,
  },
});
export default AllInvoices;
