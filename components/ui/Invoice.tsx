import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../const/Colors";
import Card from "./Card";
interface InvoiceType {
  invoicenumber: number;
  status: string;
  subTotal: number;
  customer: string;
  onPressAction:any
}
function Invoice({ invoicenumber, status, subTotal, customer,onPressAction }: InvoiceType) {
  let statusFontStyle;
  if (status == "paid") {
    statusFontStyle = { color: colors.green };
  } else {
    statusFontStyle = { color: colors.red };
  }
  return (
    <Card>
      <Pressable style={styles.buttonStyle} onPress={onPressAction}>
      <View>
        <Text>INV{invoicenumber}</Text>
        <Text>{customer}</Text>
      </View>
      <View>
        <Text style={statusFontStyle}>{status}</Text>
        <Text>$ {subTotal}</Text>
      </View>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonStyle:{
    flex:1
  }
})

export default Invoice;
