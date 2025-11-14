import { StyleSheet, Text, View, Pressable } from "react-native";
export default function GoalItem(props) {
  return (
    <View style={styles.goalItem} key={props.itemKey}>
      <Pressable
        android_ripple={{ color: "red", foreground: true }}
        onPress={() => props.onDeleteGoalItem(props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.golText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  golText: {
    padding: 8,
    color: "white",
  },
});
