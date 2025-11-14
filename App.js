import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [courseGoals, setCourseGaols] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHAndler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGaols((myCourseGoals) => [
      ...myCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHAndler();
  }

  function deleteGoalHandler(id) {
    setCourseGaols((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onCloseModal={endAddGoalHAndler}
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteGoalItem={deleteGoalHandler}
                  text={itemData.item.text}
                  itemKey={itemData.item.id}
                  id={itemData.item.id}
                />
              );
            }}
            style={styles.goalsContainer}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 8,
  },
});
