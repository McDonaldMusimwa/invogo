import { View, Text, StyleSheet, Pressable } from 'react-native';
interface IButton {
    children: any,
    onPressAction: any
}
function BlueButton({ children, onPressAction }: IButton) {

    return (<View style={styles.buttonContainer}>

        <Pressable onPress={onPressAction}>
            <Text>{children}</Text></Pressable></View>)

}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#6ef',
        padding: 15,
        borderRadius: 15
    }
})

export default BlueButton