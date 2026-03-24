function render() {
    let users = JSON.parse(localStorage.getItem("usersInfo")) || [];

    let search = document.getElementById("search").value.toLowerCase();
    let role = document.getElementById("role").value;

    let list = document.getElementById("list");

    let filtered = users.filter(user => {
        let fullName = (user.firstName + " " + user.lastName).toLowerCase();

        let matchName = fullName.includes(search);
        let matchRole = role === "" || user.role === role;

        return matchName && matchRole;
    });

    if (filtered.length === 0) {
        list.innerHTML = "<p>No users found</p>";
        return;
    }

    let html = "";

    filtered.forEach(user => {
        html += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px 0;">
                <h4>${user.firstName} ${user.lastName}</h4>
                <p>Email: ${user.email}</p>
                <p>Role: ${user.role || "User"}</p>
            </div>
        `;
    });

    list.innerHTML = html;
}

// Load users on page load
window.onload = render;
