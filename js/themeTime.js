document.addEventListener("DOMContentLoaded", function() {
    function setThemeBasedOnTime() {
        const now = new Date();
        const day = now.getUTCDay(); // getUTCDay returns 0 (Sunday) to 6 (Saturday)
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();

        // Convert EST time to UTC
        const startESTHours = 9;
        const startESTMinutes = 30;
        const endESTHours = 17;
        const endESTMinutes = 0;

        // Calculate UTC times for 9:30 AM and 5:00 PM EST
        const startUTC = new Date(now);
        startUTC.setUTCHours(startESTHours + 5, startESTMinutes); // 9:30 AM EST is 2:30 PM UTC

        const endUTC = new Date(now);
        endUTC.setUTCHours(endESTHours + 4, endESTMinutes); // 5:00 PM EST is 9:00 PM UTC

        if (day === 0 || day === 6) {
            // If it's Saturday or Sunday
            setNightMode();
        } else {
            if (now >= startUTC && now <= endUTC) {
                setLightMode();
            } else {
                setNightMode();
            }
        }
    }

    function setLightMode() {
        document.documentElement.setAttribute("data-theme", "light");
        document.body.classList.add("light-mode");
        document.body.classList.remove("night-mode");
    }

    function setNightMode() {
        document.documentElement.setAttribute("data-theme", "night");
        document.body.classList.add("night-mode");
        document.body.classList.remove("light-mode");
    }

    function themeSwitch() {
        if (document.body.classList.contains("night-mode")) {
            setLightMode();
        } else {
            setNightMode();
        }
    }

    // Initial theme set based on time
    setThemeBasedOnTime();

    // Add click event listener for theme switching
    document.getElementById("themeToggle").addEventListener("click", themeSwitch);

    // Check the time and update the theme every minute
    setInterval(setThemeBasedOnTime, 60000); // Check every minute
});