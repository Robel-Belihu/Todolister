import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy the bread", key: "1" },
    { text: "clean the house", key: "2" },
    { text: "start the thing", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((todos) => {
      return todos.filter((todosItem) => todosItem.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    paddingTop: 40,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
