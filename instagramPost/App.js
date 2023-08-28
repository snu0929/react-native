import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  const [comment, setComment] = useState("");

  const handlePostCreation = () => {
    const newPost = {
      username,
      caption,
      likes: 0,
      comments: [],
    };

    setPosts([...posts, newPost]);
    setUsername("");
    setCaption("");
  };

  const handlePostDeletion = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleComment = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
      />
      <TouchableOpacity onPress={handlePostCreation} style={styles.button}>
        <Text>Create Post</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>All Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.postContainer}>
            <Text>{item.username}</Text>
            <Text>{item.caption}</Text>
            <Text>Likes: {item.likes}</Text>
            <TouchableOpacity
              onPress={() => handleLike(index)}
              style={styles.button}
            >
              <Text>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePostDeletion(index)}
              style={styles.button}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
            <Text>Comments:</Text>
            {item.comments.map((comment, cIndex) => (
              <Text key={cIndex}>{comment}</Text>
            ))}
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <TouchableOpacity
              onPress={() => handleComment(index)}
              style={styles.button}
            >
              <Text>Add Comment</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 8,
  },
  postContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  commentInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
  },
});

export default App;
