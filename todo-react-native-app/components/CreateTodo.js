import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CreateTodo = ({ onCreateTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTodo = () => {
    onCreateTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title Here"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description Here"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create" onPress={handleCreateTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CreateTodo;
