function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Valid email required";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message required";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (valid) {
        alert("Message sent successfully!");
        form.reset(); 
    }
});