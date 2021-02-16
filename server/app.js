const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());

// create a GET route

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.get("/gram", (req, res) => {
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

app.get("/mazeGame", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(express.static(path.resolve(__dirname, "../assets/blog")));
app.use(express.static(path.resolve(__dirname, "../js/kittyCards/")));
app.use(express.static(path.resolve(__dirname, "../js/shapes/src/components")));
app.use(express.static(path.resolve(__dirname, "../js/mazeGame/")));
app.use(express.static(path.resolve(__dirname, "../dist")));

//Password Check for Blog

app.post("/password", (req, res) => {
	const enteredPassword = req.body.password.toLowerCase();
	const hiddenPassword = "cupid";
	if (enteredPassword === hiddenPassword) {
		res.send({ isValid: true });
	} else res.send({ isValid: false });
});

// console.log that your server is up and running
app.listen(4567, () => console.log(`Listening on port 4567`));
