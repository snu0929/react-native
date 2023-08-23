import React from "react";
import { View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    paddingVertical: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});

export default TodoList;
