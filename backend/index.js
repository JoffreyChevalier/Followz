require("dotenv").config();

const app = require("./src/app");

const serverPort = parseInt(process.env.APP_PORT ?? "5000", 10);
const databasePort = parseInt(process.env.DB_PORT ?? "3306", 10);

app.listen(serverPort, databasePort, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(` ✨Server is listening on ${serverPort}✨`);
    // eslint-disable-next-line no-restricted-syntax
    console.log(`✨Database is connected on ${databasePort}✨`);
    // eslint-disable-next-line no-restricted-syntax
    console.log("         It's alive !! 👾");
  }
});
