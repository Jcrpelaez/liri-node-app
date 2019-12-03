require("dotenv").config();
// Grab data from keys.js
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");

function movie() {
  console.log("You are in the movie command");
  var queryUrl = "" + value;
  axios.get(queryUrl).then();
}
var getArtistNames = function(artist) {
  return artist.name;
};

var getMeSpotify = function(songName) {
  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s):" + songs[i].artists.map(getArtistNames));
      console.log("song name:" + songs[i].name);
      console.log("preview song:" + songs[i].preview_url);
      console.log("album:" + songs[i].album.name);
      console.log("----------------------------------------");
    }
  });
};

var getMeMovie = function(movieName) {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten tomatoes rating: " + response.data.tomatoRating);
    console.log("Country produced: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  });
};
var pick = function(caseData, functionData) {
  switch (caseData) {
    case "spotify-this-song":
      getMeSpotify(functionData);
      break;
    case "movie-this":
      getMeMovie(functionData);
      break;
    case "":
      break;
    default:
      console.log("LIRI does not know that");
  }
};

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
