import axios from "axios";

export default {
  // Gets all books
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the book with the given id
  getCharacter: function(id) {
    return axios.get("/api/character/" + id);
  },
  // Deletes the book with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/character/" + id);
  },
  // Saves a book to the database
  saveCharacter: function(characterData) {
    return axios.post("/api/character", characterData);
  }
};
