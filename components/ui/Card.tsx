import { StyleSheet, View } from "react-native";
import colors from "../../const/Colors";
function Card({ children }: any) {
  return <View style={styles.invoiceContainer}>{children}</View>;
}
const styles = StyleSheet.create({
  invoiceContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
  },
});

export default Card;
