// Get form and resume elements
var form = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resume-display");
// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input data
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var education = document.getElementById("education").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var skills = document.getElementById("skills").value
        .split(",")
        .map(function (skill) { return skill.trim(); })
        .filter(function (skill) { return skill; });
    // Generate resume HTML
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(sanitizeInput(name), "</p>\n        <p><b>Email:</b> ").concat(sanitizeInput(email), "</p>\n        <p><b>Phone:</b> ").concat(sanitizeInput(phone), "</p>\n\n        <h4>Education</h4>\n        <p>").concat(sanitizeInput(education), "</p>\n\n        <h4>Work Experience</h4>\n        <p>").concat(sanitizeInput(experience), "</p>\n\n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(sanitizeInput(skill), "</li>"); }).join(""), "\n        </ul>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        form.reset(); // Reset the form after submission
    }
    else {
        console.error("Resume display element not found!");
    }
});
// Function to sanitize user input
function sanitizeInput(input) {
    var div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}
