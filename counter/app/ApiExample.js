import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

const ApiExample = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>API Data</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ApiExample;
