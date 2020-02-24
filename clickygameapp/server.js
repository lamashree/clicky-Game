const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
//const seeds = require("./scripts/seedDB")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define API routes here
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB


// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
