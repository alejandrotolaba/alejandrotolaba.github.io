document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.getElementById("theme-toggle");
	const body = document.body;

	// Función para establecer el tema
	function setTheme(theme) {
		body.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme); // Guardar la preferencia
	}

	// Comprobar la preferencia guardada en localStorage
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		setTheme(savedTheme);
	} else {
		// Si no hay preferencia guardada, usar la preferencia del sistema
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
		if (prefersDark.matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	// Escuchar cambios en la preferencia del sistema
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => {
			// Solo actualizar si no hay una preferencia manual explícita
			if (!localStorage.getItem("theme")) {
				if (e.matches) {
					setTheme("dark");
				} else {
					setTheme("light");
				}
			}
		});

	// Manejar el clic del botón de alternancia
	themeToggle.addEventListener("click", () => {
		if (body.getAttribute("data-theme") === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	});
});
