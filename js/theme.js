// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
document.addEventListener("DOMContentLoaded", (event) => {
    // Ensure light mode class is added on page load
    document.body.classList.add("light-mode");

    const themeSwitch = document.getElementById("themeSwitch");

    themeSwitch.addEventListener("click", function() {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});




// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// if (prefersDarkScheme.matches) {
//     document.body.classList.add("dark-theme");
// } else {
//     document.body.classList.remove("dark-theme");
// }