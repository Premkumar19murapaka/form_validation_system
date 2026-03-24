window.onload = render;

function render() {
    let users = JSON.parse(localStorage.getItem("usersInfo")) || [];

    let search = document.getElementById("search").value.toLowerCase();
    let role = document.getElementById("role").value;

    let list = document.getElementById("list");

    let filtered = users.filter(user => {
        let name = (user.firstName + " " + user.lastName).toLowerCase();

        let matchName = name.includes(search);
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
            <div style="padding:10px; border:1px solid #ccc; margin:10px 0;">
                <b>${user.firstName} ${user.lastName}</b><br>
                ${user.email}<br>
                Role: ${user.role || "User"}
            </div>
        `;
    });

    list.innerHTML = html;
}
