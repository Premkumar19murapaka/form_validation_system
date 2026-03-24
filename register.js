function signup() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");

    firstNameError.innerText = "";
    lastNameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";

    let isValid = true;

    if (!firstName) {
        firstNameError.innerText = "First name required";
        isValid = false;
    }

    if (!lastName) {
        lastNameError.innerText = "Last name required";
        isValid = false;
    }

    if (!email) {
        emailError.innerText = "Email required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.innerText = "Invalid email";
        isValid = false;
    }

    if (!pass) {
        passwordError.innerText = "Password required";
        isValid = false;
    } else if (pass.length < 6) {
        passwordError.innerText = "Min 6 characters";
        isValid = false;
    }

    if (!confirm) {
        confirmError.innerText = "Confirm your password";
        isValid = false;
    } else if (pass !== confirm) {
        confirmError.innerText = "Passwords do not match";
        isValid = false;
    }

    if (!isValid) return;

    let usersInfo = JSON.parse(localStorage.getItem('usersInfo') || '[]');

    let exists = usersInfo.find(u => u.email === email);
    if (exists) {
        emailError.innerText = "Email already registered";
        return;
    }

    usersInfo.push({
        firstName,
        lastName,
        email,
        pass
    });

    localStorage.setItem('usersInfo', JSON.stringify(usersInfo));

    alert("Account created successfully");

   
    window.location.assign("index.html");
}
