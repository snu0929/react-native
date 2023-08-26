import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegistrationForm from "./RegistrationForm";

const Registration = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Get started on our Food Delivery App!</Text>
      <RegistrationForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
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
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "#666",
  },
  loginLink: {
    fontSize: 14,
    color: "#007bff",
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Registration;
