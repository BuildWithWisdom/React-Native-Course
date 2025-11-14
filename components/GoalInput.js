import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
export default function GoalInput(props) {
  const [enteredGoalText, setenteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setenteredGoalText(enteredText);
  }

  function addGoalHAndler() {
    props.onAddGoal(enteredGoalText);
    setenteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              onPress={props.onCloseModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="add goal" onPress={addGoalHAndler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 24,
  },
});
