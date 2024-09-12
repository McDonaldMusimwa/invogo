import { Text, Pressable, View, StyleSheet } from "react-native";
import Colors from "../../const/Colors";
type ButtonProps = {
  children: string;
  onPress: () => void;
};

function ClearButton({ children, onPress }: ButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedOnApple]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
  },

  buttonText: {
    color: Colors.black,
    fontSize: 17,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  pressedOnApple: {
    
    borderBottomWidth: 1,
    borderColor: Colors.primaryBlue,
  },
});
export default ClearButton;
