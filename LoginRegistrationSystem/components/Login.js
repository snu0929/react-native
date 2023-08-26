import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to your Food Delivery Account</Text>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: "#666",
  },
  signupLink: {
    fontSize: 14,
    color: "#007bff",
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Login;
