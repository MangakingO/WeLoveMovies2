require('dotenv').config();
const path = require("path");

// if (process.env.USER) require("dotenv").config();

const {
  DATABASE_URL = "postgres://wguitzrc:baCtp4iBL9kisthTYnxlTq1-QcoPSAN7@berry.db.elephantsql.com/wguitzrc",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
