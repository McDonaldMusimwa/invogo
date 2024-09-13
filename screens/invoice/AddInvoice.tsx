import {View,Text,StyleSheet} from 'react-native'

function AddInvoice(){


    return(<View style={styles.addInvoiceContainer}><Text>Add invoice</Text></View>)
}

const styles = StyleSheet.create({
    addInvoiceContainer:{
        marginTop:50
    }
})

export default AddInvoice