require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { Movie } = require("./models/models");
const connection = require("./db/connection");
const { addMovie, listMovie } = require("./utils/index");

const app = async (commandLineInput) => {
  //   if (commandLineInput.add) {
  //     if (commandLineInput.movie) {
  //       console.log(
  //         `We are adding ${commandLineInput.title} with the actor ${commandLineInput.actor}`
  //       );
  //     } else if (commandLineInput.album) {
  //       console.log(`We are adding this album ${commandLineInput.name}`);
  //     }
  //   }

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
      await listMovie();
    }
  } catch (error) {
    console.log(error);
  }
};

app(argv);
