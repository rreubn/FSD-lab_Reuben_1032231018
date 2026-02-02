function validateForm() {
    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value.trim();

    clearErrors();

    if (name === "") {
        showError("nameError", "Name cannot be empty");
        valid = false;
    }

    if (email === "") {
        showError("emailError", "Email cannot be empty");
        valid = false;
    }

    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters");
        valid = false;
    }

    if (isNaN(mobile) || mobile.length !== 10) {
        showError("mobileError", "Enter a valid 10-digit mobile number");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

    return valid;
}

function showError(id, message) {
    let error = document.getElementById(id);
    error.innerText = message;
    error.style.visibility = "visible";
}

function clearErrors() {
    let errors = document.querySelectorAll("small");
    errors.forEach(error => {
        error.style.visibility = "hidden";
    });
}
