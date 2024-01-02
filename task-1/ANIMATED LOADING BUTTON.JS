// Selecting elements using querySelector
let button = document.querySelector(".ATC-button"),
    spinIcon = document.querySelector(".spinner"),
    buttontext = document.querySelector(".button-text");

// Adding a click event listener to the button
button.addEventListener("click", () => {
    // Resetting the cursor style and adding the "checked" class to the button
    button.style.cursor = "";
    button.classList.add("checked");

    // Adding the "spin" class to start the spinner animation
    spinIcon.classList.add("spin");

    // Changing the button text to "Loading..."
    buttontext.textContent = "Loading...";

    // Setting a timeout for simulating a loading process
    setTimeout(() => {
        // Resetting pointer events and replacing classes for checkmark icon
        button.style.pointerEvents = "";
        spinIcon.classList.replace("spinner", "check");
        spinIcon.classList.replace("fa-spinner", "fa-check");

        // Changing the button text to "Done."
        buttontext.textContent = "Done.";
    }, 4000);
});
