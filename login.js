function login() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    error.innerText = "";

    if (!email || !pass) {
        error.innerText = "Enter email and password";
        return;
    }

    let usersInfo = localStorage.getItem('usersInfo');
    usersInfo = usersInfo ? JSON.parse(usersInfo) : [];  // ✅ FIX

    let user = usersInfo.find(u => u.email === email && u.pass === pass);

    if (!user) {
        error.innerText = "Invalid credentials";
        return;
    }

    window.location.href = "dashboard.html";
}
