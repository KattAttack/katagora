const express = require("express");
const app = express();
const path = require("path");

// create a GET route
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});
app.get("/about", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});
app.get("/portfolio", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});
app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(express.static(path.resolve(__dirname, "../dist")));

// console.log that your server is up and running
app.listen(4567, () => console.log(`Listening on port 4567`));
