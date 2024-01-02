// Selecting the element with the class "options" and assigning it to the variable "circle"
let circle = document.querySelector(".options");

// Adding a click event listener to the "circle" element
circle.addEventListener("click", (e) => {
    // Getting the target element that was clicked
    let target = e.target;

    // Checking if the clicked element has the class "circle"
    if (target.classList.contains("circle")) {
        // Removing the "active" class from the currently active circle
        circle.querySelector(".active").classList.remove("active");

        // Adding the "active" class to the clicked circle
        target.classList.add("active");

        // Removing the "active" class from the currently active shoe image
        document.querySelector(".shoe-images .active").classList.remove("active");

        // Adding the "active" class to the shoe image corresponding to the clicked circle
        document.querySelector(`.shoe-images .${target.id}`).classList.add("active");
    }
});
