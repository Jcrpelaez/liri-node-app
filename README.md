# liri-node-app

Created a Node Js bot, like iPhone's SIRI. However, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data on one of four commands:

- `concert-this`

- `spotify-this-song`
- `movie-this`

- `do-what-it-says`

## Getting Started

- Clone down repo.
- Run command 'npm install' in Terminal or GitBash
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does

1. `concert-this`

- This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

2. `node liri.js spotify-this-song <song name>`

- Shows the following information about the song in terminal/bash window.

  - Artist(s)
  - The song's name
  - A preview link of the song from Spotify
  - The album that the song is from

  <img src="/Users/jc/Desktop/liri-node-app/images/Screen Shot 2019-12-09 at 10.45.02 AM.png" height="100px" width="100px">

- Or if no song is passed through, it will default to "I want it that way"

3. `node liri.js movie-this <movie name>`

- Shows the following information in terminal/bash.

  - Title of the movie.
  - Year the movie came out.
  - IMDB Rating of the movie.
  - Country where the movie was produced.
  - Language of the movie.
  - Plot of the movie.
  - Actors in the movie.
  - Rotten Tomatoes Rating.
  - Rotten Tomatoes URL.

- Or if no movie is passed through, it will default to "Mr. Nobody"

4. `node liri.js do-what-it-says`

- Takes the text from random.txt and runs the song through spotify-this-song command

## Technologies Used

- [Spotify API](https://www.npmjs.com/package/node-spotify-api)
- [Axios](https://www.npmjs.com/package/axios)
- [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
- [Moment](https://www.npmjs.com/package/moment)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Node.js](https://nodejs.org/en/)
