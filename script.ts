// Get form and resume elements
const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Listen for form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collect input data
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill);

    // Generate resume HTML
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${sanitizeInput(name)}</p>
        <p><b>Email:</b> ${sanitizeInput(email)}</p>
        <p><b>Phone:</b> ${sanitizeInput(phone)}</p>

        <h4>Education</h4>
        <p>${sanitizeInput(education)}</p>

        <h4>Work Experience</h4>
        <p>${sanitizeInput(experience)}</p>

        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${sanitizeInput(skill)}</li>`).join("")}
        </ul>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        form.reset(); // Reset the form after submission
    } else {
        console.error("Resume display element not found!");
    }
});

// Function to sanitize user input
function sanitizeInput(input: string): string {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}
