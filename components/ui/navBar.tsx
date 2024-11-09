import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
function NavBar({ navigation }: any) {
    const [screen, setScreen] = useState('invoices')
    const navigateHandlers = {
        navigateToClients: () => {
            setScreen('clients');
            navigation.navigate("Clients");
        },
        navigateToElements: () => {
            setScreen('elements');
            navigation.navigate("Elements");
        },
        navigateToSettings: () => {
            setScreen('settings');
            navigation.navigate("Settings");
        },
        navigateToInvoices: () => {
            setScreen('invoices');
            navigation.navigate("Invoices");
        }
    };


    return (<View style={styles.mainNavigationContainer}>
        <View style={[styles.menuItem, screen === "Invoices" ? styles.chosenMenu : null]}>
            <FontAwesomeIcon icon={faFileAlt} />
            <Text onPress={navigateHandlers.navigateToInvoices} style={styles.menuText}>
                <View>

                </View>
                Invoices</Text>
        </View>

        <View style={[styles.menuItem, screen === "elements" ? styles.chosenMenu : null]}>
            <FontAwesomeIcon icon={faFileAlt} />
            <Text onPress={navigateHandlers.navigateToElements} style={styles.menuText}>Elements</Text>
        </View>
        <View style={[styles.menuItem, screen === "clients" ? styles.chosenMenu : null]}>
            <FontAwesomeIcon icon={faUserAlt} />
            <Text onPress={navigateHandlers.navigateToClients} style={styles.menuText}>Clients</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    mainNavigationContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: "space-around"
    },
    chosenMenu: {

    },
    menuText: {

        fontSize: 15
    },
    menuItem: {
        alignItems: 'center',
        marginBottom: 15
    }
})

export default NavBar