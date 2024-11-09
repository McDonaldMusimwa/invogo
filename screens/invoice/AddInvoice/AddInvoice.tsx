import { View, Text, TextInput, StyleSheet, Platform, SafeAreaView } from "react-native";
import { useState } from "react";
import colors from "../../../const/Colors"
import IosDatePicker from "../../../components/ui/IosDatePIcker";
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
function AddInvoice() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };





    return (
        <SafeAreaView>
            <View style={styles.dateInput}>
                <IosDatePicker />
            </View>
            <View style={styles.clientInput}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Client' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AddInvoiceContainer: {
        backgroundColor: colors.gray,
        flex: 1
    },
    dateInput: {
        height: 50,
        marginBottom:80,
        padding: 1,
        borderRadius: 8,
        backgroundColor: colors.white
    },

    clientInput: {
      
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
       
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor:colors.white
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

})
export default AddInvoice