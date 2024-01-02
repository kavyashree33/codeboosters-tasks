// Selecting the element with the class "text-2"
const animate = document.querySelector(".text-2");

// Function to handle the typing animation
const typing_text = () => {
    // Set text content to "web developer" after 0 milliseconds
    setTimeout(() => {
        animate.textContent = " web developer";
    }, 0);

    // Set text content to "angular developer" after 4000 milliseconds
    setTimeout(() => {
        animate.textContent = "angular developer";
    }, 4000);

    // Set text content to "graphic designer" after 8000 milliseconds
    setTimeout(() => {
        animate.textContent = "graphic designer";
    }, 8000);

    // Set text content to "python developer" after 12000 milliseconds
    setTimeout(() => {
        animate.textContent = "python developer";
    }, 12000);

    // Set text content to "dotnet developer" after 16000 milliseconds
    setTimeout(() => {
        animate.textContent = "dotnet developer";
    }, 16000);
};

// Calling the typing_text function initially
typing_text();

// Setting an interval to repeat the typing_text function every 20000 milliseconds (20 seconds)
setInterval(typing_text, 20000);
