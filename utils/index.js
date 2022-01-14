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

const listMovies = async () => {
  try {
    const movies = await Movie.findAll({});
    console.log(movies.every((user) => user instanceof Movie));
    console.log("All Movies: ", JSON.stringify(movies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

const updateMovies = async (title, updatedTitle) => {
  try {
    const movie = await Movie.findOne({ where: { title: title } });
    console.log(JSON.stringify(movie));
    console.log(`We updated ${movie.title}.`);
    try {
      movie.title = updatedTitle;
      movie.save();
      // Movie.update(movie);
    } catch (error) {
      console.log("naaa");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteMovies = async (title) => {
  try {
    Movie.destroy({ where: { title: title } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
};
