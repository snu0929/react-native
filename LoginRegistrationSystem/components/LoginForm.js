import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users", {
        params: {
          username,
          password,
        },
      });

      if (response.data.length > 0) {
        setErrorMessage(""); // Clear any previous error messages
        console.log("Login response:", response.data);
      } else {
        setErrorMessage("Invalid username or password"); // Display error message
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.registerLinkContainer}>
        <Text style={styles.registerLinkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.registerLink}>Sign up here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    marginBottom: 15,
    padding: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#333",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 16,
    marginTop: 10,
  },
  registerLinkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerLinkText: {
    color: "#777",
    marginRight: 5,
  },
  registerLink: {
    color: "#3498db",
    textDecorationLine: "underline",
  },
});

export default LoginForm;
