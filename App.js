import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState("")
  function goalInputHandler(enteredText) {
    setGoal(enteredText)
  }

  function addGoalHandler(){
    console.log(goal)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your goals'
        onChangeText={goalInputHandler}/>
        <Button title = "add goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goal...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    margingBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 8
  }
});
