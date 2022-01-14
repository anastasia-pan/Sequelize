require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { Movie } = require("./models/models");
const connection = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
} = require("./utils/index");

const app = async (commandLineInput) => {
  try {
    connection.authenticate();
  } catch (error) {
    console.log(error);
  }

  try {
    if (commandLineInput.add) {
      await Movie.sync({ alter: true });
      await addMovie({
        title: commandLineInput.title,
        actor: commandLineInput.actor,
        rating: commandLineInput.rating,
      });
    } else if (commandLineInput.list) {
      await listMovies();
    } else if (commandLineInput.update && commandLineInput.to) {
      if (commandLineInput.title) {
        await updateMovies(commandLineInput.title, commandLineInput.to);
      } else {
        throw "update didn't do  zilch";
      }
    } else if (commandLineInput.delete) {
      deleteMovies(commandLineInput.title);
    }
  } catch (error) {
    console.log(error);
  }
};

app(argv);
