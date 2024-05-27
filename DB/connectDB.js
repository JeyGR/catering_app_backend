require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  host: "monorail.proxy.rlwy.net",
  user: "postgres",
  port: "27999",
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
