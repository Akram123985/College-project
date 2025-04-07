document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        // Toggle active class
        button.classList.toggle("active");

        // Toggle the answer display
        let answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
