document.addEventListener("DOMContentLoaded", function () {
	const modeToggler = document.querySelector(".dashboards__mode-toggler");

	const changeMode = () => {
		modeToggler.classList.toggle("active");

		if (modeToggler.classList.contains("active")) {
			modeToggler.setAttribute("aria-label", "Turn on light mode");
			document.body.classList.add("dark");
		} else {
			modeToggler.setAttribute("aria-label", "Turn on dark mode");
			document.body.classList.remove("dark");
		}
	};

	modeToggler.addEventListener("click", changeMode);
});
