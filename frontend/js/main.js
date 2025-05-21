// MARK: Login
document.getElementById("login-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = {
		email: document.getElementById("username").value,
		password: document.getElementById("password").value,
	};

	try {
		const response = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// Read raw text safely
		const text = await response.text();
		let result = {};

		// Try parsing JSON only if there's a response body
		if (text) {
			try {
				result = JSON.parse(text);
			} catch (jsonError) {
				console.warn("⚠️ Could not parse JSON:", jsonError);
				result.message = "Invalid JSON format returned by the server.";
			}
		}

		if (response.ok) {
			alert("✅ Registration successful!");
			window.location.href = "index.html";
		} else {
			alert(`❌ Error: ${result.message || "Unknown error."}`);
		}
	} catch (error) {
		alert(`❌ Network error: ${error.message}`);
	}
});

// MARK: Registration
document
	.getElementById("registration-form")
	.addEventListener("submit", async (e) => {
		e.preventDefault();

		const data = {
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			email: document.getElementById("email").value,
			country: document.getElementById("country").value,
			username: document.getElementById("username").value,
			password: document.getElementById("password").value,
			passwordConfirmation: document.getElementById("passwordConfirmation")
				.value,
		};

		try {
			const response = await fetch("http://localhost:3000/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			// Read raw text safely
			const text = await response.text();
			let result = {};

			// Try parsing JSON only if there's a response body
			if (text) {
				try {
					result = JSON.parse(text);
				} catch (jsonError) {
					console.warn("⚠️ Could not parse JSON:", jsonError);
					result.message = "Invalid JSON format returned by the server.";
				}
			}

			if (response.ok) {
				alert("✅ Registration successful!");
				window.location.href = "index.html";
			} else {
				alert(`❌ Error: ${result.message || "Unknown error."}`);
			}
		} catch (error) {
			alert(`❌ Network error: ${error.message}`);
		}
	});
