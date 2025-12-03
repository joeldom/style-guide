// Verify.js
// v1.2.0

// PASSWORD [X]
let storedPassword = "COMPANY_NAME";
let snackbar = new bootstrap.Toast(document.getElementById('snackbar'));

// Function to show snackbar messages
function showSnackbar(message, errorLog = '') {
    let messageContent = message;
    if (errorLog) {
        messageContent += `<small>${errorLog}</small>`;
    }
    document.getElementById('snackbarMessage').innerHTML = messageContent;
    document.getElementById('snackbar').style.display = 'block';
    snackbar.show();
}
// Password validation and button action
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let inputPassword = document.getElementById('password').value;
    // Check if the input matches the stored password
    if (inputPassword === storedPassword) {
        showSnackbar("Access granted!");
        // Replace "Submit" with "Proceed" and add a click action to redirect
        let submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = "Proceed";
        submitBtn.setAttribute("onclick", "window.location.href='https://joeldom.github.io/style-guide/ux/Case-Studies/';");
        // Now, fetch the dynamic password AFTER success
        fetchDynamicPassword();
    } else {
        showSnackbar("Access denied!", "Invalid password attempt at " + new Date().toLocaleString() + "<br>Try again in 5secs with COMPANY_NAME");
    }
});

// Function to fetch the dynamic password from the JSON file after the initial password is validated
function fetchDynamicPassword() {
    fetch('https://joeldom.github.io/asset/array/strings.json')
        .then(response => response.json())
        .then(data => {
            // Update storedPassword with the first element from the array
            storedPassword = data[0];
            showSnackbar("Password accepted, you may proceed :)");
        })
        .catch(error => {
            showSnackbar("Error confirming password", error.message);
        });
}

// WARNING !!!
let clickCount = 0;
let confirmAttempts = 0;
let clickTimer;

// Function to show the warning overlay
function showWarning() {
    // Check if overlay already exists to prevent duplication
    if (document.querySelector('.overlay')) return;

    // Create overlay with gradient animation
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Centered warning form content
    const warningDiv = document.createElement('div');
    warningDiv.className = 'warning-form';
    warningDiv.innerHTML = `
		 <div class="warning"><h1>⚠️</h1><br/> Warning! <span>Suspicious Activity</span></div>
		 <div class="warning-form-content">
			 <div class="radio-group">
				 <p>Are you human?</p>
				 <div class="radio-group-sub">
					 <input type="radio" id="yesCheck" name="humanCheck" value="yes" />
					 <label for="yesCheck">Yes</label>
					 <input type="radio" id="noCheck" name="humanCheck" value="no" />
					 <label for="noCheck">No</label>
				 </div>
			 </div>
			 <button id="confirmBtn" disabled data-title="Please answer...">Confirm</button>
		 </div>
	 `;

    overlay.appendChild(warningDiv);
    document.body.appendChild(overlay);

    const yesCheck = document.getElementById('yesCheck');
    const noCheck = document.getElementById('noCheck');
    const confirmBtn = document.getElementById('confirmBtn');

    // Enable the confirm button only if a radio button is selected
    yesCheck.addEventListener('change', () => {
        confirmBtn.disabled = false;
        confirmBtn.textContent = "Confirm";
        confirmBtn.onclick = () => {
            document.body.removeChild(overlay); // Removes the overlay from the DOM
        };
    });

    noCheck.addEventListener('change', () => {
        confirmBtn.disabled = false;
        confirmBtn.textContent = "Confirm";
        confirmBtn.onclick = () => modifyForm(warningDiv);
    });
}

// Function to modify the warning form after "No" is selected
function modifyForm(warningDiv) {
    const formContent = warningDiv.querySelector('.warning-form-content');

    // Remove the radio buttons and update the content
    formContent.innerHTML = `
		 <p>Please review the information below and acknowledge to proceed:</p>
		 <iframe src="terms.html" id="tosIframe"></iframe>
		 <div class="button-group">
			 <button id="denyBtn">Deny</button>
			 <button id="acknowledgeBtn">Acknowledge</button>
		 </div>
	 `;

    const acknowledgeBtn = document.getElementById('acknowledgeBtn');
    const denyBtn = document.getElementById('denyBtn');
    const iframe = document.getElementById('tosIframe');

    iframe.addEventListener('load', () => {
        // Add scroll listener when iframe content is loaded
        const iframeWindow = iframe.contentWindow;
        iframeWindow.addEventListener('scroll', () => {
            const scrollTop = iframeWindow.scrollY;
            const scrollHeight = iframeWindow.document.documentElement.scrollHeight;
            const clientHeight = iframeWindow.document.documentElement.clientHeight;

            // Enable button if scrolled to the bottom
            console.log({
                scrollTop,
                clientHeight,
                scrollHeight
            }); // Debugging
            if (scrollTop + clientHeight >= scrollHeight) {
                acknowledgeBtn.disabled = false;
            }
        });
    });

    // Redirect to the desired URL when Acknowledge is clicked
    denyBtn.onclick = () => {
        document.body.removeChild(warningDiv.closest('.overlay')); // Remove the overlay
        // window.location.href = 'https://joeldom.github.io/redesign/sandbox/prompt/';
    };
    acknowledgeBtn.onclick = () => {
        //document.body.removeChild(warningDiv.closest('.overlay')); // Remove the overlay
        window.location.href = 'https://joeldom.github.io/redesign/sandbox/prompt/';
    };
}

// Function to track rapid clicks
function trackClicks() {
    clickCount++;
    clearTimeout(clickTimer); // Reset timer on each click

    // Start a timer to reset clickCount after 2 seconds
    clickTimer = setTimeout(() => {
        clickCount = 0;
    }, 2000);

    // Show warning if clickCount reaches 5 within 2 seconds
    if (clickCount >= 5) {
        showWarning();
        clickCount = 0; // Reset click count after showing warning
    }
}

// Event listener for tracking rapid clicks on the page
document.body.addEventListener('click', trackClicks);

// Event listener for tracking failed login attempts
document.getElementById('loginForm').addEventListener('submit', (event) => {
    confirmAttempts++;

    // Show warning if there are 5 failed attempts
    if (confirmAttempts >= 5) {
        event.preventDefault();
        showWarning();
        confirmAttempts = 0; // Reset attempts after showing warning
    }
});