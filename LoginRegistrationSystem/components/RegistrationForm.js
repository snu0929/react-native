import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const RegistrationForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
      });
      console.log("Registration response:", response.data);

      // Show success message
      setSuccessMessage("Registration successful!");
      setModalVisible(true); // Open the modal
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create an Account</Text>
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{successMessage}</Text>
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginLinkText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Log in here.</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  loginLinkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginLinkText: {
    color: "#777",
    marginRight: 5,
  },
  loginLink: {
    color: "#3498db",
    textDecorationLine: "underline",
  },
});

export default RegistrationForm;
