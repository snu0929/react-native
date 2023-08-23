import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (title, description) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const handleEditTodo = (id, editedTitle, editedDescription) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, title: editedTitle, description: editedDescription }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onEditTodo={handleEditTodo} // Add onEditTodo prop
        onDeleteTodo={handleDeleteTodo}
      />
      <CreateTodo onCreateTodo={handleCreateTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
});
