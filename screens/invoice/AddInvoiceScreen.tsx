import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import AddInvoice from "./AddInvoice/AddInvoice";
import Preview from "./AddInvoice/Preview";
import colors from "../../const/Colors";

function AddInvoiceScreen() {
  const [addScreenNavigate, setNavigate] = useState("add");

  // Simplifying the screen logic
  const screen = addScreenNavigate === "add" ? <AddInvoice /> : <Preview />;

  const navigateHandler = {
    add: () => {
      setNavigate("add");
    },
    preview: () => {
      setNavigate("preview");
    },
  };

  return (
    <View style={styles.addInvoiceContainer}>
      <View style={styles.AddInvoiceNavigate}>
        <View
          style={[
            styles.choice,
            addScreenNavigate === "add" ? styles.chosenMenu : null, // Fix for selected styling
          ]}
        >
          <Text onPress={navigateHandler.add} style={styles.centeredText}>
            Settings
          </Text>
        </View>
        <View
          style={[
            styles.choice,
            addScreenNavigate === "preview" ? styles.chosenMenu : null, // Fix for selected styling
          ]}
        >
          <Text onPress={navigateHandler.preview} style={styles.centeredText}>
            Preview
          </Text>
        </View>
      </View>

      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  addInvoiceContainer: {
    flex: 1,
    marginTop: 10,
  },
  AddInvoiceNavigate: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribute menu items
    width: 400,
    height: 35,
  },
  centeredText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  choice: {
    flex: 1, // Each choice should take up equal space
    paddingVertical: 5,
  },
  chosenMenu: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primaryBlue,
  },
});

export default AddInvoiceScreen;
