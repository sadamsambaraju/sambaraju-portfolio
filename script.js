
// Welcome message in browser console
console.log("Welcome to Sambaraju's Portfolio!");

// Highlight navigation when clicking a section
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation: " + link.textContent);
    });
});
