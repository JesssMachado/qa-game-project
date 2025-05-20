const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
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
		return res.status(400).json({ message: "Invalid input." });
	}

	// Simulate success
	res.status(200).json({ message: "User registered successfully!" });
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
