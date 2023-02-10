import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy the bread", key: "1" },
    { text: "clean the house", key: "2" },
    { text: "start the thing", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todoItem) => todoItem.key !== key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodo) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodo];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
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
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
