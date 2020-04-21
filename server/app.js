const express = require("express");
const app = express();
const path = require("path");

// create a GET route

app.get("katagora.com", (req, res) => {
	res.redirect("http://www.katagora.com")
})

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/portfolio", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/shapes", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/kittyCards", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/tictactoe", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(express.static(path.resolve(__dirname, "../js/kittyCards/")));
app.use(express.static(path.resolve(__dirname, "../js/shapes/src/components")));
app.use(express.static(path.resolve(__dirname, "../dist")));

// console.log that your server is up and running
app.listen(4567, () => console.log(`Listening on port 4567`));
