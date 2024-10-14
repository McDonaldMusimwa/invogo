import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../../const/Colors';
interface IButton {
    children: any,
    onPressAction: any
}
function BlueButton({ children, onPressAction }: IButton) {

    return (<View style={styles.buttonContainer}>

        <Pressable onPress={onPressAction}>
            <Text style={styles.innerText}>{children}</Text></Pressable></View>)

}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primaryBlue,
        width:200,
        padding: 15,
        borderRadius: 15
    },
    innerText:{
        textAlign:'center',
        color:colors.white,
    }

})

export default BlueButton