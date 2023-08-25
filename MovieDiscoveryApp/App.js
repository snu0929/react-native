import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Movie Search App</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Movie Search App</Text>
    </View>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredMovies, setFeaturedMovies] = useState([]);

  const handleSearch = async () => {
    const apiKey = "59c64c76"; // Replace with your actual OMDB API key

    try {
      setIsLoading(true); // Start loading indicator
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSearchResults(data.Search);
        console.log(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter keywords"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.imdbID}
        numColumns={2} // Display 2 cards per row
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image style={styles.moviePoster} source={{ uri: item.Poster }} />
            <View style={styles.movieCardContent}>
              <Text style={styles.movieTitle}>{item.Title}</Text>
              <Text style={styles.movieYear}>Release Year: {item.Year}</Text>
              <Button
                title="View Details"
                onPress={() => setSelectedMovie(item)}
              />
            </View>
          </View>
        )}
      />

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {searchResults.length > 0 || selectedMovie ? (
        <Button
          title="Clear"
          onPress={() => {
            setSearchResults([]);
            setSelectedMovie(null);
          }}
        />
      ) : null}

      {selectedMovie && (
        <View style={styles.selectedMovieContainer}>
          <Image
            style={styles.selectedMoviePoster}
            source={{ uri: selectedMovie.Poster }}
          />
          <Text style={styles.selectedMovieTitle}>{selectedMovie.Title}</Text>
          <Text style={styles.selectedMovieDetails}>
            Year: {selectedMovie.Year}
          </Text>

          <Text style={styles.selectedMovieDetails}>
            Type: {selectedMovie.Type}
          </Text>

          <Text style={styles.selectedMovieDetails}>
            IMDB Rating: {selectedMovie.imdbID}
          </Text>
        </View>
      )}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  movieCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moviePoster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieCardContent: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieYear: {
    color: "#777",
    marginBottom: 5,
  },
  moviePlot: {
    fontSize: 12,
    marginBottom: 10,
  },
  selectedMovieContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMoviePoster: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  selectedMovieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedMovieDetails: {
    marginBottom: 5,
  },

  navbar: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default App;
