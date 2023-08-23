import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleSaveEdit = () => {
    console.log("Saving edit...");
    console.log("Edited title:", editedTitle);
    console.log("Edited description:", editedDescription);
    onEditTodo(todo.id, editedTitle, editedDescription);
    setIsEditing(false); // Close the editing mode
  };

  return (
    <View style={styles.container}>
      {!isEditing ? (
        <>
          <Text style={styles.title}>{todo.title}</Text>
          <Text style={styles.description}>{todo.description}</Text>
          <Text style={styles.status}>
            Status: {todo.completed ? "Completed" : "Pending"}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title={todo.completed ? "Mark as Pending" : "Mark as Completed"}
              onPress={() => onToggleComplete(todo.id)}
            />
            <Button title="Edit" onPress={() => setIsEditing(true)} />
            <Button title="Delete" onPress={() => onDeleteTodo(todo.id)} />
          </View>
        </>
      ) : (
        <View>
          <TextInput
            style={styles.editInput}
            value={editedTitle}
            onChangeText={setEditedTitle}
          />
          <TextInput
            style={styles.editInput}
            value={editedDescription}
            onChangeText={setEditedDescription}
          />
          <Button title="Save" onPress={handleSaveEdit} />
          <Button title="Cancel" onPress={() => setIsEditing(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    marginBottom: 10,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default TodoItem;
