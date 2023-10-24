document.addEventListener("DOMContentLoaded", function() {
    // Task 1: Highlight words over 8 characters long
    const paragraph = document.getElementById("paragraph");
    let text = paragraph.textContent;
    const words = text.split(/\s+/);

    for (const word of words) {
        if (word.length > 8 && !/[.,!?]/.test(word)) {
            text = text.replace(new RegExp(word, "g"), `<span style="background-color: yellow;">${word}</span>`);
        }
    }

    paragraph.innerHTML = text;

    // Task 2: Add a link back to the source
    const sourceLink = document.createElement("a");
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source Link";
    paragraph.insertAdjacentElement("afterend", sourceLink);

    // Task 3: Split each sentence on a separate line
    text = text.replace(/\.\s/g, ".<br>");
    paragraph.innerHTML = text;

    // Task 4: Count and display the number of words
    const wordCount = words.length;
    const wordCountDisplay = document.createElement("p");
    wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    paragraph.insertAdjacentElement("beforebegin", wordCountDisplay);

    // Task 5: Replace question marks and exclamation marks
    text = text.replace(/\?/g, "🤔").replace(/!/g, "😯");
    paragraph.innerHTML = text;

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const registerButton = document.getElementById("registerButton");
    const registrationMessage = document.getElementById("registrationMessage");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Function to check if the input fields are valid
    function validateForm() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Required validation
        const isUsernameValid = username.trim() !== "";
        const isPasswordValid = password.trim() !== "";
        const isConfirmPasswordValid = confirmPassword.trim() !== "";

        // Password match validation
        const doPasswordsMatch = password === confirmPassword;

        // Update error messages
        usernameError.textContent = isUsernameValid ? "" : "Username is required.";
        passwordError.textContent = isPasswordValid ? "" : "Password is required.";
        confirmPasswordError.textContent = isConfirmPasswordValid ? "" : "Confirm Password is required.";

        if (!doPasswordsMatch) {
            passwordError.textContent = "Passwords do not match.";
            confirmPasswordError.textContent = "Passwords do not match.";
        }

        // Enable or disable the Register button
        registerButton.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && doPasswordsMatch);
    }

    // Register button click event
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        registrationMessage.textContent = "User registered successfully!";
    });

    // Input field change events
    usernameInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
    confirmPasswordInput.addEventListener("input", validateForm);
});
