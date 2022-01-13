const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../db/connection");
const { setApproval } = require("./modelHelpers");

const Movie = connection.define("Movies", {
  title: {
    type: DataTypes.STRING,
    allownull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  approval: {
    type: DataTypes.STRING,
    allownull: false,
    get() {
      const rawValue = this.getDataValue("title");
      return firstUpper(rawValue);
    },
  },

  rating: {
    type: DataTypes.STRING,
    allownull: false,
    set(value) {
      this.setDataValue("approval", setApproval(value));
      this.setDataValue("rating", value);
    },
  },
});

module.exports = {
  Movie,
};
