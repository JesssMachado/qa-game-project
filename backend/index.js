const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});

app.use(express.json());

// MARK: Login
app.post("/api/login", (req, res) => {
	const { email, password } = req.body;

	// Basic dummy validation for now
	if (email === "test@example.com" && password === "1234") {
		return res.status(200).json({ message: "Login successful!" });
	}

	res.status(401).json({ message: "Invalid credentials." });
});

// MARK: Registration
app.post("/api/register", (req, res) => {
	console.log("Received registration data:", req.body);

	const {
		firstName,
		lastName,
		email,
		country,
		username,
		password,
		passwordConfirmation,
	} = req.body;

	if (!firstName || !email || password !== passwordConfirmation) {
		return res.status(400).json({ message: "Invalid input." }); // ✅ always send JSON
	}

	// Simulate success
	res.status(200).json({ message: "User registered successfully!" }); // ✅ always send JSON
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
	console.error("Unhandled error:", err);
	res.status(500).json({ message: "Internal server error." });
});
