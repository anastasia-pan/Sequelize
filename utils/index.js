const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models");

const addMovie = async (movieObj) => {
  try {
    const movie = await Movie.create(movieObj);
    console.log(`We added ${movie.title}.`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
};
