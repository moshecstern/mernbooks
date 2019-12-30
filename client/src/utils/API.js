import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the character with the given id
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the character with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/characters/" + id);
  },
  // Saves a character to the database
  saveCharacter: function(characterData) {
    return axios.post("/api/characters", characterData);
  },
  findCharacterBySeries: function(seriesname, charactername) {
    return axios.get("/api/series/"+seriesname+ "/"+ charactername);
  },
  getSeries: function() {
    return axios.get("/api/series");
  },
  getheroinfo: function() {
    return axios.get("http://superheroapi.com/api/10214859933028426/search/batman/id/biography")
  },
  getSeriesByid: function(id){
    return axios.get("/api/series/" + id);

  }

};
