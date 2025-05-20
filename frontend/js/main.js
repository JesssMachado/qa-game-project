document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("login-form");
	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			alert("Login functionality coming soon!");
		});
	}
});
