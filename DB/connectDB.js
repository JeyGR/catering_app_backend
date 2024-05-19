require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  host: "dpg-cndctpqcn0vc73f62dpg-a.oregon-postgres.render.com",
  user: "library_da10_user",
  port: "5432",
  password: process.env.pass,
  database: "catering",
  ssl: {
    rejectUnauthorized: false,
  },
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

connectDb();

module.exports = { client, connectDb };
