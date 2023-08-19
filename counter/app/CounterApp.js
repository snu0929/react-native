import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const doubleIncrement = () => {
    setCount(count + 2);
  };

  const randomize = () => {
    const randomValue = Math.floor(Math.random() * 100);
    setCount(randomValue);
  };

  const saveCount = () => {
    // You can implement saving logic here (e.g., using AsyncStorage or a database)
    alert(`Count ${count} has been saved.`);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={styles.card}>
        <Text style={styles.title}>Counter App</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraButtonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={reset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.doubleIncrementButton]}
            onPress={doubleIncrement}
          >
            <Text style={styles.buttonText}>Double +</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraButtonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.randomizeButton]}
            onPress={randomize}
          >
            <Text style={styles.buttonText}>Randomize</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={saveCount}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.toggleThemeButton]}
            onPress={() => setIsDarkMode(!isDarkMode)}
          >
            <Text style={styles.buttonText}>
              {isDarkMode ? "Light Theme" : "Dark Theme"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
  },
  darkMode: {
    backgroundColor: "#333", // Dark background color
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007bff",
  },
  counterContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: 120,
    height: 120,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  count: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007bff",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  extraButtonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: "#dc3545", // Red color for reset button
  },
  doubleIncrementButton: {
    backgroundColor: "#28a745", // Green color for double increment button
  },
  randomizeButton: {
    backgroundColor: "#ffc107", // Yellow color for randomize button
  },
  saveButton: {
    backgroundColor: "#28a745", // Green color for save button
  },
  colorChangeButton: {
    backgroundColor: "#17a2b8", // Teal color for color change button
  },
});

export default CounterApp;
